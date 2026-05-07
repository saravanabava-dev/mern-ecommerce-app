

import React, { useEffect, useState,useRef } from "react";
import axios from "axios";
import {ToastContainer,toast} from "react-toastify"
import { useNavigate } from "react-router-dom";
import { Line,LineChart,XAxis,YAxis,ResponsiveContainer,CartesianGrid,Tooltip } from "recharts";
import {Bar,BarChart} from "recharts"


function AdminPanel() {


  const data = [
  { name: "Jan", revenue: 3000 },
  { name: "Feb", revenue: 4000 },
  { name: "Mar", revenue: 2000 },
  { name: "Apr", revenue: 4200 },
  { name: "May", revenue: 1000 },
  { name: "Jun", revenue: 2800 },
];

const datas=[

    { name: "Jan", value: 46 },
  { name: "Feb", value: 28 },
  { name: "Mar", value: 85 },
  { name: "Apr", value: 72 },
  { name: "May", value: 89 },
]

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
  },600000)
   return ()=>clearTimeout(timer)
    },[])
  
  
  
    const [open, setOpen] = useState(false);
  
    const toggleDropdown = () => setOpen(!open);
  
  
  const [items, setItems] = useState([]);
  const [activeTab, setActiveTab] = useState("Men");
  const [activeMenu, setActiveMenu] = useState("Items");
  
const [admin,setAdmin]=useState({
  name:"",
  email:"",
})

  const [form, setForm] = useState({
    name: "",
    price: "",
    quantity: 0,
    category: "Men",
  });

  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchItems();
    Order_details();
    Images();
Admin_role();
  }, []);

  const fetchItems = async () => {
    const res = await axios.get("http://localhost:5174/men_items");
    setItems(res.data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editId) {
      await axios.put(`http://localhost:5174/men_items/update/${editId}`, form);
  
      setEditId(null);
    } else {
      if(!form.name){
       return  toast.error("Enter the Item Name")
      }
      if(!form.price){
         return  toast.error("Enter the Price details")
      }
      const {_id,...data}=form
      await axios.post("http://localhost:5174/men_items/add", {
        ...data,
        price: Number(form.price),
        quantity: Number(form.quantity),
      });
   
    }

    setForm({ name: "", price: "", quantity: 0, category: "Men" });
    fetchItems();
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5174/men_items/${id}`);
    toast.success("Item deleted")
    fetchItems();
  };

  const handleEdit = (item) => {
    setForm(item);
    setEditId(item._id);
  };

  const filteredItems = items.filter(
    (item) => item.category === activeTab
  );


  const [Image_Items,setImage]=useState([])

  const Images=async()=>{
   const res= await axios.get("http://localhost:5174/images");
    setImage(res.data)
  }

const Image_deleter=async(id)=>{
  await axios.delete(`http://localhost:5174/images/delete/${id}`)
  Images();
}



const [showModal, setShowModal] = useState(false);
const [file, setFile] = useState(null);
const [imageName, setImageName] = useState("");

const handleUpload = async () => {
  if(!file && !editImageID){
return toast.error("Select the file");
  }
  else if(!imageName){
   return toast.error("Enter the new Service name ")
  }


  const formData = new FormData();
  formData.append("name", imageName);
  formData.append("image", file);

    try {
      let res
      if(editImageID){
        res= await axios.put(`http://localhost:5174/upload_file/edit/${editImageID}`,formData)
      }
      else{
     res = await axios.post(
      "http://localhost:5174/upload_file",
      formData
    );
  }
    toast.success(res.data.message); 

    setShowModal(false);
    setFile(null);
    setImageName("");
    setEditImageID(null);
    Images();

  } catch (err) {
  
    const message =
      err.response?.data?.message ||   
      err.response?.data?.error ||     
      "Upload failed";

    toast.error(message);
  }
  
};

const [editImageID,setEditImageID]=useState(null);
const handleImageEdit=(image)=>{
setShowModal(true);
setImageName(image.name);
seteditImageID(image._id);
}


const [Orders,setOrders]=useState([]);

const Order_details= async()=>{
  const res= await axios.get("http://localhost:5174/admin/orders");
  setOrders(res.data);
}






const Admin_role=async ()=>{

const res=await axios.get(`http://localhost:5174/admin/profile/${user._id}`);
setAdmin({
  name:res.data.username,
  email:res.data.email
}
)
}

const handleChange_admin=(e)=>{
setAdmin({...admin,[e.target.name]:e.target.value});
}

const [admin_edit,setAdmin_edit]=useState(false);

const update_admin=async ()=>{
 try{
 const res= await axios.put(`http://localhost:5174/admin/edit/${user._id}`,admin)
 return  toast.success(res.data);
 } 
 catch(err){
 return  toast.error(err.message)
 }
}
  return (
    <>
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
    <div className="d-flex">
      <ToastContainer position="top-right" autoClose={3000} className="Toastify__toast-container"/>

    
      <div    style={{
      
      width: "230px",
    height: "100vh",

    background: "#1e1e2f",
    color: "white",
    padding: "20px" }}
      
  >
    
        <h3 className="mb-4">Admin Panel</h3>

        {["Dashboard", "Orders",,"Items","Media Library","Profile"].map(menu => (
          <div
            key={menu}
            onClick={() => setActiveMenu(menu)}
            style={{
              padding: "10px",
              marginBottom: "10px",
              cursor: "pointer",
              borderRadius: "8px",
              background: activeMenu === menu ? "#444" : "transparent",
      
            }}
          >
            {menu}
          </div>
        ))}
      </div>


      <div className="w-100">

   
      

        <div className="p-4">

 
          {activeMenu === "Dashboard" && (



        <div className="p-3">
          <h3>Overview</h3>
          <div className="row g-3">

  <div className="col-md-6">
    <div className="Dashboard shadow p-3">

      <div className="d-flex align-items-center gap-3">

        <i className="bi bi-people-fill p-2 bg-info rounded"></i>
        <div>
          <h6>Total Customers</h6>
          <h5>1200</h5>
        </div>
        
          <div className=" flex-column mt-1 ms-auto">
<h6 className="rounded rounded-pill d-flex  ms-5"style={{
              padding:"4px",backgroundColor:"lightblue",display:"inline-block",width:"60px",alignItems:"center"
            }}>34% <i class="bi bi-arrow-up " style={{color:"black"}}></i></h6>
<h6 className="me-2">Increased 64 customers</h6>

          
          </div>
      </div>
    </div>
  </div>

  <div className="col-md-6">
    <div className="Dashboard shadow p-3">
      <div className="d-flex align-items-center gap-3">
        <i className="bi bi-handbag p-2 bg-info rounded"></i>
        <div>
          <h6>Total Orders</h6>
          <h5>690</h5>
          
      
        </div>
            <div className=" flex-column mt-1 ms-auto">
<h6 className="rounded rounded-pill d-flex  ms-5"style={{
              padding:"4px",backgroundColor:"lightblue",display:"inline-block",width:"60px",alignItems:"center"
            }}>24% <i class="bi bi-arrow-up " style={{color:"black"}}></i></h6>
<h6 className="me-2">Increased 37 orders</h6>

          
          </div>
      </div>
    </div>
  </div>

  <div className="col-md-6">
    <div className="Dashboard shadow p-3">
      <div className="d-flex align-items-center gap-3">
        <i className="bi bi-truck p-2 bg-info rounded"></i>
        <div>
          <h6>Total Deliveries</h6>
          <h5>447</h5>
        </div>
            <div className=" flex-column mt-1 ms-auto">
<h6 className="rounded rounded-pill d-flex  ms-5"style={{
              padding:"4px",backgroundColor:"lightblue",display:"inline-block",width:"60px",alignItems:"center"
            }}>14% <i class="bi bi-arrow-up " style={{color:"black"}}></i></h6>
<h6 className="me-2">Increased  27 Deliverys</h6>

          
          </div>
      </div>
    </div>
  </div>

  <div className="col-md-6">
    <div className="Dashboard shadow p-3">
      <div className="d-flex align-items-center gap-3">
        <i className="bi bi-currency-rupee p-2 bg-info rounded"></i>
        <div>
          <h6>Total Revenue</h6>
          <h5>120030</h5>
        </div>
            <div className=" flex-column mt-1 ms-auto">
<h6 className="rounded rounded-pill d-flex  ms-5"style={{
              padding:"4px",backgroundColor:"lightblue",display:"inline-block",width:"60px",alignItems:"center"
            }}>27% <i class="bi bi-arrow-up " style={{color:"black"}}></i></h6>
<h6 className="me-2">added 670 rupee</h6>

          
          </div>
      </div>
    </div>
  </div>

</div>
          <div className="d-flex gap-4 mt-4">

  
  <div className="card shadow rounded-4 p-3" style={{ width: "50%" }}>
    <h5>Total Revenue</h5>

    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="revenue" stroke="#3b82f6" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>

 
  <div className="card shadow rounded-4 p-3" style={{ width: "50%" }}>
    <h5>value</h5>

    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <BarChart data={datas} layout="vertical">
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>

</div> 
        </div>
          )}

      
          {activeMenu === "Items" && (
            <>
          { editId ?(
                 <h3 >Update Item</h3>
          )
           :(
              <h3>Add Item</h3>
        )
          }
              <form onSubmit={handleSubmit} className="card p-3 mb-4">
                <div className="row">
                  <div className="col">
                    <input name="name" placeholder="Item"
                      className="form-control"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col">
                    <input name="price" type="number" placeholder="Price"
                      className="form-control"
                      value={form.price}
                      onChange={handleChange}
                    />
                  </div>

              
                               <div className="col">
                    <select name="category"
                      className="form-control"
                      value={form.category}
                      onChange={handleChange}
                    >
                      <option>Men</option>
                      <option>Women</option>
                      <option>Kids</option>
                    </select>
                  </div>

                  <div className="col">
                    <button className="btn btn-success w-100">
                      {editId ? "Update" : "Add"}
                    </button>
                  </div>
                </div>
              </form>

          
              <div className="d-flex gap-3 mb-3">
                {["Men", "Women", "Kids"].map(tab => (
                  <button
                    key={tab}
                    className={`btn ${activeTab === tab ? "btn-dark" : "btn-outline-dark"}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <table className="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Price</th>
                  
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredItems.map(item => (
                    <tr key={item._id}>
                      <td>{item.name}</td>
                      <td>₹{item.price}</td>
                    
                      <td>
                        <button
                          className="btn btn-warning btn-sm me-2"
                          onClick={() => handleEdit(item)}
                        >
                          Edit
                        </button>

                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDelete(item._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}

  {admin_edit && (
  <div className="overlay">
    <div className="popup-box">

      <h4 className="text-center">Edit Admin Profile</h4>
<label className="form-label mt-2">Name</label>
      <input
        className="form-control mb-2 mt-1"
        name="name"
        value={admin.name}
        onChange={handleChange_admin}
      />
<label className="form-label mt-1">email</label>
      <input
        className="form-control mb-2 mt-1"
        name="email"
        value={admin.email}
        onChange={handleChange_admin}
      />

      <button 
        className="btn btn-success me-2 mt-1"
        onClick={() => {
          update_admin();
          setAdmin_edit(false);
        }}
      >
        Save

        
      </button>

      <button 
        className="btn btn-danger mt-1"
        onClick={() => setAdmin_edit(false)}
      >
        Cancel
      </button>

    </div>
  </div>
)}


          {activeMenu === "Profile" && (

          
    
            <div className="container-fluid bg-container" >
         
      
           <div className="d-flex justify-content-center mt-5" style={{minHeight:"100vh"}}>

  <div className="admin card shadow p-2">
   
    <h4 className="text-center mt-3" style={{textAlign:"center"}}>Manage Admin </h4>
   
   
    <label className="form-label mt-2 ">Name</label>
    <input className="form-control mt-1" name="name" value={admin.name} onChange={handleChange_admin} ></input>


    <label className="form-label mt-1 "
    >Email</label>
    <input className="form-control mt-1" 
    
    name="email" value={admin.email} onChange={handleChange_admin}
    ></input>


    <div className="d-flex gap-4 mt-4">

    <button className="btn btn-dark"  onClick={()=>setAdmin_edit(true)}>Edit</button>
    <button className="btn btn-warning" onClick={()=>navigat('/forgot')}>Change password</button>
    </div>
    </div>
  


           </div>

</div>

      )}

          {activeMenu === "Orders" && (
       
<div className="container-fluid p-3">
  <h3>Order Details</h3>

  <div className="table-responsive">
    <table className="table mt-3 text-center align-middle">
      <thead>
        <tr className="fw-semibold text-center">
          <th>User</th>
          <th>Men</th>
          <th>Women</th>
          <th>Total Amt</th>
          <th>Pickup</th>
          <th>Delivery</th>
          <th>Address</th>
        </tr>
      </thead>

      <tbody>
        {Orders.map((order) => (
          <tr key={order._id}>
            <td>{order.User_id?.username}</td> 
            <td>{order.Men}</td>
            <td>{order.Women}</td>
            <td>₹{order.TotalAmount}</td>
            <td>{order.Pickup_Details}</td>
            <td>{order.Delivery_Details}</td>
            <td>{order.Address}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

        
          )}


{activeMenu === "Media Library" && (
  
  <div className="container">
    <h3 className="mb-4">Manage Service </h3>
    <div className="row g-3">
      {Image_Items.map((image) => {
        const location = `http://localhost:5174/${image.Image}`;
return(
       
          <div className="col-md-3" key={image._id}>
            <div className="card rounded shadow service_image" style={{borderRadius:"20px"}}>
              
              <img src={location} className="card-img-top" alt="img"   style={{ height: "250px", objectFit: "cover" }}/>

              <div className="card-body">
                <h5 className="card-title text-center fw-semibold">{image.name}</h5>
                <div className="card-text pt-2 d-flex gap-2"  >
                  <button className="btn btn-sm btn-dark" onClick={()=>handleImageEdit(image)}>Edit</button>
                  <button className="btn btn-sm btn-danger" onClick={()=>Image_deleter(image._id)}>Delete</button>
                  </div>
              </div>
            </div>
          </div>
)
      })}
     
      <div className="col-md-3">
        <div className="card_image  shadow ">
        <h1><i className="bi bi-patch-plus fs-1 icon-animate text-dark" onClick={()=>setShowModal(true)}></i></h1>
        <h5 >Add Image</h5>
</div>
        </div>
    </div>

{/* <div className="container mt-4">
    <h3>Manage Offer </h3>
    </div>
    <div className="container mt-4">
    <h3>Manage Feauture </h3>
    </div>
    <div className="container mt-4">
    <h3>Manage About  </h3>
    </div> */}
  </div>


)}
   {showModal && (
    <div className="overlay">
  <div className="popup-box">

    <h5 className="text-center fw-semibold mb-3">Add New Service</h5>

    <input
      type="text"
      placeholder="Enter the new Service name"
      className="form-control mb-2"
      value={imageName}
      onChange={(e) => setImageName(e.target.value)}
    />

    <input
      type="file"
      className="form-control mb-3"
      onChange={(e) => setFile(e.target.files[0])}
    />

    <button className="btn btn-success me-2" onClick={handleUpload}>
      {editImageID? "Update":"Upload"}
   
    </button>

    <button 
      className="btn btn-danger" 
      onClick={() => setShowModal(false)}
    >
      Cancel
    </button>

  </div>
  </div>

)}
   </div>
   </div>
   
   </div>   
   
</>
  );
}

export default AdminPanel;


