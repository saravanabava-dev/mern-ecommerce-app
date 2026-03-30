


 import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useRef } from "react";


function NavbarSection() {
  const dropdownRef=useRef();
  useEffect(() => {
  function handleClickOutside(e) {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setOpen(false);
    }
  }

  document.addEventListener("mousedown", handleClickOutside);
    return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

  const navigat=useNavigate();

  const[user,setUser]=useState(
JSON.parse(localStorage.getItem("user"))
  )
  useEffect(()=>{
const timer= setTimeout(()=>{
 localStorage.removeItem("user")
  setUser(null)
},60000)
 return ()=>clearTimeout(timer)
  },[])



  const [open, setOpen] = useState(false);

  const toggleDropdown = () => setOpen(!open);


  return (
    <nav className="navbar navbar-expand-lg  px-4" style={{backgroundColor:"#ffff8a"}}>
      <a className="navbar-brand fw-bold" href="/">Wrinkle Away</a>

      <div className="ms-auto">
        <a className="me-4 nav-link d-inline" href="/">Home</a>
        <a className="nav-link me-4 d-inline " href="/ser" >Services</a>
        <a className="me-4 nav-link d-inline" href="/abouts">About us</a>
 {user?(
<div ref={dropdownRef} style={{ position: "relative", display: "inline-block" }}>


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
  );
}

export default NavbarSection;


