import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
function Reset() {
   const[newpass,setpass]=useState("");
const[rent,setrent]=useState("");
const {token}=useParams();
   const handler=  ()=>{
axios.post(`http://localhost:5174/reset-password/${token}`,{newpass}).then(()=>alert("Password Changed"))
   }


  return (
<div className='col-md-4 m-5 mx-auto'>
    <h3 className="" onChange={(e)=>setpass(e.target.value)} style={{textAlign:"center"}}>Reset the password</h3>
    <label className='form-label'>Password</label>
    <input className='form-control' onChange={(e)=>setpass(e.target.value)}></input>

       <label className='form-label mt-3'>Re-Enter Password</label>
    <input className='form-control' onChange={(e)=>setrent(e.target.value)}></input>
    {rent && rent!==newpass &&
    ( <small className='text-dark' >password Not Matched</small>)}

{rent && rent===newpass && 
(<small className='text-dark'>password Matched</small>)}
<br></br>
<div className=''>
    <button  type='submit' className='btn btn-success m-4 mx-auto' onClick={handler}>Submit</button>
</div>
</div>

  )
}

export default Reset
 

