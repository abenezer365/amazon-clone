import React,{ createContext,useReducer } from "react";

export const Context = createContext()

export const ContextProvider = ({children,reducer,inialState})=>{
    return(
        <Context.Provider value={useReducer(reducer,inialState)}>
           {children}
        </Context.Provider>
    )
}