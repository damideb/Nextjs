import { NextResponse } from "next/server";

export function middleware(request:Request){ 
    if (request.url.includes('/api/')){

    }
    console.log('middleware')

    console.log(request.method)
    console.log(request.url)

    const origin = request.headers.get('origin')
    console.log(origin)

    return NextResponse.next()
}

// this means the middleware file will only be applied to path in the api folder. the asteric will make it apply to nested path too
// Which means it wont run any every request made on the page
export const config={
    matcher:'/api/:path*'    // to include mulitple paths - ['/about/:path', '/dasdboard/:path']
}

