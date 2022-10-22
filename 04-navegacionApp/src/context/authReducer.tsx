import { AuthState } from './AuthContext';

//tipos de acciones que tengo
type AuthAction =
    |   {type: 'singIn'}
    |   {type: 'logout'}
    |   {type: 'changeFavIcon', payload: string}
    |   {type: 'changeUser', payload: string}
//es una funcion pura que ingresa algo y sale algo
export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
   switch (action.type) {
    case 'singIn':
        return {
            ...state,
            isLoggedIn: true,
            username: 'no-username-yet',
        };
    case 'logout':
        return {
            ...state,
            isLoggedIn: false,
            username: undefined,
            favoriteIcon: undefined,
        };
    case 'changeFavIcon':
        return {
            ...state,
            favoriteIcon: action.payload,
        };
    case 'changeUser':
        return {
            ...state,
            username: action.payload,
        };
    default:
        return state;
   }
};
