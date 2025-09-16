import { Provider } from "@/context/cardcontext";
import { BookOpen } from "lucide-react";

export default async function decklayout({params,children}){

    const {deck}=await params


    return(

        <Provider mydeck={deck} >
            {children}
        </Provider>
    )


}