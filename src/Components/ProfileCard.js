import React from 'react'

const ProfileCard = (props) => {

    console.log(props);

    const checkDate = (date) => {
        const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        date = new Date(Date.parse(date));
        return month[date.getMonth()]+' '+date.getFullYear();
    }


  return (
    <div className='card mt-4'>
        <div className="card-body">
            <div className="row">
                <div className="col-4">
                    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt={props.props.name} style={{width: '200px'}} />
                </div>
                <div className="col-8">
                    <p>Name: {props.props.name}</p>
                    <p>Email: {props.props.email}</p>
                    <p>Username: {props.props.username}</p>
                    <p>Joined: {checkDate(props.props.created_at)}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileCard
