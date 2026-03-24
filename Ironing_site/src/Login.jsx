


import React, { useState } from 'react'
import axios from 'axios';

 function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlelogin = async () => {
    try {
      const res = await axios.post(
        'http://localhost:5174/logins', 
        { email, password }
      );

      alert(res.data.message);
    } catch (err) {
      alert("Login failed ");
    }
  };
 
  return (
    <div className='m-5'> 
      <h2 className='mb-2'>Login</h2>

      <input
        type="email"
        className="form-control mb-3"
        placeholder="Enter email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        className="form-control mb-3"
        placeholder="Enter password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="btn btn-primary" onClick={handlelogin}>
        Login
      </button>
    </div>
  );
}

export default Login;