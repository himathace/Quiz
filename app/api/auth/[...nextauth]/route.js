import { Provider } from "@/context/cardcontext"
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";
import user from "@/models/user";
import connect from "@/lib/mongodb";


export const authoptions={

    providers:[

        CredentialsProvider({
            name:"credentials",
            async authorize(credentals){
                try{
                    

                    await connect()
                    if(credentals.email.length===0){
                        return null
                    }
                    const useremail=await user.findOne({email:credentals.email})
                    console.log(useremail)
                    if(!useremail){
                        return null
                    }

                    if(credentals.password.length===0){
                        return null
                    }
    
                    if(useremail.password!==credentals.password){
                        return null
                    }
                }
                catch(error){
                    console.error("auth error")
                    return null
                }

            }
        }),
    ],
    pages:{
        signIn:"/login"

    },
    secret:process.env.NEXT_serect_key
}

const handler=NextAuth(authoptions)
export {handler as GET,handler as POST}

