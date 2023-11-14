import React,{Fragment,useState} from "react";

const EditTodo=({todo})=>{
  const [description,setdescription]=useState(todo.description)

  const updateDescription=async (e)=>{
    e.preventDefault();
    try {
      const body={description};
      const response=await fetch(`http://10.96.88.107:5000/todos/${todo.todo_id}`,{
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(body)
        
      });
      console.log(response);
      window.location="/"
    } catch (error) {
      console.error(error.message)
    }
  }
  
  return (<Fragment>
  <button type="button" className="btn btn-warning btn-lg" data-bs-toggle="modal" data-bs-target={`#id${todo.todo_id}`}>
    Edit
  </button>

  < div className="modal" id={`id${todo.todo_id}`} onClick={()=>setdescription(todo.description)}>
    <div className="modal-dialog">
      <div className="modal-content">


        <div className="modal-header">
          <h4 className="modal-title">Edit Task</h4>
          <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={()=>setdescription(todo.description)}></button>
        </div>


        <div className="modal-body">
          <input type="text" className="form-control" value={description} onChange={e=>setdescription(e.target.value)}/>
        </div>


        <div classname="modal-footer">
          <button type="button" className="btn btn-warning btn-lg mb-2" data-bs-dismiss="modal" onClick={e=>updateDescription(e)}>Edit</button> &nbsp;&nbsp;&nbsp;
          <button type="button" className="btn btn-danger btn-lg mb-2" data-bs-dismiss="modal" onClick={()=>setdescription(todo.description)}>Close</button>
        </div>

    </div>
  </div>
</div>
</Fragment>
)}

export default EditTodo;