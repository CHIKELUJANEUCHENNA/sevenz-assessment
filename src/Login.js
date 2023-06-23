import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast'
// import client from './apolloClient'; 

const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) 
  }
`;

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, { loading, error }] = useMutation(LOGIN_MUTATION);

  const handleLogin = async (e) => {
  e.preventDefault();
  if (!email || !password) {
    toast.error('Please enter your email and password.');
    return;
  }

  try {
    const { data } = await login({ variables: { email, password } });
    console.log(data, "data")
    const token = data.login;
    console.log(token, "token")
    localStorage.setItem('token', token);
    navigate('/');
    toast.success('Login successful');
  } catch (error) {
    toast.error('Login failed. Please check your credentials and try again.');
    console.error('Login failed:', error);
  }
};

  return (
    <div className='mx-auto p-2 '>
      <h2 className='text-info-emphasis'>Login</h2>
      {error && <p>Error: {error.message}</p>}
      <form onSubmit={handleLogin}>
        <div>
          <label className='text-info-emphasis' htmlFor="email">Email:</label>
          <input className='m-3'
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className='text-info-emphasis' htmlFor="password">Password:</label>
          <input className='m-3'
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
}

export default Login;
