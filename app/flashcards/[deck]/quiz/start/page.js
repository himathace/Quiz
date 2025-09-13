import { BookOpen } from "lucide-react"
import Displayquiz from "@/app/components/quiz"



const startquiz=()=>{

    return(
        <div className="h-screen flex flex-col bg-purple-50">
            <div className="flex justify-center gap-x-3 pt-5 ">
                <p className="flex items-center text-white bg-purple-500 p-2 rounded-xl"><BookOpen size={25}></BookOpen></p>
                <h1 className="text-3xl font-bold text-from-violet-500 to-purple-400 flex items-center">QuizMaster</h1>
            </div>
            <p className="flex justify-center text-md text-gray-600 mb-10">
                Test your knowledge with our interactive quiz platform
            </p>
            <div className="mx-72">
                <Displayquiz />
                
            </div>

        </div>
    )
}

export default startquiz