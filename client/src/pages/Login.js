import React, {useState,useEffect} from 'react'
import {Form,Input,message} from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../components/Spinner';
const Login = () => {
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate()
    //form subm
    const submitHandler = async(values) => {
        try{
          setLoading(true)
          const {data}=await axios.post('/user/login',values)
          setLoading(false)
          message.success("Login Successfull")
          localStorage.setItem('user', JSON.stringify({...data.user,password:''}))
          navigate('/')
        }catch{
          message.error("something went wrong")
        }
    }

//prevent user login(exists)
useEffect(()=>{
  if(localStorage.getItem('user')){
    navigate('/');
  }
},[navigate]  
);
  return (
    <>
      <div className="login-page">
        {loading && <Spinner />}
        <Form layout="vertical" onFinish={submitHandler}>
            <h1>Login</h1>
            <Form.Item  label="e-mail" name="email">
                <Input type='email'/>
            </Form.Item>
            <Form.Item  label="Password" name="password">
                <Input type="password"/>
            </Form.Item>
            <div className='d-flex justify-content-between'>
                <Link to="/register">Not a User? Register Here.</Link>
            </div> 
            <div className='center-button'>
            <button className='btn btn-primary'>Log-in</button>
            </div>
        </Form>
      </div>
    </>
  )
}

export default Login
