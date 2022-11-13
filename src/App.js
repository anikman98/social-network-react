import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import AuthUser from "./Components/AuthUser";
import Friends from "./Components/Friends";

function App() {

  const {getToken} = AuthUser();

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/friends' element={<Friends />}/>
        </Routes>
        
      </div>
    </div>
  );
}

export default App;
