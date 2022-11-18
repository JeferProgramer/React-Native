/* eslint-disable react-hooks/exhaustive-deps */
import Geolocation from '@react-native-community/geolocation';
import { useEffect, useState, useRef } from 'react';
import { Location } from '../interfaces/appInterface';

export const useLocation = () => {

    const [hasLocation, setHasLocation] = useState(false);
    const [routeLines, setRouteLines] = useState<Location[]>([]);
    const watchId = useRef<number>();
    const [initialPosition, setInitialPosition] = useState<Location>({
        latitude: 0,
        longitude: 0,
    });
    const [userLocation, setUserLocation] = useState<Location>({
        longitude: 0,
        latitude: 0,
    });
    const isMounted = useRef<boolean>(true);

    useEffect(() => {
        isMounted.current = true;
        return () => {
            isMounted.current = false;
        };
    }, []);


    useEffect(() => {
       getCurrentLocation()
        .then(location => {

            if (!isMounted.current) {return;}

            setInitialPosition(location);
            setUserLocation(location);
            setRouteLines(routes => [...routes, location]);
            setHasLocation(true);
        });
    }, []);


    const getCurrentLocation = (): Promise<Location> => {
        return new Promise((resolve, reject) => {
             Geolocation.getCurrentPosition(
                ({coords}) => {

                   if (!isMounted.current) {return;}

                   resolve({
                    latitude: coords.latitude,
                    longitude: coords.longitude,
                   });
                },
                (err) => reject({err}),{enableHighAccuracy: true}
            );
        });
    };

    const followUserLocation = () => {
        watchId.current =  Geolocation.watchPosition(
            ({coords}) => {
                const location: Location = {
                    latitude: coords.latitude,
                    longitude: coords.longitude,
                };

                setUserLocation(location);
                setRouteLines(routes => [...routes, location]);
            },
            (err) => console.log(err), {enableHighAccuracy: true, distanceFilter: 10}
        );
    };

    const stopFollowUserLocation = () => {
        if (watchId.current)
            {Geolocation.clearWatch(watchId.current);}
    };

    return {
        hasLocation,
        initialPosition,
        getCurrentLocation,
        followUserLocation,
        userLocation,
        stopFollowUserLocation,
        setUserLocation,
        routeLines,
    };
};
