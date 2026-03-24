import axios from 'axios';
import React, { useState } from 'react'
import {useNavigate,useLocation, Link} from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Logis() {

  
    const [email,setEmail]=useState("");
    const[password,setpassword]=useState("");
    const[pass,setpass]=useState("");
const navigate=useNavigate();
const location=useLocation();

const redirect=location.state?.from || '/';

    const[right,setrigth]=useState(false)


     
   const updater=  async (e)=>{
try{      
  
  const res=await axios.post('http://localhost:5174/logins',{email,password})

{res.data.message=="Login successfull"?
toast.success("Login successfull")
: toast.error(res.data.message);
}
if(res.data.message=="Login successfull"){

 localStorage.setItem("user",JSON.stringify(res.data.user))  

setTimeout(()=>{
  navigate(redirect)
},3000)

}
}
catch(err){

toast.error("Login failed")
}
}
    
    function reenter(e){

    const value=e.target.value;
        setpass(value);
        if(pass==password){
            setrigth(true)
        }
        else{
            setrigth(false)
        }
    }
  return (
<div >
  <ToastContainer position='top-right' autoClose={3000}/>
    <div className='mt-5 col-md-4 ss mx-auto' >
            <h1 className=' m-4' style={{textAlign:"center"}}>User Login Page</h1>
 
  
  <div className="mb-3">
    <label className='form-label'>Email address</label>
    <input type="email" className="form-control" onChange={(e)=>{setEmail(e.target.value)}}/>
    <div className="form-text">We will never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label className="form-label">Password</label>
    <input type="password" onChange={(e)=>{setpassword(e.target.value)}}className="form-control" />
  </div>

  <div className="mb-3">
    <label  className="form-label">Re-Enter Password</label>
    <input type="password" onChange={reenter}className="form-control" />
  {pass && pass !== password && (
   <small className='text-light'>Password Does not match</small>
)}

{pass && pass === password && (
   <small className='text-light'>Password matched </small>
)}
  
  

  </div>
  <div className='d-flex mt-4'>
  <button  className="btn btn-primary but" onClick={updater} >Login</button>
  <button className='btn btn-warning ms-auto but' onClick={()=>navigate('/forgot')}>Forgot Password</button>

</div>

<hr className='mt-3'></hr>
<div className=' d-flex flex-column gap-2 ms-auto mt-4 '>
  <div className='d-flex align-items-center gap-2'>
  <h6 className=''>Or Login with </h6>
 <h6> <img style={{cursor:"pointer"}} onClick={()=>{window.location.href = "http://localhost:5174/google/login"}}src='google.jpg' className='rounded-circle ' height={30}/></h6>
  </div>
  <div className='d-flex gap-2'>
  <h6>Dont't have Account </h6>
  <h6><Link to='/register'>Create One</Link></h6>
</div>
</div>
</div>
</div>
   
  )
}


export default Logis

