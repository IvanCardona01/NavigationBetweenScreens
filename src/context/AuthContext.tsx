import React, { useReducer } from "react";
//Definir como luce la informacion que tendra en context

import { createContext } from "react";
import { AuthAction, authReducer } from "./AuthReducer";

export interface AuthState {
    isLoggedIn: boolean;
    name?: string;
    favoriteIcon?: string;
}


//Estado inicial 

export const authInitialState: AuthState = {
    isLoggedIn: false,
}

//Decir a React como luce y que expone el context
export interface AuthContextProps {
    authState: AuthState;
    singIn: () => void;
    singOut: () => void
} 


export const AuthContext = createContext( {} as AuthContextProps);


//Componente provedor de estado
export const AuthProvider = ({ children }: any) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState)

    const singIn = () => {
        dispatch(AuthAction.singIn)
    }

    const singOut = () => {
        dispatch(AuthAction.singOut)
    }

    return(
        
        <AuthContext.Provider value={{ 
            authState,
            singIn,
            singOut
         }}>
            { children }
        </AuthContext.Provider>
    )
 }