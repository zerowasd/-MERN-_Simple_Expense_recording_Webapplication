import React,{useState,useEffect} from "react";
import {Form,Input, message} from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from '../components/Spinner';

const Register = () => {
  const navigate = useNavigate();
const [loading,setLoading] = useState(false);
    //form submition
  const submitHandler = async(values) => {
        try{
        setLoading(true);
        await axios.post("/user/register",values);
        message.success("Registration Successfull");
        setLoading(false);
        navigate("/login");
        }
        catch(error){
          setLoading(false);
          message.error('something went wrong');
        }
    }

//prevent user registration(exists)
useEffect(()=>{
  if(localStorage.getItem('user')){
    navigate('/');
  }
},[navigate]  
);
  return (
    <>
      <div className="register-page">
        {loading && <Spinner />}
        <Form layout="vertical" onFinish={submitHandler}>
            <h1>Register</h1>
            <Form.Item  label="Name" name="name" required>
                <Input />
            </Form.Item>
            <Form.Item  label="e-mail" name="email" required>
                <Input type='email'/>
            </Form.Item>
            <Form.Item  label="Password" name="password" required>
                <Input type="password"/>
            </Form.Item>
            <div className='d-flex justify-content-between'>
                <Link to="/login">Already Registered? Login Here.</Link>
            </div>
            <div className='center-button'>
            <button className='btn btn-primary'>Register</button>
            </div>
        </Form>
      </div>
    </>
  )
}

export default Register