import axios from 'axios';
import React, { useState,useRef } from 'react'
import { useEffect} from 'react';
import { useNavigate,useLocation } from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify';


function AddReveal(){

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
  const location=useLocation();
  const date_details=location.state?.date_details;
  const user=JSON.parse(localStorage.getItem("user"))
  
  const district=(item)=>{

    navigate('/booking',
     { state:{
      address:item,
      dates:date_details
      }
    }
    )
  
  }

  const districts=(Address)=>{

    navigate('/booking',
     { state:{
      geo:Address,
      dates:date_details
      }
    }
    )
  
  }
  const [addres,setAddres]=useState([]);
  useEffect(() => {

    const user = JSON.parse(localStorage.getItem("user"));

axios.get(`http://localhost:5174/api/my_address/${user._id}`)
  .then((res) => setAddres(res.data))
  .catch(err => console.log(err));
  }, []);
  
const[Loading,setloading]=useState(false);


    
    
      const [open, setOpen] = useState(false);
    
      const toggleDropdown = () => setOpen(!open);

  const [tru,settru]=useState(false)
  

    const navigate=useNavigate();
    
    const handd = async (id) => {
      toast.info("Removed Succesfully")
  await axios.delete(`http://localhost:5174/api/address_delete/${id}`);

  const user = JSON.parse(localStorage.getItem("user"));

  const res = await axios.get(
    `http://localhost:5174/api/my_address/${user._id}`
  );
settru(!tru);
  setAddres(res.data);
};
    
    useEffect(()=>{

  },[tru])



  const [Address,setaddres]=useState(null)


  const getLocation = () => {
    setloading(true);
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        console.log(lat, lon);

        getAddress(lat, lon); 
      },
      (error) => {
        console.log(error);
        alert("Location permission denied");
       
      }
    );
  } else {
    alert("Geolocation not supported");
            setLoading(false);

  }
};

useEffect(() => {
  const user = JSON.parse(localStorage.getItem("user"));

  axios.get(`http://localhost:5174/api/my_address/${user._id}`)
    .then((res) => setAddres(res.data))
    .catch(err => console.log(err));
}, []);


const getAddress = async (lat, lon) => {
  try {
    const res = await axios.get(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
    );

    console.log(res.data);

 
    setaddres(res.data.display_name);
    setloading(false);

  } catch (err) {
    console.log(err);
  }
};

const [loading,setLoading]=useState(false);
  return (
    <div>
<ToastContainer position='top-right' autoClose={2000}/>

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
     <button className="btn btn-primary rounded-pill but " onClick={()=>navigate('/login')} >Login</button>
        )
        }  
      </div>
    </nav>
    <div className=' mt-4 container'>
     
        <div className='d-flex flex-column gap-3'>
          <div className='d-flex '>
    <h3 className='fw-bold'>Select Delivery</h3>

    </div>
   <div className='container mt-2'> 
    <h4 className='fw-semibold mt-1'>Use My Current Location</h4>
      <div className='p-2   border border-2  rounded rounded-3 d-flex mx-auto mt-4 ms-2 align-items-center defa' style={{cursor:"pointer"}} > 
<div className='ms-2 md-1 me-2'><input type="radio" onChange={()=>districts(Address)} style={{cursor:"pointer"}}></input></div>

{
Loading?(

  <div className='d-flex align-items-center  gap-2 text-primary '>
  <div className="spinner-border spinner-border-sm  ms-2" style={{color:"blue"}}></div>
  <div >Fetching Location</div>
  </div>
):
Address ?(
   <span>{Address}</span>
       
):(
<div>
  
    <span className='fw-semibold ms-2  'onClick={getLocation}>  Detect My Location</span>    
    </div>
)

}
      </div>
    </div>
    <div className='d-flex container'>
      <div>
            <h4 className='fw-semibold mt-4'>Saved Address</h4>
    </div>
    <div className='ms-auto mt-3'>
      <button className='fw-bold btn btn-primary but' onClick={()=>navigate('/addres')}>Add new</button>
    </div>
    
  </div></div>
</div>
    <div>

<div className='container fw-semibold mt-3 '>
  <div className='ms-3'>
   {Array.isArray(addres) && addres.map((item,index)=>(
<div key={index} 
        className="p-4 mb-3 border border-2 rounded "
        style={{width:"1100px"}}>
      
    <h5><input type='radio' onChange={()=>district(item)} style={{cursor:"pointer"}}></input>  {item.Name}</h5>
<h5>Phone Number : {item.phone}</h5>
<h5>Address : {item.Address}</h5> 
<div className='d-flex  gap-3'>
<button className='but mt-2 rounded-pill'onClick={()=>handd(item._id,index)} style={{padding:"4px",borderRadius:"6px",border:"2px solid black"}}>Remove </button>
</div>
</div>
  ))}
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

export default AddReveal