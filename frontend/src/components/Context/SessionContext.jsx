import { createContext } from "react";


export const SessionContext=createContext()

export const AppContext=({children})=>{
    const url=""


    return(

    <SessionContext.Provider value={url}>
        {children}
    </SessionContext.Provider>
    )
}