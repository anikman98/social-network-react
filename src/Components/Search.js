import { Link } from 'react-router-dom';
import React, {useState} from 'react';
import AuthUser from './AuthUser';

const Search = () => {
    const [usersDetails, setUsersDetails] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState(""); 

    const {http, token, user} = AuthUser();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(searchKeyword.length > 0){
            const response = await http.get('/search?friends='+searchKeyword, 
                                {
                                    headers: {
                                        'Authorization': `Bearer ${token}`
                                    }
                                }
                            )
            setUsersDetails(response.data.users);
            console.log(usersDetails);
        }
    }

    

  return (
    <div className="container my-4">
        <div className="card">
            <div className="card-body">
                <div className="row my-2">
                    <div className="col">
                        <h3>Search peoples</h3>
                    </div>
                </div>
                <div className="row my-4">
                    <div className="col">
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search friends..." onChange={(e) => setSearchKeyword(e.currentTarget.value)} aria-label="Search" />
                            <button className="btn btn-outline-success" onClick={handleSubmit} type="submit">Search</button>
                        </form>
                    </div>
                </div>
                <div className="row">
                    {
                        searchKeyword.length>0
                        ?   <div className="col">
                                <h6>Results</h6>
                            </div>
                        : <></>

                    }
                </div>
                <div className="row">
                    <div className="col-12 my-2">
                        <div className="">
                        {
                            usersDetails
                            ? 
                                usersDetails.map((item, key) => {
                                    return ( 
                                        
                                            <div className="card mt-2" key={key}>
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-1 avatar">
                                                            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" height={50} alt={item.name} />
                                                        </div>
                                                        <div className="col-8 details">
                                                            <Link to={'/user/'+item.id}><h5>{item.name}</h5></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                    )
                                })
                                
                            : <div className="card">
                                    <div className="card-body">No users found!</div>
                                </div>
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search
