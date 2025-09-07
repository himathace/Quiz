"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { useSearchParams } from "next/navigation"
import { UserSearch } from "lucide-react"

const Searchflashcard=({params})=>{


    const [usersearch,setsearch]=useState("")

    useEffect(()=>{

        const fetchdata=async ()=>{
            try{
                const userdata=await fetch(`http://localhost:3000/api/car?search=${UserSearch}`,{
                    method:"POST",
                    headers:{
                        "content-type":"application/json"
                    }

                })
                const data=await userdata.json()
                return data.message
    
            }
            catch(error){
                console.log(error)
            }
        }

        fetchdata()




    },[usersearch])




    return(
        <input type="text" value={usersearch} className="w-full h-10 border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-purple-700 focus:ring-1 " placeholder=" Search FlashCards" onChange={(e)=>setsearch(e.target.value)}/>
    )
}

export default Searchflashcard