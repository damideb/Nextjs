import TodoList from "./components/TodoList"
import AddTodo from "./components/AddTodo"

export const revalidate = 0 // this is also similar to setting cache to no-store in the fetch request
// Meaning components will be rendered and data fetched on every incoming request to the server so far we are on the configured page

export default function Home() {

  return (
    <>
      <AddTodo />
      <TodoList />
    </>
  )
}