import { createContext } from "react";


export const SessionContext=createContext()

export const AppContext=({children})=>{
    const url=""
    let studyData=[]
    const data=localStorage.getItem("data")
    console.log(data)
    return(

    <SessionContext.Provider value={{url,studyData}}>
        {children}
    </SessionContext.Provider>
    )
}