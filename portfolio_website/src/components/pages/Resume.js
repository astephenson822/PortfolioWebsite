import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css';

export default function Resume() {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // try {
    //   const response = await fetch('http://localhost:5000/verify-password', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ password }),
    //   });

    //   if (response.ok) {
    //     // ✅ Password matched — go to protected page
    //     navigate('/success'); // Replace with your protected route
    //   } else {
    //     const result = await response.json();
    //     alert(result.message || 'Incorrect password');
    //   }
    // } catch (error) {
    //   console.error('Error verifying password:', error);
    //   alert('Server error');
    // }
  };

  // return (
  //   <div className="resume">
  //     <div className="form-box">
  //       <h1>Enter Access Code</h1>
  //       <form onSubmit={handleSubmit}>
  //         <input
  //           type="password"
  //           placeholder="Enter password..."
  //           value={password}
  //           onChange={(e) => setPassword(e.target.value)}
  //         />
  //         <button type="submit">Submit</button>
  //       </form>
  //     </div>
  //   </div>
  // );

}
