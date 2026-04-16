

import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminPanel() {
  const [items, setItems] = useState([]);
  const [activeTab, setActiveTab] = useState("Men");
  const [activeMenu, setActiveMenu] = useState("Items");

  const [form, setForm] = useState({
    name: "",
    price: "",
    quantity: 0,
    category: "Men",
  });

  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchItems();
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
    fetchItems();
  };

  const handleEdit = (item) => {
    setForm(item);
    setEditId(item._id);
  };

  const filteredItems = items.filter(
    (item) => item.category === activeTab
  );

  return (
    <div className="d-flex">

    
      <div style={{
        width: "230px",
        height: "100vh",
        background: "#1e1e2f",
        color: "white",
        padding: "20px"
      }}>
        <h3 className="mb-4">Admin Panel</h3>

        {["Dashboard", "Items", "Orders", "Customers", "Orders"].map(menu => (
          <div
            key={menu}
            onClick={() => setActiveMenu(menu)}
            style={{
              padding: "10px",
              marginBottom: "10px",
              cursor: "pointer",
              borderRadius: "8px",
              background: activeMenu === menu ? "#444" : "transparent"
            }}
          >
            {menu}
          </div>
        ))}
      </div>


      <div className="w-100">

   
        <div style={{
          height: "60px",
          background: "#FFFF8A",
          display: "flex",
          justifyContent:"center",
          alignItems: "center",
          paddingLeft: "20px",
          fontWeight: "bold",
          fontSize: "20px"
        }}>
          Admin Control Panel
        </div>

        <div className="p-4">

     
          {activeMenu === "Dashboard" && (
            <h3>Welcome Admin </h3>
          )}

      
          {activeMenu === "Items" && (
            <>
              <h3>Manage Items</h3>

             
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
                    <input name="quantity" type="number" placeholder="Qty"
                      className="form-control"
                      value={form.quantity}
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
{/* 
<div className="d-flex gap-3 mb-3">
{["Men","Women","Kids"].map(tab=>(
  <button
  key={tab} 
  className={`btn ${activeTab===tab?"btn-dark":"btn-outline-dark"}`}
  onClick={()=>setActiveTab(tab)}
  >
{tab}
  </button>

))

}
</div> */}
          
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
                    <th>Qty</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredItems.map(item => (
                    <tr key={item._id}>
                      <td>{item.name}</td>
                      <td>₹{item.price}</td>
                      <td>{item.quantity}</td>
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


          {activeMenu === "Orders" && (
            <h3> Orders Page</h3>
          )}

          {activeMenu === "Customers" && (
            <h3> Customers Page </h3>
          )}

          {activeMenu === "Order" && (
            <h3> Orders Page </h3>
          )}

        </div>
      </div>
    </div>
  );
}

export default AdminPanel;