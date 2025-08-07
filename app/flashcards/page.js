export default function Flashcard(){

    return(

        <div className="flex flex-col items-center h-screen">
            <div className="w-2xl">
                <div className="flex justify-between my-10">
                    <p className="text-gray-600">Back</p>
                    <p className="text-lg font-medium">Deck: Math Basic</p>
                </div>
                <div >
                    <button className="w-full text-center border-1 border-dashed hover:border-2 cursor-pointer bg-gray-200 font-medium text-black  py-3 px-4 rounded-lg mb-8">Add New Flashcard</button>
                </div>
                <div>
                    <p className="text-lg font-medium mb-3">Flashcards:</p>
                </div>
                <div className="border border-gray-200 rounded-lg hover:border-gray-400 p-4 mb-10">
                    card
                </div>
                <div className="flex justify-between">
                    <button className="bg-black text-white py-3 px-20 rounded-lg font-medium">start quiz</button>
                    <button className="border border-gray-200 py-3 px-20 rounded-lg font-medium" >view status</button>
                </div>
            </div>
        </div>
    )

}