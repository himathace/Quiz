"use client"

import { createContext, useState, useEffect, Children } from "react"


export const usercontext=createContext()

export function Provider({mydeck,children}){

    const [newdata,setdata]=useState("")

    useEffect(()=>{

        const fetchdata=async()=>{
    
            try{
    
                const userdata=await fetch("http://localhost:3000/api/car",{
                    method:"post",
                    headers:{
                        "content-type":"application/json"
                    },
                    body:JSON.stringify({
                        DeckID:mydeck
                    })
                })
    
                const data=await userdata.json()
                setdata(data.message)
    
            }
            catch(error){
                console.log(error)
            }
    
        }
    
        fetchdata()

    },[mydeck])


    return(
        <usercontext.Provider value={newdata}>
            {children}
        </usercontext.Provider>
    )
}