import type {NextAuthOptions} from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth} from '@/app/firebase'
export const options:NextAuthOptions ={
    providers:[
        GithubProvider({
            clientId:process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,

        }),
        GoogleProvider({
            clientId:process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string,
        }),
        CredentialsProvider({
            // name: 'name and password',
            credentials:{
                // username:{
                //     label: 'username',
                //     type: 'text',
                //     placeholder: 'eg: emily'
                // },
                // password:{
                //     label: "Password", 
                //     type: "password",
                //     placeholder: 'type your password'
                // }
                },
                async authorize(credentials): Promise<any>{
                    // const user = {id:'42', name: 'Dami', password:'nextauth'}
                    
                    // if (credentials?.username===user.name && credentials?.password===user.password){
                    //     return user
                    // }
                    // else{
                    //     return null
                    // }

                       return await signInWithEmailAndPassword(auth, (credentials as any).useremail, (credentials as any).userPassword || "")
                    .then(userCredential=>{
                        if(userCredential.user){
                            return userCredential.user
                        }
                        return null;
                    })
                    .catch(error=> {console.log(error)})
            }
        })
    ],
    pages: {
        signIn: '/auth/signin'
    }
}