import React, { useState,useNavigate } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const Signup = () => {
  const navigate=useNavigate()
    const [userData,setUserData]=useState({
        userName:'',
        userPassword:''
    })
    const signupPage=()=>{
        console.log(userData)
        navigate('/')
    }
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:'8rem'}}>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" placeholder="Enter User Name" onChange={(e)=>setUserData({...userData,userName:e.target.value})}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=>setUserData({...userData,userName:e.target.value})}/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={signupPage}>
        Signup
      </Button>
    </Form>
    </div>
  )
}

export default Signup