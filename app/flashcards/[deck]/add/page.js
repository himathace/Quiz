const fetchdata=async(formdata)=>{

    "use server"

    try{

        const deckc=formdata.get("deck")
        const userquestion=formdata.get("qu")
        const useranswer=formdata.get("answer")
        const userdata=await fetch("http://localhost:3000/api/addFlash",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({
                question:userquestion,
                Answer:useranswer,
                document:deckc
            })

        })
        const data=await userdata.json()
        console.log(data)

    }
    catch(error){

        console.log(error)
    }

}





const Add=async({params})=>{

    const {deck}=await params

    return(
        <form action={fetchdata }>
            <div className="flex flex-col justify-center items-center bg-gradient-to-r  from-purple-100 via-gray-200 to-purple-100">
                <div>
                    <div className="border-2 border-gray-700 flex flex-col px-5 py-10 m-20 rounded-2xl" >
                    <h1 className="text-center text-2xl font-semibold mb-10">Design Your Flashcard</h1>

                        <label className="mb-2 font-semibold">Question</label>
                        <textarea type="text" placeholder="Enter Your question" name="qu" className="w-xl border p-3 h-28 ring-0 focus:ring-1 border-gray-700 focus:outline-none focus:border-purple-700   rounded-xl mb-5"></textarea>

                        <input type="hidden" name="deck" value={deck} />

                        <label className="mb-2 font-semibold">Correct Answer</label>
                        <input type="text" name="answer" placeholder="Enter Your answer" className="w-full p-3 border border-gray-700 focus:ring-1 focus:outline-none focus:border-purple-700 rounded-xl mb-5 "></input>

                        <label className="mb-2 font-semibold">Answer Options</label>
                        <input type="text" placeholder="option 1" className="w-full p-3 border border-gray-700 focus:ring-1 focus:outline-none focus:border-purple-700 rounded-xl mb-2 "></input>
                        <input type="text" placeholder="option 2" className="w-full p-3 border border-gray-700 focus:ring-1 focus:outline-none focus:border-purple-700 rounded-xl mb-5 "></input>
                        <label className="mb-2 font-semibold">Description</label>
                        <input type="text" placeholder="Enter Description about" className="h-12 border border-gray-700 focus:ring-1 focus:outline-none focus:border-purple-700 rounded-xl p-3" />


                        <div className="flex justify-between mt-14 gap-x-5">
                            <button className="py-2 w-5/6 text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl font-medium " type="submit" >Create Flashcard</button>
                            <button className="py-2 w-1/6 text-black border-2 font-medium border-gray-700 rounded-xl hover:border-gray-400 ">Reset</button>
                        </div>

                    </div>
                  
                </div>
            </div>
        </form>
    )
}

export default Add