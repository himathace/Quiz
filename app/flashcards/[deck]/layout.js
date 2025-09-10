import { Provider } from "@/context/cardcontext";

export default async function decklayout({params,children}){

    const {deck}=await params


    return(

        <Provider mydeck={deck} >
            {children}
        </Provider>
    )


}