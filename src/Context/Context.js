import { createContext, useEffect, useState } from "react";

const Context = createContext()

const ContextProvider  =({children})=>{
    const [bar , setBar ] = useState(localStorage.getItem("token"))

    useEffect(() =>{
       bar && localStorage.setItem("token",bar)
    },[bar])

    return (
        <Context.Provider value={{bar ,setBar}}>
            {children}
        </Context.Provider>
    )
}
export {Context, ContextProvider}