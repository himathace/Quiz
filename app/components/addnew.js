import { Plus } from "lucide-react"

export default function Add(){

    return(

        <div className="border-2 h-56 border-gray-200 rounded-xl border-dashed flex flex-col transition-all duration-300 hover:border-purple-500 group justify-center items-center">
            <div className="p-3 border-2 text-gray-400 border-dashed rounded-full group-hover:border-purple-500 transition-colors duration-300"><Plus className="group-hover:text-purple-500 transition-colors duration-300"></Plus></div>
            <p className="font-semibold text-sm text-gray-600 mt-3 group-hover:text-purple-600 transition-colors duration-300">Create New Flahscard</p>
            <p className="text-xs text-gray-500 mt-2">Start Building Your Flahscard collection</p>
        </div>
    )
}