// import DATA from 
import './User.models.css'
import React from 'react'

const User = (props) => {
  console.log(props)
  console.log(props.firstName)
  return (
   <>
    <div className='firstDiv'>
        <img className='image' src={props.src} alt='user1'/>
        <h2 className='username'>{props.firstName +' '+ props.lastName}</h2>
        <h2 className='location'>{props.location}</h2>
        {/* <p>{props.add}</p> */}
        <p >{props.working}</p>
        <br/>
        <p>{props.about}</p>
    </div> 
     <div>
        <button>More...</button>
    </div>
   </>
  )
}

export default User