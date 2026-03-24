import axios from 'axios';
import React from 'react'
import { useState } from 'react';
function Forgot() {

    const [email,setEmail]=useState(null);
const handler=()=>{
    axios.post('http://localhost:5174/api/forgot',{email}).then(alert("Check your email Inbox"))
}
  return (

    <form className=' m-5 col-md-4 mx-auto'>
<h1 className='m-4'>Enter Email to reset</h1>
<label className='form-label'>Email Address</label>
<input className='form-control' onChange={(e)=>setEmail(e.target.value)}></input>

<button className='btn btn-success m-4 mx-auto' onClick={handler}>Submit</button>
    </form>

  )
}

export default Forgot