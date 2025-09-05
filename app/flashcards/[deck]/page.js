import Flash from "@/app/components/Flash"
import Link from "next/link"


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

        <div className="flex flex-col h-screen">
            
            <div className="flex justify-between bg-gradient-to-r h-24 px-16 py-5 border border-gray-300 ">
    
                <div>
                    <h1 className="text-3xl bg-gradient-to-r from-indigo-500 to-purple-500    bg-clip-text text-transparent font-bold">FlashMaster</h1>
                    <p className="text-sm text-gray-600">Work smater Not Harder</p>
                </div>
                <div >
                    <Link href={`/flashcards/${carddat._id}/add`}>
                        <button className="w-full text-center border-1 border-dashed hover:border-2 cursor-pointer bg-gray-200 font-medium text-black  py-3 px-4 rounded-lg mb-8">Add New Flashcard</button>
                    </Link>
                </div>
    
            </div>

            <div className="my-5 mx-16">
                <p className="text-3xl font-medium bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">{carddat.title}</p>
                <p className="text-sm">12 of 12 cards</p>
            </div>
            <div className="flex justify-between mx-16 gap-x-5 mb-5">
                <input type="text"  className="w-full h-10 border border-gray-300 rounded-lg p-3" placeholder="Search FlashCards"/>
                <select className="border border-gray-300 rounded-lg">
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
                                return <Flash xx={va.quiz} key={va._id} />
                            })
                }
            </div>
        </div>

        
    )
}

export default use