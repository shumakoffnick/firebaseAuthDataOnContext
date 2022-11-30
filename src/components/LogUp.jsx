import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import {useNavigate} from 'react-router-dom'
const LogUp = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const {createUser} = UserAuth()

    const CreateNewUser = async (e)=>{
        e.preventDefault()
        setError('')
        try{
            await createUser(email, password)
            navigate('/homepage')
        }catch(e){
            setError(e)
            console.log(error)
        }
    }
  return (
    <div>
        <p>Create your account</p>
        <p>If you have account, you can <Link to='/'>LogIn</Link></p>
        <form onSubmit={CreateNewUser}>
            <label>
                <div>Email</div>
                <input type='email' onChange={(e)=>setEmail(e.target.value)}/>
            </label>
            <label>
                <div>Password</div>
                <input type='password' onChange={(e)=>setPassword(e.target.value)}/>
            </label>
            <div>
                <button>Create</button>
            </div>
        </form>
    </div>
  )
}

export default LogUp