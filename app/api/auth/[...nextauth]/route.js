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
                    const useremail=await user.findOne({email:credentals.email})
                    console.log(useremail)
                    if(!useremail){
                        return null
                    }
    
                    if(useremail.password!==credentals.password){
                        return null
                    }
                    return {name:useremail.username,email:useremail.email}
                }
                catch(error){
                    console.error("auth error")
                    return null
                }

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

