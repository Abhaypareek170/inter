import React from 'react'
import User from './User'
import {Data} from '../Data.js'

const Home = () => {
  const users = Data;
  console.log(users)
  return (
    <>{
      users.map((ele)=>
        <User key={ele._id} src={ele.profile_picture} firstName={ele.name.first} lastName={ele.name.last} location = {ele.location} about={ele.about} working={ele.profession}/>)
    }
    
    </>
  )
}

export default Home