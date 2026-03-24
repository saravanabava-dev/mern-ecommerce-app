

import axios from 'axios';
import React, { useState } from 'react';
import PasswordValidator from 'password-validator'
import { useNavigate } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';

function Register() {

  
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpass] = useState("");
  const[reset,setreset]=useState("");
  const[state,setState]=useState(false);
  const hand=(e)=>{
    const value=e.target.value;
    setreset(value)
    if(password==value){
      setState(true)
    }
    
  }

  const navigator=useNavigate();

  function namer(e){
    const value=e.target.value
    setname(value)
}
function emai(e){
const value=e.target.value
    setEmail(value)
}
function pass(e){
const value=e.target.value
    setpass(value)

}

function getCount(password){
  let score=0;
  if(password.length>=8) score++;
if(/[A-Z]/.test(password)) score++;
if(/[a-z]/.test(password)) score++;
if(/[0-9]/.test(password)) score++;
if(/[^A-Za-z0-9]/.test(password)) score++;

if(score<=2) return{label:"Weak",width:"33%",color:"bg-danger"}
if(score==3 || score==4) return{label:"Medium",width:"66%",color:"bg-warning"}
return {label:"Strong",width:"100%",color:"bg-success"}
}




function getStrength(password) {
  let score = 0;

  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (score <= 2) return { label: "Weak", width: "33%", color: "bg-danger" };
  if (score === 3 || score === 4)
    return { label: "Medium", width: "66%", color: "bg-warning" };
  return { label: "Strong", width: "100%", color: "bg-success" };
}

  const updater = async () => {


    try {
      await axios.post(
        'http://localhost:5174/api/data',
        {
          username: name,
          email: email,
          password: password
        }
      );

      toast.success("User Details Updated");
    } catch (error) {
      console.error(error.response?.data);
      toast.error( error?.response?.data?.message || "Failed to register user");
    }
  };

  return (
    
    <div  >
     
     <ToastContainer position='top-right' autoClose={3000}/>
      <div className='m-5 mt-5 col-md-4 mx-auto ' >
        <h1 className='fw-bold text-center '>User Registration</h1>

        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input type="text" onChange={namer} className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" onChange={emai} className="form-control" />
        </div>

<div className="mb-3">
  <label className="form-label">Password</label>
  <input
    type="password"
    onChange={pass}
    className="form-control"
  />

{password && (
  <>
  <div className='mt-2  small fw-semibold '>
    Strong:{""}
    <span
     className={getCount(password).label=="Weak"?"text-danger":getCount(password).label=="Medium"?"text-warning":"text-success"}
    
    >{getCount(password).label}</span>
  </div>

  <div className='progress mt-1' style={{height:"6px"}}>
<div  className={`progress-bar ${getCount(password).color}`}  role="progressbar"style={{
  width:getCount(password).width,
  transition:"width .6s ease"
}
  }>

</div>
 </div>
 </>


  
)}
<div className='mt-3'>
  <label className='form-label'>Confirm password</label>
  <input className='form-control' value={reset} onChange={hand}></input>
  {reset && reset!==password && (
<small className='text-danger'>Password Not matched</small>
) 
}
{
  reset && reset===password && (
    <small className='text-success'>Password Matched</small>
  )
}


</div>

  {/* {password && (
    <>
    
      <div className="mt-2 small fw-semibold">
        Strength:{" "}
        <span
          className={
            getStrength(password).label === "Weak"
              ? "text-danger"
              : getStrength(password).label === "Medium"
              ? "text-warning"
              : "text-success"
          }
        >
          {getStrength(password).label}
        </span>
      </div>

  
      <div className="progress mt-1" style={{ height: "6px" }}>
        <div
          className={`progress-bar ${getStrength(password).color}`}
          role="progressbar"
          style={{
            width: getStrength(password).width,
            transition: "width 0.4s ease"
          }}
        ></div>
      </div>
    </>
  )} */}
</div> 

<div className='d-flex justify-content-between'>
       <button onClick={updater} type="submit" className="btn btn-primary but  hover:scale-90 transition duration-900 " >
          Register
        </button>
<button  className='btn btn-primary ms-auto but' onClick={()=>navigator('/login')}>Back to Login</button>
</div>
      </div>
    </div>
  );
}

export default Register;
