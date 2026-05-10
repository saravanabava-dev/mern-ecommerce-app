import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Mainadd() {
    const navigate=useNavigate();
  return (
<>

<nav className="navbar navbar-expand-lg  px-4" style={{backgroundColor:"#ffff8a"}} >
      <a className="navbar-brand fw-bold" href="/">Wrinkle Away</a>

      <div className="ms-auto">
        <a className="me-4 nav-link d-inline" href="/">Home</a>
        <a className="nav-link me-4 d-inline " href="/service" >Services</a>
        <a className="me-4 nav-link d-inline" href="/about">About</a>

       <button className="btn btn-primary rounded-pill" onClick={()=>navigate('/login')}>Login</button>
      </div>
    </nav>
    <div className='d-flex mt-4 container'>
        <div className='d-flex flex-column gap-3'>
    <h3 className='fw-bold'>Select Delivery</h3>
    <h4 className='fw-semibold'>default Addres</h4>
    </div>
    <div className='ms-auto'>
      <button className='fw-bold btn btn-primary' onClick={()=>navigate('/addres')}>Add new</button>
    </div>
    </div>

    <div>
    
<div>

</div>
        
    </div>

</>
  )
}
