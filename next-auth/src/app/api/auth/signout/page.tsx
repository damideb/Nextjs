'use client'
import { signIn } from 'next-auth/react'
import React from 'react'

export default function Page() {
  return (
    <>
        <div>
        <input type='text' width='100px' style={{margin:'30px'}} placeholder='name'/> <br/>
        <input type='password' width='150px' placeholder='password'/>
    </div>

    <button onClick={()=> signIn()}>Sign in</button>
    </>


  )
}
