import { HttpStatusCode } from 'axios';
import { Link } from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import AuthUser from './AuthUser';

const Friends = () => {

    const [usersDetails, setUsersDetails] = useState([]);

    const {http, token, user} = AuthUser();

    const fetchFriends = () => {
        http.get('/friends', {
                    headers : {
                        'Authorization': `Bearer ${token}`
                    }
                }).then((response) => {
                    setUsersDetails(response.data.users)
                    console.log(response.data.users)
                });
                
    }

    const checkDate = (date) => {
        const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        date = new Date(Date.parse(date));
        return month[date.getMonth()]+' '+date.getFullYear();
    }

    useEffect(() => {
        fetchFriends();
    },[])

  return (
    <div className='container'>
    <div className="card my-4">
        <div className="card-body">
            <div className="row my-2">
                <div className="col">
                    <h3>Friends</h3>
                </div>
                <div className="col text-end">
                    <Link className="btn btn-md btn-dark" to="/requests">Requests</Link>
                </div>    
            </div>
            <div className="row">
                <div className="col">
                {
                    usersDetails.length > 0
                    ?   usersDetails.map((user, key)=> {
                            return (
                                <div className="card mt-2" >
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-1 avatar">
                                                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt={user.name} height={50} />
                                            </div>
                                            <div className="col-6 details">
                                                <h5>{user.username}</h5>
                                            </div>
                                            <div className="col-5 time text-end">
                                                You both are friends since {checkDate(user.updated_at)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    : <h3>No friends!</h3>
                }
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Friends
