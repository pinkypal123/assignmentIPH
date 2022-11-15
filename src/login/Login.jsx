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
    const LoginData=()=>{
        console.log(userInfo)
        // axios.post('',userInfo)
        navigate('/signup')

    }
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:'8rem'}}>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User Email</Form.Label>
        <Form.Control type="text" placeholder="Enter User Name" onChange={(e)=>setUserInfo({...userInfo,userEmail:e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=>setUserInfo({...userInfo,userPassword:e.target.value})}/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={LoginData}>
        Login
      </Button>
    </Form>
    </div>
  )
}

export default Login
