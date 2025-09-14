import Link from "next/link"
import { redirect } from "next/navigation"

const fetchdata=async(formdata)=>{

    "use server"

    try{

        const deckc=formdata.get("deck")
        const userquestion=formdata.get("qu")
        const useranswer=formdata.get("answer")
        const carddificalty=formdata.get("deficult")
        const option1=formdata.get("op1")
        const option2=formdata.get("op2")
        const option3=formdata.get("op3")
        const option4=formdata.get("op4")

        const userdata=await fetch("http://localhost:3000/api/addFlash",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({
                question:userquestion,
                Answer:useranswer,
                document:deckc,
                flashdificulty:carddificalty,
                quizop1:option1,
                quizop2:option2,
                quizop3:option3,
                quizop4:option4
            })

        })

        if(userdata.ok){

            const data=await userdata.json()
            console.log(data)
        }
        else{
            throw new Error("Failed to create flashcard")
        }

        
    }
    catch(error){
        
        console.log(error)
        return
    }
    
    redirect(`/flashcards/${formdata.get("deck")}`)
}





const Add=async({params})=>{

    const {deck}=await params

    return(
        <form action={fetchdata }>
            <div className="flex flex-col justify-center items-center bg-gradient-to-r">
                <div>
                    <div className="border-1 border-gray-300 flex flex-col px-5 py-10 m-20 rounded-2xl shadow-md" >
                    <h1 className="text-center text-2xl font-semibold mb-10">Design Your Flashcard</h1>

                        <label className="mb-2 font-semibold">Question</label>
                        <textarea type="text" placeholder="Enter Your question" name="qu" className="w-xl border p-2 h-28 ring-0 focus:ring-1 border-gray-300 focus:outline-none focus:border-purple-700   rounded-xl mb-5"></textarea>

                        <input type="hidden" name="deck" value={deck} />

                        <label className="mb-2 font-semibold">Correct Answer</label>
                        <input type="text" name="answer" placeholder="Enter Your answer" className="w-full p-2 border border-gray-300 focus:ring-1 focus:outline-none focus:border-purple-700 rounded-xl mb-5 "></input>

                        <label className="mb-2 font-semibold">Answer Options</label>
                        <input type="text" placeholder="option 1" className="w-full p-2 border border-gray-300 focus:ring-1 focus:outline-none focus:border-purple-700 rounded-xl mb-2 " name="op1"></input>
                        <input type="text" placeholder="option 2" className="w-full p-2 border border-gray-300 focus:ring-1 focus:outline-none focus:border-purple-700 rounded-xl mb-2 " name="op2"></input>
                        <input type="text" placeholder="option 3" className="w-full p-2 border border-gray-300 focus:ring-1 focus:outline-none focus:border-purple-700 rounded-xl mb-2 " name="op3"></input>
                        <input type="text" placeholder="option 4" className="w-full p-2 border border-gray-300 focus:ring-1 focus:outline-none focus:border-purple-700 rounded-xl mb-5 " name="op4"></input>
                        <label className="mb-2 font-semibold">Deficulty</label>
                        <select className="h-10 border border-gray-300 focus:ring-1 focus:outline-none focus:border-purple-700 rounded-xl pl-2" name="deficult">
                            <option>Easy</option>
                            <option>Medium</option>
                            <option>Hard</option>
                        </select>


                        <div className="flex justify-between mt-14 gap-x-5">
                            <button className="py-2 w-5/6 text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl font-medium " type="submit" >Create Flashcard</button>
                            <button className="py-2 w-1/6 text-black border-2 font-medium border-gray-300 rounded-xl hover:border-gray-400 ">Reset</button>
                        </div>

                    </div>
                  
                </div>
            </div>
        </form>
    )
}

export default Add