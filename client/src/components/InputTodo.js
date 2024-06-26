import React,{Fragment,useState} from "react";
import { BASE_URL } from "./BackendURL.js";

const InputTodo=()=>{

  const [description,setdescription]=useState("");

  const onSubmitform=async (e)=>{
  e.preventDefault();
    try {
      const body={description};
      const response=await fetch(`${BASE_URL}/todos`,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(body)
    });
    console.log(response);
    window.location="/";
    } catch (error) {
      console.error(error.message);
    }
  }

  return(
    <Fragment>
      <h1 className="text-center mt-5">Simple TO-DO Application</h1>
      <form className="d-flex" onSubmit={onSubmitform}>
       <input className="form-control" type="text" value={description} onChange={e=>
      setdescription(e.target.value)} />
       <button className="text-center btn btn-lg btn-success">Add</button> 
      </form>
    </Fragment>
  )
}

export default InputTodo;
