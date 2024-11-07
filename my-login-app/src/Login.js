import React, { useState } from 'react';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = (e) => {
  e.preventDefault();
  if (email && password.length === 6 && /^\d{6}$/.test(password)) {
    setMessage('You are successfully logged in!');
  } else if (!email || !password) {
    setMessage('Please fill in both fields');
  } else {
    setMessage('Password must be exactly 6 digits');
  }
};

return (
<div style={{ maxWidth: '300px', margin: 'auto' }}>
  <h2>Login</h2>
  <form onSubmit={handleSubmit}>
    <div>
      <label>Email:</label>
      <input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
      />
      </div>
      <div>
        <label>Password:</label>
        <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        />
         </div>
          <button type="submit">Login</button>
          </form>
           {message && <p>{message}</p>}
            </div>
            );
};

export default Login;