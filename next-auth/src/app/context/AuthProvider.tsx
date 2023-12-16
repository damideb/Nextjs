'use client'

import { SessionProvider } from 'next-auth/react'

export default function AuthProvider({ children }: {
    children: React.ReactNode
}) {
    return (
        //  this provides authenticated user to children pages when they need it. it uses react context provider underhood
        <SessionProvider> 
            {children}
        </SessionProvider>
    )
}