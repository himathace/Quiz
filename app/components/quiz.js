const Displayquiz=()=>{

    return(

        <div className="bg-white border border-gray-300 p-11 rounded-3xl">
            <p className="flex justify-center text-2xl font-bold mb-12 ">What is the capital of France?</p>
            <div className="flex flex-col gap-y-5 mb-5">
                <button className="h-12 flex items-center p-5 font-semibold  ring-1 ring-gray-300 hover:bg-purple-100 hover:ring-purple-700 transition-all duration-300 rounded-xl">London</button>
                <button className="h-12 ring-1 font-semibold ring-gray-300 rounded-xl hover:bg-purple-100 hover:ring-purple-700 transition-all duration-300  flex items-center p-5 ">Berlin</button>
                <button className="h-12 ring-1 font-semibold ring-gray-300 rounded-xl hover:bg-purple-100 hover:ring-purple-700 transition-all duration-300 flex items-center p-5 ">Paris</button>
                <button className="h-12 ring-1 font-semibold ring-gray-300 rounded-xl hover:bg-purple-100 hover:ring-purple-700 transition-all duration-300 flex items-center p-5 ">Madrid</button>
            </div>
            <div className="flex justify-center">
                <button className="bg-purple-500 p-2 rounded-xl text-white">Next Question</button>
            </div>
        </div>
    )
}

export default Displayquiz