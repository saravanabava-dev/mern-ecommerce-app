import React, { useState,useEffect } from 'react'
import {State,City} from 'country-state-city'
import { useLocation,useNavigate } from 'react-router-dom'
import axios from 'axios'
import  { ToastContainer, toast } from 'react-toastify';
import { useRef } from 'react';

function Adress() {

  const dropdownref=useRef();
useEffect(()=>{
  function haandleClick(e){
if(dropdownref.current && !dropdownref.current.contains(e.target)){
setOpen(false);
}
  }
document.addEventListener("mousedown",haandleClick);
return ()=>{
 document.removeEventListener("mousedown",haandleClick)
}
  
},[])
  
  const states=State.getStatesOfCountry("IN")
  const citys=City.getCitiesOfState("IN","TN")

  const user=JSON.parse(localStorage.getItem("user"))

  
    const [open, setOpen] = useState(false);
  
    const toggleDropdown = () => setOpen(!open);
    
  const location=useLocation();
  const navigate=useNavigate();

const [Name,setname]=useState(null);
const [phone,setphone]=useState("");
const [Sstate,setState]=useState(null);
const [HouseNo,sethouse]=useState(null);
const[Street,setStreet]=useState(null);
const [Taluk,setTaluk]=useState(null);
const[district,setDistrict]=useState(null)
const [pincode,setPincode]=useState(null);

const[pintoast,setpintoast]=useState(false);

const Address=`${HouseNo},${Street},${district},${Sstate},${pincode}`


const updater = async () => {
     if(!HouseNo) return toast.error("HouseNo Should be non Empty")

  if(!/^\d*$/.test(HouseNo)){
   return toast.error("House No should be non Numeric Value")
   
  }
  if(!/^[a-zA-Z\s]*$/.test(Street)){
    return toast.error("Street filed must be in String Format");
  }
  if(!/^\d{6}$/.test(pincode)){
    return toast.error("Pincode Requires 6 digits ")
  }
   if (!Street) return toast.error("Street cannot be empty");

      if(!district) return toast.error("District cannot be non empty")
        if(!pincode ) return toast.error("Pincode cannot be Non Empty")
          if(!Sstate) return toast.error("State must be non empty")
  try {
    const user = JSON.parse(localStorage.getItem("user"));

    const res = await axios.post(
      "http://localhost:5174/api/my_address",
      {
        userId: user._id, 
        Name,
        phone,
        Address
      }
    );

    toast.success(res.data.msg);
    setTimeout(()=>{
  navigate('/address_details');
    },3000)
  
  }
    catch (err) {
      if(err.response &&  err.response.data){
      
  toast.error(err.response.data.err )
       }
}

  }


  return (
    <>
    <ToastContainer position="top-right" autoClose={3000} />
   <nav className="navbar navbar-expand-lg  px-4" style={{backgroundColor:"#ffff8a"}} >
      <a className="navbar-brand fw-bold" href="/">Wrinkle Away</a>

      <div className="ms-auto">
        <a className="me-4 nav-link d-inline" href="/">Home</a>
        <a className="nav-link me-4 d-inline " href="/service" >Services</a>
        <a className="me-4 nav-link d-inline" href="/about">About</a>
{user?(

<div ref={dropdownref} style={{ position: "relative", display: "inline-block" }}>

      <img
        src="sss.jpg"
        alt="Profile"
        height={30}
        width={40}
        style={{ borderRadius: "50%", cursor: "pointer" }}
        onClick={toggleDropdown}
      />


      {open && user && (
        <div
          style={{
            position: "absolute",
            top: "50px",
          
            right: "0",
            backgroundColor:"lightgray",
            border: "1px solid #ccc",
            borderRadius: "20px",
            width: "250px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            padding: "10px",
       
          }}
        >
          <p style={{ margin: "2px ", fontWeight: "bold" ,fontSize:"20px"}}>{user.username}</p>
          <p style={{ margin: "2px ", fontSize: "15px" }}>{user.email}</p>
          <button 
            style={{
            
              marginTop: "5px",
              width: "35%",
              padding: "1px",
              borderRadius: "5px",
        border:"none",
              backgroundColor: "#6e6e3e",
              color: "#fff",
              cursor: "pointer",

            }} 
            className="but  "
            onClick={() => {
              localStorage.removeItem("user");
              navigate("/login");
            }}
          >
            Logout
          </button>
        </div>
      )}
    </div>
      
  

          )
:(
     <button className="btn btn-primary rounded-pill but" onClick={()=>navigate('/login')} >Login</button>
        )
        }  
      
     
      </div>
    </nav>
    {/* <div className='d-flex mt-4 container '>
       <div className='d-flex flex-column gap-3'>
    <h3 className='fw-bold'>Select Delivery</h3>
    <h4 className='fw-semibold'>default Addres</h4>
    </div>
    <div className='ms-auto'>
      <button className='fw-bold btn btn-primary'>Add new</button>
    </div> 
    </div> */}
    <div className='container mt-3 mb-5   addres pt-5 ps-4'>
        <div className=' d-flex flex-column gap-2 ms-5 '>
<h2 className='fw-bold  '>Contact Details</h2>


 <label className='form-label'>Name</label>
<input type="text" value={Name} className='form-control' onChange={(e)=>setname(e.target.value)} style={{width:"300px"}}></input> 

<label className='form-label'>Phone Number</label>

<input  type="tel" className='form-control' value={phone}  style={{width:"300px"}} onChange={(e)=>setphone(e.target.value)}></input>

<h3 className='fw-bold mt-3 '> Add Address</h3>
<label className='form-label'>State</label>
<select className='form-select'   value={Sstate}  onChange={(e)=>setState(e.currentTarget.value)}style={{width:"300px"}}>
  <option value="">Select State</option>
  {
    states.map((state)=>(
      <option value={state.isoCode} key={state.isoCode}>{state.name}</option>
    ))
  }
</select>

<label className='form-label'>HouseNo</label>
<input type="text" className='form-control' value={HouseNo}  onChange={(e)=>sethouse(e.target.value)} style={{width:"300px"}}></input>
<label className='form-label'>Street</label>
<input type="text" className='form-control' value={Street} onChange={(e)=>setStreet(e.target.value)} style={{width:"300px"}}></input>

<label className='form-label'>District
</label>
<select className='form-select' value={district} onChange={(e)=>setDistrict(e.target.value)}  style={{width:"300px"}}>
  <option key="">Select District</option>
  {
    citys.map((city)=>(
      <option key={city.isoCode} value={city.isoCode}>{city.name}</option>
    ))
  }
</select>
<label className='form-label'>pincode</label>
<input  className='form-control' value={pincode} onChange={(e)=>{
  const value=e.target.value;

  setPincode(value)} } style={{width:"300px"}}></input>
</div>
<div className='d-flex gap-3 mt-4 ms-5 '>
  <button className='btn btn-success'  onClick={updater}>Save</button>
<button className='btn btn-danger'>Cancel</button>

</div>

    </div>


    </>
  )
}

export default Adress