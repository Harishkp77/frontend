import React, { useState } from 'react';


const Signup = () => {
  
    const [formData, setFormData] = useState({
        name: "",
        username: "",
        password: "",
    });

    const [serverFeedback, setServerFeedback] = useState(""); 

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
        
      };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.text())
        .then((data) => {
          setServerFeedback(data);

          setFormData({
            name: "",
            username: "",
            password: "",
        });
    })

    .catch((error) => console.error("Error submitting form:", error));
};



  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="border p-4 rounded" style={{ maxWidth: '400px' }}>
        <h2 className="mb-4 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Choose a username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Sign Up</button>
          </div>
          <div className="mt-3 text-center">
           
            <p>{serverFeedback}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
