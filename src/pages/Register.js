import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Auth.css';

const Register = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (!name || !contact) {
      alert('Please enter your name and either email or phone number.');
      return;
    }

    const user = { name, contact };
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('isLoggedIn', 'true'); // ✅ Save login status

    alert('Registration successful!');
    navigate('/');
  };

  return (
    <div className="auth-form">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email or Phone Number"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <span onClick={() => navigate('/login')}>Login</span>
      </p>
    </div>
  );
};

export default Register;
