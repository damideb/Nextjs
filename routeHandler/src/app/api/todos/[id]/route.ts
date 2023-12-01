
const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos"

type Props = {
    params:{
        id:string
    }
}
// dynamic route
export async function GET(request:Request, {params:{id}}: Props){
    // const url = request.url
    // const id = url.slice(url.lastIndexOf('/') + 1)
    const res = await fetch(`${DATA_SOURCE_URL}/${id}`)
    const todo: Todo= await res.json()

    if (!todo.id) return Response.json({"message": "Todo not found"})

    return Response.json(todo)
}