import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '../../components/Inputs/Input'
const Login = ({setCurrentPage}) => {

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [error,setError]=useState(null)

    const navigate=useNavigate()

    const handleLogin=async(e)=>{
        e.preventDefault()

        if(!validateEmail(email)){
          setError("please enter correct email")
          return
        }

        if(!password){
          setError("please enter the password")
          return
        }

        setError("")


        try{

        }
        catch(error){

          if(error.response && error.response.data.message){
            setError(error.response.data.message)
          }
          else{
            setError("something went wrong. please try again")
          }

        }
    }
  return (
    <div className=''>
        <h3 className=''>Welcome Back</h3>
        <p className=''>enter your details here</p>
        
        <form onSubmit={handleLogin}>
            <Input
            value={email}
            onChange={({target })=>setEmail(target.value)}
            label="Email Address"
            placeholder="address email" type="text"
            />

            <Input
            value={password}
            onChange={({target })=>setPassword(target.value)}
            label="password Address"
            placeholder=" password" type="password"
            />

            {error && <p className=''>{error}</p>}

            <button type='submit' className='' onClick={()=>setCurrentPage("signup")}>SignUp</button>
        </form>
      
    </div>
  )
}

export default Login
