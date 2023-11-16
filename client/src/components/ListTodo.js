import React,{Fragment,useEffect,useState} from "react";
import EditTodo from "./EditTodo";

const ListTodos=()=>{
  const [todos,setTodos]=useState([]);
  const [isLoading,setLoading]=useState(true);
  const deleteTodo=async(id)=>{
    try {
      const deleteTodo=await fetch("http://10.102.90.130:5000/todos/${id}",{
        method:"DELETE"
      });

      setTodos(todos.filter(todo=>todo.todo_id!==id));
      console.log(deleteTodo);
    } catch (error) {
      console.error(error.message);
    }
  }

  const getTodos=async ()=>{
    try {
      console.log("${process.env.BACKEND_URL}")
      const response=await fetch("http://10.102.90.130:5000/todos")
      const jsondata=await response.json();
      setTodos(jsondata);
      setLoading(false);
    } catch (error) {
      console.error(error.message);
    }
  }


  useEffect(()=>{
    getTodos();
  },[]);



  return <Fragment>
    {
      isLoading?<Fragment>
      loading.....
      </Fragment>:
      <table className="table table-hover mt-5 text-center">
    <thead>
      <tr>
        <th>Task Description</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
    {todos.map(todo=>(
      <tr key={todo.todo_id}>
        <td>{todo.description}</td>
        <td><EditTodo todo={todo}/></td>
        <td><button className="btn btn-lg btn-danger" onClick={()=>deleteTodo(todo.todo_id)}>Delete</button></td>
      </tr>
    ))}
      
    </tbody>
  </table>
    }
  </Fragment>
}

export default ListTodos;