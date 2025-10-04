import { Provider } from "@/context/cardcontext"
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";


export const authoptions={

    providers:[
        GoogleProvider({
            clientId:"client id",
            clientSecret:"client serect"
        })
    ],
    session:{
        strategy:"jwt"
    },
    serect:"this is serect"
}

const handler=NextAuth(authoptions)
export {handler as GET,handler as POST}

