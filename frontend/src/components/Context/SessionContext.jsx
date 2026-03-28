import { createContext } from "react";


export const SessionContext=createContext()

export const AppContext=({children})=>{
    const url=""
    const studyData=[]

    return(

    <SessionContext.Provider value={{url,studyData}}>
        {children}
    </SessionContext.Provider>
    )
}