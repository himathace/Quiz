import { Provider } from "@/context/cardcontext"
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";
import user from "@/models/user";


export const authoptions={

    providers:[

        CredentialsProvider({
            name:"credentials",
            async authorize(credentals){

                const useremail=await user.findOne({email:credentals.email})
                if(!useremail){
                    return null
                }

                if(useremail.password!==credentals.password){
                    return null
                }
                return {user:useremail.username}
            }
        }),
    ],
    session:{
        strategy:"jwt"
    },
    pages:{
        signIn:"/login"

    },
    secret:process.env.NEXT_serect_key
}

const handler=NextAuth(authoptions)
export {handler as GET,handler as POST}

