"use client"

function Add({ff}){

    return(

        <form onSubmit={ff}>
            <div className="flex flex-col h-screen justify-center items-center">
                <div className="border-0 shadow-lg bg-white p-5">
                    <div className="flex justify-between mb-3">
                        <label className="text-slate-600">back</label>
                        <label>Create New Deck</label>
                    </div>
                    <div>
                        Create Your Deck
                        Build your study resource with ease.
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-slate-700 mb-3">Deck Name</label>
                        <input type="text" className="h-12 rounded-lg border-2 border-slate-200 focus:ring-blue-500/20 transition-all duration-200 pl-3 mb-3" placeholder="Enter a name for your deck" name="deckname"></input>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-slate-700 mb-3">Description</label>
                        <textarea type="text" className="h-28 rounded-lg border-2 border-slate-200 focus:ring-blue-500/20 transition-all duration-200 p-3 mb-5 resize-none " placeholder="Describe what this deck is about..." name="description" ></textarea>
                    </div>
                    <div>
                        <button className="bg-black text-white w-full h-12 rounded-xl" type="submit" >Add Deck</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Add