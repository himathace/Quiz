import { Provider } from "@/context/cardcontext";
import { BookOpen } from "lucide-react";

export default async function decklayout({params,children}){

    const {deck}=await params


    return(

        <Provider mydeck={deck} >
            <div className="flex justify-center gap-x-3 pt-5 ">
                <p className="flex items-center text-white bg-purple-500 p-2 rounded-xl"><BookOpen size={25}></BookOpen></p>
                <h1 className="text-3xl font-bold text-from-violet-500 to-purple-400 flex items-center">QuizMaster</h1>
            </div>
            <p className="flex justify-center text-md text-gray-600 mb-3">
                Test your knowledge with our interactive quiz platform
            </p>
            {children}
        </Provider>
    )


}