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

        <div className="flex flex-col items-center h-screen">
            <div className="w-2xl">
                <div className="flex justify-between my-10">
                    <p className="text-gray-600 hover:text-black hover:cursor-pointer ">back</p>
                    <p className="text-lg font-medium">{carddat.title}</p>
                </div>
                <div >
                    <Link href={`/flashcards/${carddat._id}/add`}>
                        <button className="w-full text-center border-1 border-dashed hover:border-2 cursor-pointer bg-gray-200 font-medium text-black  py-3 px-4 rounded-lg mb-8">Add New Flashcard</button>
                    </Link>
                </div>
                <div>
                    <p className="text-lg font-medium mb-3">Flashcards:</p>
                </div>

                {
                    carddat.cards.length===0 ?
                        <h1 className="p-4 mb-10">No Flashcards Found</h1> :

                            carddat.cards.map((va)=>{
                                return <Flash xx={va.quiz} key={va._id} />
                            })
                }
                <div className="flex justify-between">
                    <button className="bg-black text-white py-3 px-20 rounded-lg font-medium">start quiz</button>
                    <button className="border border-gray-200 py-3 px-20 rounded-lg font-medium" >view status</button>
                </div>
            </div>
        </div>

        
    )
}

export default use