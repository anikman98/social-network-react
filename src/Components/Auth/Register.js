import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import AuthUser from '../AuthUser';


const Register = () => {

  const navigate = useNavigate();

  const {http, setToken, getToken, } = AuthUser();

  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [check, setCheck] = useState(false);

  const checkPassword = () => {
    var password = document.getElementById('password');
    var confirm_password = document.getElementById('confirm_password');

    if(password.value == confirm_password.value){
      setConfirmPassword(confirm_password.value);
      setCheck(true);
    }else{
      setCheck(false);
    }
  }

  const submitForm = () => {
    if(check == true){
      http.post('/register', {name:name, username:username, email:email, password:password, confirm_password:confirmPassword})
            .then((res)=>{
                navigate('/login');
            })
    }else{
      alert("Passwords do not match!");
    }
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
                <h1 className="text-center mb-3">Register</h1>
                <div className="form-group mt-3">
                    <label>Name:</label>
                    <input type="text" className="form-control" placeholder="Enter name" onChange={e=>setName(e.target.value)} id="name" />
                </div>
                <div className="form-group mt-3">
                    <label>Username:</label>
                    <input type="text" className="form-control" placeholder="Enter username" onChange={e=>setUsername(e.target.value)} id="username" />
                </div>
                <div className="form-group mt-3">
                    <label>Email address:</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={e=>setEmail(e.target.value)} id="email" />
                </div>
                <div className="form-group mt-3">
                    <label>Password:</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={e=>setPassword(e.target.value)} id="password" />
                </div>
                <div className="form-group mt-3">
                    <label>Confirm Password:</label>
                    <input type="password" className="form-control" placeholder="Enter password again" onChange={checkPassword} id="confirm_password" />
                    <span>{check}</span>
                </div>
                <button type="button" onClick={submitForm} className="btn btn-primary mt-4">Register</button>
            </div>
        </div>
    </div>
  )
}

export default Register
