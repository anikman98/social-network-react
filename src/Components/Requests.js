import { HttpStatusCode } from 'axios'
import React, { useEffect, useState } from 'react'
import AuthUser from './AuthUser'

const Requests = () => {

    const {token, http} = AuthUser();

    const [requests, setRequests] = useState([]);
    const [action, setAction] = useState(false);


    const fetchRequests = async () => {
        const response = await http.get('/fetch-requests',{
            headers : {
                'Authorization': `Bearer ${token}`
            }
        });
        setRequests(response.data);
    }

    const handleAccept = (id) => {
        http.get('/accept/'+id, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        setAction(!action);
    }

    const handleReject = (id) => {
        http.get('/reject/'+id, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        setAction(!action);
    }

    const checkDate = (date) => {
        const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        date = new Date(Date.parse(date));
        return month[date.getMonth()]+' '+date.getFullYear();
    }

    useEffect(() => {
        fetchRequests();
    },[action])

  return (
    <div className='container my-4'>
        <div className="card">
            <div className="card-body">
                <div className="row my-2">
                    <div className="col">
                        <h3>Requests</h3>
                    </div>
                </div>
                {
                    requests.length
                    ? requests.map((request, key) => {
                        return (
                            <div className="row my-2" key={key}>
                                <div className="col">
                                    <div className="card mt-2">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-1 avatar">
                                                    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" height={50} alt={request.sender.name} />
                                                </div>
                                                <div className="col-6">
                                                    <h5>{request.sender.name}</h5> 
                                                    <p>Username: {request.sender.username}</p>
                                                </div>
                                                <div className="col-5 text-end">
                                                    {
                                                        request.status == 1
                                                        ?   <>
                                                                <button type='button' className='btn btn-md btn-danger m-2' onClick={() => handleReject(request.id)}>Reject</button>
                                                                <button type='button' className='btn btn-md btn-primary m-2' onClick={() => handleAccept(request.id)}>Accept</button>
                                                            </>
                                                        : (request.status == 2
                                                            ? <h6>Request Accepted on {checkDate(request.updated_at)}</h6>
                                                            : <h6>Request Rejected on {checkDate(request.updated_at)}</h6>
                                                            )
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    :   <div className="row my-2">
                            <div className="col">
                                <div className="card mt-2">
                                    <div className="card-body">
                                        <h5>No requests!</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                }
            </div>
        </div>
    </div>
  )
}

export default Requests
