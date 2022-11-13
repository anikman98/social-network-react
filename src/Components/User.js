import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import AuthUser from './AuthUser';

const User = () => {
    
  const params = useParams();

  const {user} = AuthUser();

  const {http, token} = AuthUser();

  const navigate = useNavigate();

  const [action, setAction] = useState(false);

  const [userDetails, setUserDetails] = useState();

  const [mutualFriends, setMutualFriends] = useState();

  const [friends, setFriends] = useState(false);
  
  const fetchUser = () => {
      http.get('/user/'+params.id, {
                  headers: {
                      'Authorization': `Bearer ${token}`
                  }
              }).then((response) => {
                setUserDetails(response.data.user);
                setMutualFriends(response.data.mutualFriend)
                if(response.data.friends == 0){
                  setFriends(false);
                }else{
                  setFriends(true);
                }
              })
  }

  const handleClick = (id) => {
      http.get('/add-friend/'+id, {
          headers: {
              'Authorization': `Bearer ${token}`
          }
      });
      setAction(true);
  }

  const checkDate = (date) => {
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    date = new Date(Date.parse(date));
    return month[date.getMonth()]+' '+date.getFullYear();
  }

  useEffect(() => {

    if(params.id == user.id){
      navigate('/profile')
    }

    fetchUser();
  },[])

  return (
    <div className='container mt-4'>
        <div className="card p-3">
          <div className="card-body">
          {
            userDetails
            ? <>
                <div className="row">
                  <div className="col-3">
                    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt={userDetails.name} style={{width: '200px'}} />
                  </div>
                  <div className="col-6">
                    <h3>{userDetails.username}</h3>
                    <p>Name: {userDetails.name}</p>
                    <p>Username: {userDetails.username}</p>
                    <p>email: {userDetails.email}</p>
                    <p>Joined: {checkDate(userDetails.created_at)}</p>
                  </div>
                  <div className="col-3 text-end">
                    {
                      friends == 0
                      ? action
                        ? <p>Request Sent!</p>
                        : <>
                            <button type='button' className='btn btn-md btn-dark' onClick={() => handleClick(userDetails.id)}>Add Friend</button>
                          </>
                      : <p>You both are friends!</p>
                    }
                  </div>
                </div>
                {
                  mutualFriends.length
                  ? 
                    <div className="row my-4">
                    {
                      mutualFriends.map((friend, key) => {
                        return (
                          <div className="col-6">
                            <div className="card">
                              <div className="card-body">
                                <div className="row">
                                  <div className="col-3">
                                    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt={userDetails.name} style={{width: '75px'}} />
                                  </div>
                                  <div className="col-8">
                                    <h5>{friend.username}</h5>
                                    <p>{friend.name}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })
                    }
                    </div>
                  : <div className="row my-4">
                      <div className="col">
                        No Mutual Friends!
                      </div>
                    </div>
                }
                
              </> 
            : <div className="row">
                <div className="col">
                  <h3>Loading</h3>
                </div>
              </div>
          }
          </div>
        </div>
    </div>
  )
}

export default User
