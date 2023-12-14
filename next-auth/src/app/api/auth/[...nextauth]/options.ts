import type {NextAuthOptions} from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'

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
            name: 'name and password',
            credentials:{
                username:{
                    label: 'username',
                    type: 'text',
                    placeholder: 'eg: emily'
                },
                password:{
                    label: "Password", 
                    type: "password",
                    placeholder: 'type your password'
                }
                },
                async authorize(credentials){
                    const user = {id:'42', name: 'Dami', password:'nextauth'}
                    
                    if (credentials?.username===user.name && credentials?.password===user.password){
                        return user
                    }
                    else{
                        return null
                    }
            }
        })
    ],
    pages: {
        signOut: '/auth/signout'
    }
}