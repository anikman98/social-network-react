import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import AuthUser from "./Components/AuthUser";
import Friends from "./Components/Friends";
import Requests from "./Components/Requests";
import Search from "./Components/Search";
import Profile from "./Components/Profile";
import User from "./Components/User";

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/friends' element={<Friends />}/>
          <Route path='/search' element={<Search />}/>
          <Route path='/requests' element={<Requests />}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path='/user/:id' element={<User />}/>
        </Routes>
        
      </div>
    </div>
  );
}

export default App;
