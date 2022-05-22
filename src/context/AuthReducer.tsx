import { AuthState } from './AuthContext';
 
export enum AuthAction {
    singIn, singOut
}


export const authReducer = (state: AuthState, action: AuthAction):AuthState => {

    switch (action){
        case AuthAction.singIn:
            return {
                ...state,
                isLoggedIn: true,
                name: 'Ivan'
            }
        case AuthAction.singOut:
            return {
                ...state,
                isLoggedIn: false,
                name: undefined
            }
        default:
            return state;
    }
}