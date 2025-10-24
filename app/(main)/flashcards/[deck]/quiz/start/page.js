import { BookOpen } from "lucide-react"
import Displayquiz from "@/app/components/quiz"



const startquiz=()=>{

    return(
        <div className="h-screen flex flex-col bg-purple-50">
            <div className="mx-72">
                
                <Displayquiz />
                
            </div>

        </div>
    )
}

export default startquiz