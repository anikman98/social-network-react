import React from 'react'
import AuthUser from './AuthUser'
import { Link } from 'react-router-dom';


const Home = () => {

  const {getToken} = AuthUser();
  
  return (
    <div className='container my-4'>
      
      {
        getToken()
        ?
          <div className="card">
            <div className="card-body">
              <h2>Timeline</h2>
              <div className="row">
                <div className="col">
                  <div className="card my-4 text-center align-middle ">
                    <div className="card-body" style={{height: '50vh'}}>POSTS</div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="card my-4 text-center align-middle ">
                    <div className="card-body" style={{height: '50vh'}}>POSTS</div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="card my-4 text-center align-middle ">
                    <div className="card-body" style={{height: '50vh'}}>POSTS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        : <div className="card" style={{height: '70vh'}}>
            <div className="card-body text-center">
            <h1 className='mt-5'>Welcome to Social Network!</h1>
            <br />
            <p>Please <Link to="/login">login</Link>  or <Link to="/register">register</Link> to continue.</p>
            </div>
          </div> 
      }
      </div>
  )
}

export default Home
