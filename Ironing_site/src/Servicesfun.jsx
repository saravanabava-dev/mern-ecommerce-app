
import React,{useState,useEffect}from 'react'
import {useNavigate} from 'react-router-dom'
import { useRef } from 'react';
import {ToastContainer, toast } from 'react-toastify';


function Servicesfun() {
const dropdownRef=useRef();
 
    const locater=()=>{
      navigat('/location')
    }

useEffect(()=>{
  function  handleClick(e){
    if(dropdownRef.current && !dropdownRef.current.contains(e.target)){
      setOpen(false)
    }
  }
  document.addEventListener("mousedown",handleClick)
  return ()=>
    { 
      document.removeEventListener("mousedown",handleClick)
    }
}
,[]
)

  const user=JSON.parse(localStorage.getItem("user"))
    
    
      const [open, setOpen] = useState(false);
    
      const toggleDropdown = () => setOpen(!open);

  const proceed=()=>{
    const user=localStorage.getItem("user");

    if(!user){
toast.error("Login Required");
navigat('/login',{state:{from:"/price"}})
    }
    else{
      const data=JSON.parse(user)
      console.log(data.username)
      navigat('/price')
    }
  }
  const navigat=useNavigate();
  return (
    <>
<ToastContainer position="top-right" autoClose={3000}/>

<nav className="navbar navbar-expand-lg navbar-light   px-4" style={{backgroundColor:"#FFFF8A"}}>
      <a className="navbar-brand fw-bold" href="/">Wrinkle Away</a>



      <div className="ms-auto">
        <a className=" nav-link me-4 d-inline" href="/">Home</a>
        <a className="nav-link me-4 d-inline " href="/">Services</a>
        <a className=" nav-link me-4 d-inline" href="/about">About</a>
 {user?(

<div ref={dropdownRef} style={{ position: "relative", display: "inline-block" }}>

      <img
        src="sss.jpg"
        alt="Profile"
        height={35}
        width={45}
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
          <p style={{ margin: "2px ", fontWeight: "bold" ,fontSize:"20px"}}>{user.Username}</p>
          <p style={{ margin: "2px ", fontSize: "15px" }}>{user.email}</p>
          <button 
            style={{
            
              marginTop: "5px",
              width: "35%",
              padding: "1px",
              borderRadius: "5px",
        border:"none",
              backgroundColor: "#6e6e63",
              color: "#fff",
              cursor: "pointer",

            }} 
            className="but  "
            onClick={() => {
              localStorage.removeItem("user");
              navigat("/login");
            }}
          >
            Logout
          </button>
        </div>
      )}
    </div>
      
  

          )
:(
     <button className="btn btn-primary rounded-pill but" onClick={()=>navigat('/login')} >Login</button>
        )
        }  
      </div>
       
    </nav> 
<div className='container mt-5'>
    
<img  className='rounded img-fluid sss ' src='/unnamed.jpg'  style={{width:"1150px",height:"400px"}}alt='' />

    </div>

    <div className='container mt-4 '>
  <div className='row g-4'>
<div className=' col-md-4 col-12'>
<div className='card h-100 sss '>
  <img   src='/Stream.jpg' className='card-img-top ss'/>
    <div className='card-body ' >
    <h5 className='text-center fw-bold'>Stream Ironing</h5>

  </div>
</div>

</div>
<div className='col-md-4  col-12 g-4'>
<div className='card h-100 sss'>
  <img className='card-img-top ss ' src='/wa.jpg' alt='stream'/>
  <div className='card-body'>
    <h5 className='text-center fw-bold'>Clean Washing</h5>
  </div>
</div>

</div>
<div className='col-md-4 col-12 g-4'>
<div className='card h-100 sss'>
  <img className='card-img-top  ss  ' src='/fol.jpg'/> 
    <div className='card-body'>
    <h5 className='text-center fw-bold '>Wash and Fold</h5>

  </div>
</div>
</div>



 
<div className=' col-md-4 col-12 g-4'>
<div className='card h-100 sss '>
  <img   src='/leather.jpg' className='card-img-top ss '/>
    <div className='card-body'>
    <h5 className='text-center fw-bold '>Leather Cleaning</h5>

  </div>
</div>
</div>
<div className='col-md-4 col-12 g-4'>
<div className='card h-100 sss'>
  <img className='card-img-top ss ' src='/wet.jpg' alt='stream'/>
  <div className='card-body'>
    <h5 className='text-center fw-bold '>Carpet Cleaning</h5>
  </div>
</div>
</div>
<div className='col-md-4 col-12 g-4'>
<div className='card h-100 sss'>
  <img className='card-img-top  ss ' src='/washs.jpg'/> 
    <div className='card-body'>
    <h5 className='text-center fw-bold '>Dry Cleaning</h5>
  </div>
</div>
</div>
<div className='container  mt-5  '>
  <div className='row '>
  <div className=' col-md-6 col-12 '>
    <div className=' ms-5' style={{marginTop:"110px"}} >   
<h1 className='ms-5 fw-bold'>The perfect care for</h1>
<h1 className='ms-5 fw-bold'>your clothes......</h1>
</div>
<div className='mt-4 d-flex  gap-4'  style={{marginLeft:"100px"}}>
  <p className=' btn btn-dark but' onClick={proceed}>Explore Pricising</p>
  <p className='btn btn-dark but ' onClick={locater}>Location</p>
  

</div>
  </div>
<div className='col-md-6 col-12'>
<img   src='/loo.png' className='img-fluid rounded-5' />
</div>
</div>
</div>
</div>
</div>
<div className=' mt-5 container-fluid'>
  <h1 className='text-center fw-bold'>Our Customer Reviews</h1>
  <div className='row g-3 mt-3 '>
    <div className='col-md-4 col-12'>   
<div className='card p-3 sss'>
   <p>"Pickup and delivery on time. Great experience!"</p>
    <strong>-gautham</strong>
</div>
</div>
<div className='col-md-4 col-12'>   
<div className='card p-3 sss'>
   <p>"Amazing service, My clothes are perfectly pressed"</p>
    <strong>-saravana</strong>
</div>
</div>
<div className='col-md-4 col-12'>   
<div className='card p-3 sss'>
   <p>"Pickup and delivery on time. Great experience!"</p>
    <strong>-saravana</strong>
</div>
</div>
<div className='col-md-4 col-12'>   
<div className='card p-3 sss'>
   <p>"Pickup and delivery on time. Great experience!"</p>
    <strong>-Priya</strong>
</div>
</div>
<div className='col-md-4 col-12'>   
<div className='card p-3 sss'>
   <p>"Pickup and delivery on time. Great experience!"</p>
    <strong>-Jaswanth</strong>
</div>
</div>
<div className='col-md-4 col-12'>   
<div className='card p-3 sss'>
   <p>"Pickup and delivery on time. Great experience!"</p>
    <strong>-Janartha</strong>
</div>
</div>
  </div>
</div>
   <footer className=" text-black py-4 mt-5  gap-5 " style={{backgroundColor:"#FFFF8A"}}>
    <div className='d-flex'>
      <div className=" ms-5 d-flex flex-column ">
        <h2 className='fw-bold'>Stay Connected and </h2>
        <h2 className='fw-bold'>  Stay Updated</h2>
<h4 className='mt-3' > <i class="bi bi-bluesky"></i>Wrinkler Away</h4>
<div className='d-flex ms-1 gap-2'>
<i class="bi bi-instagram"></i>
<i class="bi bi-facebook"></i>
<i class="bi bi-twitter-x"></i>
<i class="bi bi-whatsapp"></i>
</div>
      <p className='mt-2'>Seamless transactions, personalized insights</p>
        <p>© 2025 All rights reserved</p>
      </div>

          <div className=' d-flex flex-column gap-2 mt-3 mx-auto'>
            <div>
        <h4 className='ms-5 fw-bold'>Get our news and updates</h4>
   <div className='d-flex gap-3'>
        <input className='form-control rounded-pill mt-1 ' placeholder="Enter Your Email"type='email' style={{backgroundColor:"#ffff8a",borderColor:"black",width:"400px",marginLeft:"40px ",height:"40px"}}></input>
<button className='form-control rounded-pill mt-1 '  style={{backgroundColor:"#ffff8a",borderColor:"black",marginLeft:"10px ",height:"40px",width:"80px"}}>Submit</button>
 </div>
 <div className='d-flex mt-5 gap-5 '>
     <div className='d-flex flex-column gap-1 ms-5'>
        <h5 className='fw-semibold '>Help</h5>
        <p>contact</p>
        <p>FAQs</p>
      </div>
      <div className='d-flex flex-column gap-1 ms-4'>
<h5 className='fw-semibold '>Services</h5>
<p >Home</p>
<p>services</p>
      </div>
      <div className='d-flex flex-column  ms-3'>
<h5 className='fw-semibold '>Company</h5>
<p className=''>About us</p>
<p className=''>contact us</p>
</div>
<div className='d-flex flex-column ms-3'>
<h5 className='fw-semibold'>Address</h5>
<p className='m-0'>17,Anna Nagar</p>
<p>coimbatore</p>
</div>
  </div>
</div>
      </div>
    </div>
    </footer>
    </>
  )
}
export default Servicesfun 





