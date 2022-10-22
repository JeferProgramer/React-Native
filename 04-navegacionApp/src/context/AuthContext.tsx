import React, { createContext, useReducer } from 'react';
import { authReducer } from './authReducer';

//definir como luce, que informacion tendre
export interface AuthState{
    isLoggedIn: boolean,
    username?: string,
    favoriteIcon?: string,
}

//estado inicial
export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined,
};

//lo usaremos para decirle a react como luce y que expone el context
export interface AuthContextProps{
    authState: AuthState;
    signIn: () => void;
    logout: () => void;
    changeFavoriteIcon: (iconName: string) => void;
    changeUsername: (username: string) => void;
}

//crear el contexto
export const AuthContext = createContext({} as AuthContextProps);

//component proveedor del estado
export const AuthProvider = ({children}: any) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState);

    const signIn = () => {
        dispatch({type: 'singIn'});
    };

    const changeFavoriteIcon = (iconName: string) => {
        dispatch({type: 'changeFavIcon', payload: iconName});
    };

    const logout = () => {
        dispatch({type: 'logout'});
    };

    const changeUsername = (username: string) => {
        dispatch({type: 'changeUser', payload: username});
    };

    return (
        <AuthContext.Provider
            value={{
                authState,
                signIn,
                logout,
                changeFavoriteIcon,
                changeUsername,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
