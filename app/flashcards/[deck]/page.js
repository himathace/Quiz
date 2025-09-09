import Flash from "@/app/components/Flash"
import Link from "next/link"
import { Settings,User,Plus,Search,Book,BookOpen } from "lucide-react"
import Searchflashcard from "@/app/components/searchFlashcard"


const use=async ({params})=>{

    const {deck}=await params

    const getdata=async()=>{

        try{

            const userdata=await fetch("http://localhost:3000/api/car",{
                method:"post",
                headers:{
                "content-type":"application/json"
                },
                body:JSON.stringify({
                    DeckID:deck
                })

            })

            const data=await userdata.json()
            return data.message

        }
        catch(error){
            console.log(error)
        }
    }

    const carddat=await getdata()





    return(

        <div className="flex flex-col">
            
            <div className="flex justify-between items-center bg-gradient-to-r  p-3 border bg-white border-gray-300 ">
    
                <div className="flex gap-x-3 items-center">

                    <BookOpen className="w-12 h-12 p-2 rounded-xl bg-purple-500" color="white"></BookOpen>   
                    <div>
                        <h1 className="text-2xl bg-gradient-to-r text-black font-bold">FlashMaster</h1>
                        <p className="text-sm text-gray-500">Work smater Not Harder</p>
                    </div>
                </div>
                <div className="flex  gap-x-3" >

                    <div className="flex mr-96 gap-x-5 items-center">
                        <Link href={`/flashcards/${carddat._id}`}>
                            <label className="text-black hover:text-purple-600 cursor-pointer font-light">Study Mode</label>
                        </Link>
                        <Link href={`/flashcards/${carddat._id}/quiz`}>
                            <label className="text-gray-500 hover:text-purple-600 cursor-pointer font-light">Quiz Mode</label>
                        </Link>
                    </div>
                    <div>
                        <Link href={`/flashcards/${carddat._id}/add`}>
                            <button className="transition-colors duration-300 w-full text-center border  border-gray-300 flex gap-x-2 cursor-pointer font-medium text-black  p-2 hover:bg-purple-500  rounded-lg hover:text-white b-8">
                                <Plus></Plus>
                                Add New Flashcard
                            </button>
                        </Link>
                    </div>


                    <button className="transition-colors duration-300 w-10  h-10 flex justify-center items-center border border-gray-300 rounded-lg hover:bg-purple-500 hover:text-white hover:cursor-pointer" >
                        <Settings></Settings>
                    </button>
                    <button className="transition-colors duration-300  w-10  h-10 flex justify-center items-center border border-gray-300 rounded-lg hover:bg-purple-500 hover:text-white hover:cursor-pointer">
                        <User></User>
                    </button>


                </div>
    
            </div>

            <div className="my-3 mx-16">
                <p className="text-4xl font-medium bg-gradient-to-r  from-purple-500  to-fuchsia-500 bg-clip-text text-transparent">{carddat.title}</p>
                <p className="text-xs text-gray-500">12 of 12 cards</p>
            </div>
            <div className="flex justify-between mx-16 gap-x-5 mb-5">
                <input type="text" className="w-full h-10 border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-purple-700 focus:ring-1 " placeholder=" Search FlashCards"/>
                <select className="border border-gray-300 rounded-lg p-2">
                    <option>All Levels</option>
                    <option>Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>
                </select>
            </div>
            <div className="grid grid-cols-4 gap-5 mx-16">

                {
                    carddat.cards.length===0 ?
                        <h1 className="p-4 mb-10">No Flashcards Found</h1> :

                            carddat.cards.map((va)=>{
                                return <Flash xx={va}  key={va._id} />
                            })
                }
            </div>
        </div>

        
    )
}

export default use