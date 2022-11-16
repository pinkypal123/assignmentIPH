import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
  const navigate=useNavigate()
    const [userData,setUserData]=useState({
        userEmail:'',
        userPassword:''
    })
    const signupPage=async()=>{
        console.log(userData)
         axios.post("https://reqres.in/api/register",{email: userData.userEmail, password: userData.userPassword}).then((data)=>{
console.log(data)

         })
         .catch((e)=>{
          console.log(e)
            console.log("signup field")
         })
        
         navigate('/login')
    }
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:'8rem'}}>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User Email</Form.Label>
        <Form.Control type="email" placeholder="Enter User Email " onChange={(e)=>setUserData({...userData,userEmail:e.target.value})}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=>setUserData({...userData,userPassword:e.target.value})}/>
      </Form.Group>
      <Button variant="primary" type="button" onClick={signupPage}>
        Signup
      </Button>
    </Form>
    </div>
  )
}

export default Signup