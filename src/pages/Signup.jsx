import React from 'react';
import { useState} from 'react';
import {Link, useNavigate } from "react-router-dom";
import {register, validate} from '../scripts/register';

export default function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [gender, setGender] = useState('');
    const navigate = useNavigate();

    const returnUserObject = (name, phone, email, password, confirmpassword,gender) =>{
        const validPassword = validate(password, confirmpassword);
        const user = {
            Name:name,
            PhoneNo:phone,
            Email:email,
            Password:validPassword,
            Gender:gender
        };
        return user;
    };
    const userObject = returnUserObject(name, phone, email, password, confirmPassword, gender);

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', padding: '1rem' }}>
      <div
        className="card shadow p-4"
        id="register-form"
        style={{
          minWidth: '320px',
          maxWidth: '500px',
          width: '100%',
          maxHeight: '80vh',
          overflowY: 'auto',
        }}
      >
        <h2 className="mb-4 text-center">Register</h2>
        <form onSubmit={() => register(userObject)}>
          {/* Name1 */}
          <div className="mb-3">
            <label htmlFor="name1" className="form-label">Name</label>
            <input
              type="text"
              id="name1"
              name="name1"
              className="form-control"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </div>

          {/* Phone */}
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="form-control"
              value={phone}
              onChange={e =>setPhone(e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="form-control"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          {/* Gender Dropdown */}
          <div className="mb-3">
            <label htmlFor="gender" className="form-label">Gender</label>
            <select
              id="gender"
              name="gender"
              className="form-select"
              value={gender}
              onChange={e => setGender(e.target.value)}
              required
            >
              <option value="" disabled>Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>


          <button type="submit" className="btn btn-success w-100" >Register</button>
          <p className="mt-3 text-center text-primary" onClick={() => navigate('/login')}>
            Already have an account? {' '}Login
          </p>
        </form>
      </div>
    </div>
  );
}