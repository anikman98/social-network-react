import React, { useState, useEffect } from 'react';
import AuthUser from '../AuthUser';
import { useNavigate } from "react-router-dom";


const Login = () => {
  
    const {http, setToken} = AuthUser();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const {getToken} = AuthUser();
    const navigate = useNavigate();


    const submitForm = () => {
        http.post('/login', {email:email, password:password})
                .then((res)=>{
                    console.log(res);
                    setToken(res.data.data.user, res.data.data.token);
                })
    }

    useEffect(() => {
        if(getToken()){
            navigate('/dashboard');
        }
    },[]);
  
    return (
    <div className="row justify-content-center pt-5">
        <div className="col-sm-6">
            <div className="card p-4">
                <h1 className="text-center mb-3">Login </h1>
                <div className="form-group">
                    <label>Email address:</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={e=>setEmail(e.target.value)} id="email" />
                </div>
                <div className="form-group mt-3">
                    <label>Password:</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={e => setPassword(e.target.value)}id="pwd" />
                </div>
                <button type="button" onClick={submitForm} className="btn btn-primary mt-4">Login</button>
            </div>
        </div>
    </div>
  )
}

export default Login
