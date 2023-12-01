
const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos"

const API_KEY: string = process.env.DATA_API_KEY as string

export async function GET(){
    const res = await fetch(DATA_SOURCE_URL)
    const todos: Todo[]= await res.json()

    return Response.json(todos)
}

// Request is a fetch API interface that represent a resource request
//you can create a new request by using it with new keyword and url passsed as a parameter
// it also has various properties on it. e.g Request.url, returns the url of the request
// Request.json returns a promise from the request body as Json. It takes in JSON as input and returns a javascript object

export async function DELETE(request: Request){

    const {id}:Partial<Todo> = await request.json()
    if(!id) return Response.json({'message': 'Todo is required'})

    await fetch(`${DATA_SOURCE_URL}/${id}`,{
        method: 'DELETE',
        headers:{
            'content-Type': 'application/json',
            'API-KEY': API_KEY
        }
    })
    return Response.json({'message': `Todo ${id} was deleted`})
}

export async function POST(request: Request){

    const {userId, title}:Partial<Todo> = await request.json()

    if(!userId || !title) return Response.json({'message': 'missing required data'})

    const res=  await fetch(DATA_SOURCE_URL,{
        method: 'POST',
        headers:{
            'content-Type': 'application/json',
            'API-KEY': API_KEY
        },
        body: JSON.stringify({
            userId, title,completed:false
        })
    })

    const newTodo:Todo = await res.json()

    return Response.json(newTodo)
}

export async function PUT(request: Request){

    const {userId, id, title, completed }:Todo = await request.json()

    if(!userId || !id || !title || typeof(completed)!=='boolean') return Response.json({'message': 'missing required data'})

    const res=  await fetch(`${DATA_SOURCE_URL}/${id}`,{
        method: 'PUT',
        headers:{
            'content-Type': 'application/json',
            'API-KEY': API_KEY
        },
        body: JSON.stringify({
            userId, id, title,completed
        })
    })

    const updatedTodo:Todo = await res.json()

    return Response.json(updatedTodo)
}