/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect, useState } from 'react';
import { AppState, PermissionStatus, Platform } from 'react-native';
import { PERMISSIONS, request, check, openSettings } from 'react-native-permissions';

export interface PermissionsState {
    locationStatus: PermissionStatus;
}

export const permissionInitState: PermissionsState = {
    locationStatus: 'unavailable',
};

type PermissionsContextProps = {
    permissions: PermissionsState;
    askLocationPermission: () => void;
    chackLocationPermission: () => void;
}

export const PermissionsContext = createContext({} as PermissionsContextProps);

export const PermissionsProvier = ({children}: any) => {

    const [permissions, setPermissions] = useState(permissionInitState);

    useEffect(() => {

        chackLocationPermission();

        AppState.addEventListener('change', state => {
            if (state !== 'active') {return;}
            chackLocationPermission();
        });
    }, []);


    const askLocationPermission = async() => {

        let permissionStatus : PermissionStatus;

        if (Platform.OS === 'ios'){
          permissionStatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
        } else {
          permissionStatus = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        }

        if (permissionStatus === 'blocked'){
            openSettings();
        }

        setPermissions({
            ...permissions,
            locationStatus: permissionStatus,
        });
    };

    const chackLocationPermission = async() => {

        let permissionStatus : PermissionStatus;

        if (Platform.OS === 'ios'){
          permissionStatus = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
        } else {
          permissionStatus = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        }

        setPermissions({
            ...permissions,
            locationStatus: permissionStatus,
        });
    };

    return (
        <PermissionsContext.Provider value={{
            permissions,
            askLocationPermission,
            chackLocationPermission,
        }}>
            {children}
        </PermissionsContext.Provider>
    );
};
