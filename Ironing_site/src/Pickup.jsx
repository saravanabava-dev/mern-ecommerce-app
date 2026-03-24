import axios from 'axios';
import React, { useEffect, useState,useRef} from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Pickup() {
  const dropdownref=useRef();
  useEffect(()=>{
    function haandleClick(e){
  if(dropdownref.current && !dropdownref.current.contains(e.target)){
  setopen(false);
  }
    }
  document.addEventListener("mousedown",haandleClick);
  return ()=>{
   document.removeEventListener("mousedown",haandleClick)
  }
    
  },[])
 
    const navigate=useNavigate();
const location=useLocation();

const data=location.state?.address;
const dates=location.state?.dates;

const geos = location.state?.geo;

const geo_loca = geos ? geos.split(',') : [];

const dis2 = geo_loca[6] || "";
const pin2 = geo_loca[8] || "";

/* const geos=location.state?.geo;
const geo_loca=geos?.split(',')

const dis2=geo_loca[6];
const pin2=geo_loca[8]; */

useEffect(()=>{
  if(dates){
    setdate1(dates.pickup_date)
    setdate2(dates.delivery_date)
    settime1(dates.pickup_time)
    settime2(dates.deliver_time)
    }
},[dates])
    const datas=data?.Address?.split(',') ||[];
    const district=datas[2];
const pincode=datas[4];

    const [open, setopen] = useState(false);
    
      const toggleDropdown = () => setopen(!open);
    const user=JSON.parse(localStorage.getItem("user"))




    const [date1,setdate1]=useState("");
        const [date2,setdate2]=useState("");
             const [time1,settime1]=useState("");
     const [time2,settime2]=useState("");
         const [notes,setnotes]=useState("");

         const pickup_date=`${date1}`
         const pickup_time=`${time1}`
         const delivery_date=`${date2}`
         const deliver_time=`${time2}`
 

    const handler= async ()=>{


      if(!pickup_date ){
        return toast.error("Pickup Date Should not be Empty")
      }
      if(!pickup_time ){
        return toast.error("Pickup Time Should not be Empty")
      }
      if(!deliver_time ){
        return toast.error("Deliver Time Should not be Empty")
      }
      if(!delivery_date){
        return toast.error("Deliver Date Should not be Empty")
      }
      
      
        const pickup_details=new Date(`${pickup_date}T${pickup_time}`)
         const delivery_details=new Date(`${delivery_date}T${deliver_time}`)

if(pickup_details>delivery_details){
  return toast.error("Delivery Details must be after pickup ")
}
     const res= await axios.post(`http://localhost:5174/api/pickup`,{UserId:user._id,pickup_date,pickup_time,delivery_date,deliver_time,notes})
        toast.success(res.data.msg);

    }
  return (
    <div>
      <ToastContainer position='top-right' autoClose={3000} />
<nav className='navbar  p-2 ' style={{backgroundColor:"#ffff8a"}}  >
    <a className='navbar-brand fw-bold ps-3' href='/'>
Wrinkle Away
    </a>
    <div className='ms-auto'>
<a className='me-4 nav-link d-inline ' href='/'>Home</a>
<a className='me-4 nav-link d-inline' href='/ser'>Services </a>
<a className='me-4 nav-link d-inline' href='/about'>About</a>

{user?(

<div ref={dropdownref} style={{ position: "relative", display: "inline-block" }}>

      <img
        src="sss.jpg"
        alt="Profile"
        height={35}
        width={35}
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



<div className='container booking mt-5 mb-5'>

    <div className="row d-flex ms-5 mt-5 me-4 servic ">
        
      <div className="col-md-6" >
        <div className='ms-5'>
          <h4 className="fw-bold  me-1" >  <i class="bi bi-truck"></i> REGULAR SERVICE</h4>
          <p>- Standard charges as per price list</p>
          <p>- Delivery within 3 business days</p>
     
       </div>
      </div>

      <div className="col-md-6">
      <div className='ms-5'>
          <h4 className="fw-bold"><i class="bi bi-truck"></i> EXPRESS SERVICE</h4>
          <p >- 1.5X rate charges</p>
          <p >- Same day or next day delivery</p>
       </div>
      </div>
     
   
</div>
<div className='d-flex flex-column gap-4 align-items-center mt-5'>

    <h3 className='mt-3'>Pickup Date and Time</h3>
    <div className='d-flex gap-5 justify-content-between mt-2'>
        <input type='date' value={date1} placeholder='Select Date' className='form-control input-dt' onChange={(e)=>setdate1(e.target.value)} style={{width:"200px"}} ></input>
        <input type='time' value={time1}placeholder='Select Time' className='form-control input-dt' onChange={(e)=>settime1(e.target.value)} style={{width:"200px"}}></input>
    </div>


<h3 className='mt-3'>Delivery date and Time</h3>
<div className='d-flex gap-5 justify-content-between mt-2'>
        <input type='date' placeholder='Select Date' value={date2} onChange={(e)=>setdate2(e.target.value)} className='form-control input-dt'style={{width:"200px"}} ></input>
        <input type='time'placeholder='Select Time'value={time2} onChange={(e)=>settime2(e.target.value)} className='form-control input-dt 'style={{width:"200px"}}></input>
    
</div>
<div className='mt-3'>
    <h3 className='fw-semibold text-center me-2'>Notes</h3>
   <textarea  className="input-notes mt-2" value={notes} onChange={(e)=>setnotes(e.target.value)}></textarea>
</div>
<div>


  {district ? (
  <h1 className='btn btn-light rounded-4 border border-2 text-primary'
  onClick={()=>navigate('/address_details',{
  state:{
    date_details:{
      pickup_date,pickup_time,deliver_time,delivery_date
    }
  }
})}
     
      style={{width:"400px",backgroundColor:"#caca6a"}}>
    {`Delivery at ${district}-${pincode}`}
  </h1>

) : dis2 ? (
  <h1 className='btn btn-light rounded-4 border border-2 text-primary'
      onClick={()=>navigate('/address_details')}
      style={{width:"400px",backgroundColor:"#caca6a"}}>
    {`Delivery at ${dis2}-${pin2}`}
  </h1>

) :  (
  <button className='btn btn-light rounded-4 text-input'
      style={{width:"400px"}}
      onClick={()=>navigate('/address_details',{
        state:{
          date_details:{
            pickup_date,pickup_time,deliver_time,delivery_date
          }
        }
      })}>
    Add Address
  </button>
)}
 {/*  {district ?(
    <h1 className='btn btn-light rounded-4 border border-2  text-primary' onClick={()=>navigate('/address_details')}style={{width:"400px",backgroundColor:"#caca6a"}}>{`Delivery at ${district}-${pincode}`}</h1>
  ):(
    <button  className='btn btn-light rounded-4 text-input' style={{width:"400px"}} onClick={()=>navigate('/address_details',{
      state:
      {date_details:
        {
pickup_date,pickup_time,deliver_time,delivery_date
      }}
    })}>Add Address</button>
  )} */}
</div>
<div>
    <button className='btn btn-warning rounded-pill but' onClick={()=>{handler;navigate('/delivery')}}>Proceed</button>
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
</div>

    

  )
}

export default Pickup