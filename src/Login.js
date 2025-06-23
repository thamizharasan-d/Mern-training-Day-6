import './Login.css';
import Header from './Header';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Login() {
    const [username, setUser] = useState("");
    const navigate = useNavigate();
    const handleChange = (e) => {
    setUser(e.target.value);
    }; 
    const handleSubmit = () => {
        if (username === 'admin') {
            navigate('/abc');
        } else {
            alert('Invalid username');
        }
    };
    return (
    <div>
        <Header/>
        <div  className="Login">
            <input type='text' placeholder='   Username' id='inputL' onChange={handleChange}></input>
            <button type='submit' id='inputB' onClick={handleSubmit}>Submit</button>
        </div>
    </div>  
  );
}

export default Login;
