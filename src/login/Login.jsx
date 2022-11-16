import React, { useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate=useNavigate()
    const[userInfo,setUserInfo]=useState({
        userEmail:'',
        userPassword:''
    })
    const[errorInfo,setErrorInfo]=useState(false)


    const LoginData=()=>{
        console.log(userInfo)
        // axios.post('',userInfo)
        axios.post("https://reqres.in/api/login",{email: userInfo.userEmail, password: userInfo.userPassword}).then((data)=>{
console.log(data)
         })
         .catch((e)=>{
          setErrorInfo(true)
          console.log("login field")
       })
    }
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:'8rem'}}>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User Email</Form.Label>
        <Form.Control type="email" placeholder="Enter User Email" onChange={(e)=>setUserInfo({...userInfo,userEmail:e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=>setUserInfo({...userInfo,userPassword:e.target.value})}/>
      </Form.Group>
      <Button variant="primary" type="button" onClick={LoginData}>
        Login
      </Button>
    </Form>
    {errorInfo&&<div className='error' style={{color:'red',marginTop:'10'}}>
      Plz first correct userEmail and Password
      </div>}

    </div>
  )
}

export default Login
