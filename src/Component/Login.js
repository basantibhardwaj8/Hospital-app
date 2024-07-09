
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
const Login = () => {
  const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const history =useHistory();
    console.log("login page")
    const handleLogin = ()=>{
      
        if(username ==='dummy' && password ==='password'){
           history.push('/home')
        }
        else{
            alert('Invalid credentails');
        }
    }
  return (
    <div>
      <h1>Login</h1>
      <form>
      <label>
            username
        </label>
        <input type='text' value={(username)} onChange={(e)=>
setUsername(e.target.value)}/>
<br/>
<label>
            username
        </label>
        <input type='text' value={(password)} onChange={(e)=>
setPassword(e.target.value)}/>
<button type='button' onClick={handleLogin}>Login button</button>
      </form>
    </div>
  )
}

export default Login
