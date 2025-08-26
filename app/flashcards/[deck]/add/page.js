const fetchdata=async(formdata)=>{

    "use server"

    try{

        const deckc=formdata.get("deck")
        const userquestion=formdata.get("qu")
        const userdata=await fetch("http://localhost:3000/api/addFlash",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({
                question:userquestion,
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
            <div className="flex flex-col h-screen justify-center items-center ">
                <div>
                    <div className="border-2 border-gray-200 flex flex-col px-5 py-10 rounded-2xl mb-5 hover:border-gray-300" >
                        <label className="mb-3">Question:</label>
                        <input type="text" placeholder="Enter Your question" name="qu" className="w-xl border p-3 border-gray-300 focus:border-gray-500 focus:ring-gray-500 rounded-xl mb-5"></input>
                        <input type="hidden" name="deck" value={deck} />
                        <label className="mb-3">Answer:</label>
                        <input type="text" placeholder="Enter Your answer" className="w-full p-3 border border-gray-300 focus:border-gray-500 focus:ring-gray-500 rounded-xl mb-5 "></input>
                    </div>
                    <div>
                        <button className="text-black border-2 border-gray-200 w-full p-2 rounded-xl mb-3 hover:border-gray-400 font-medium">Flip preview</button>
                    </div>
                    <div className="flex justify-between">
                        <button className="px-28 py-2 text-white bg-black rounded-xl font-medium hover:bg-gray-800 " type="submit" >Save</button>
                        <button className="px-28 py-2 text-black border-2 font-medium border-gray-200 rounded-xl hover:border-gray-400 ">Cancel</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Add