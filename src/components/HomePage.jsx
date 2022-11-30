import React from 'react'
import { UserAuth } from '../context/AuthContext'
import {useNavigate} from 'react-router-dom'
import Todo from './Todo'
const HomePage = () => {
    const navigate = useNavigate()
    const {logOut, user} = UserAuth()
    const handleLogout = async()=>{
        try{
            await logOut()
            navigate('/')            
        }catch (e){
            console.log(e.message);
        }
    }
  return (
    <div>
        <h1>Its your account: {user.email}</h1>
        <button onClick={handleLogout}>LogOut</button>
        <Todo/>
    </div>
  )
}

export default HomePage