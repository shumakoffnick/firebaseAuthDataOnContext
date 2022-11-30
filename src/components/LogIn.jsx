import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { UserAuth } from '../context/AuthContext' 
const LogIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const {signIn} = UserAuth()
    const signInLog = async (e)=>{
        e.preventDefault()
        setError('')
        try{
            await signIn(email, password)
            navigate('/homepage')
        }catch(e){
            setError(e.message)
            console.log(error)
        }
    } 

  return (
    <div>
        <p>LogIn your account</p>
        <p>If you dont have account, you can <Link to='/logup'>LogUp</Link></p>
        <form onSubmit={signInLog}>
            <label>
                <div>Email</div>
                <input type='email' onChange={(e)=> setEmail(e.target.value)}/>
            </label>
            <label>
                <div>Password</div>
                <input type='password' onChange={(e)=> setPassword(e.target.value)}/>
            </label>
            <div>
                <button>Login</button>
            </div>
        </form>
    </div>
  )
}

export default LogIn