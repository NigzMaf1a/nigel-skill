import React, { useState } from "react";
import { Eye, EyeOff} from "lucide-react";
import {Link, useNavigate } from "react-router-dom";
//import login from "../scripts/login";
import { toast } from "react-toastify";
import mockRegistrations from "../mockData/mockRegistrations.json";

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // look for matching user in mockRegistrations
        const user = mockRegistrations.find((reg) => reg.Email === email);
    
        if (!user) {
          toast.error('User not found');
          return;
        }
    
        if (user.Password !== password) {
          toast.error('Incorrect password');
          return;
        }
    
        toast.success(`Welcome, ${user.Name1}`);
    
        //Store user in localStorage WITHOUT the password
        try {
          const { Password, ...safeUser } = user;
          localStorage.setItem('loggedUser', JSON.stringify(safeUser));
          localStorage.setItem('loggedIn', 'true');
          localStorage.setItem('authToken', 'movie001')
          console.log('[Login] Stored user in localStorage:', safeUser);

        } catch (err) {
          console.error('Failed to store user in localStorage:', err);
          toast.error('Session storage failed');
          return;
        }
        navigate('/gallery');
      };

  return (
    <div
      className="d-flex vh-100 justify-content-center align-items-center"
      style={{ padding: '1rem' }}
    >
      <div
        className="card p-4 shadow"
        style={{ minWidth: '320px', maxWidth: '400px', width: '100%' }}
      >
        <h2 className="mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="blahblah@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Login Button */}
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
          <p className="mt-3 text-center text-primary" onClick={() => navigate('/signup')}>
            Don't have an account?{' '}Register here
          </p>
        </form>
      </div>
    </div>
  );
};
