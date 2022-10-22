import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import ImageLight from '../assets/img/login-office.jpeg'
import ImageDark from '../assets/img/login-office-dark.jpeg'
import { Label, Input, Button } from '@windmill/react-ui'

import { writeStorage } from '@rehooks/local-storage';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { toast } from 'react-toast';
import { loginUser } from '../routes/api';
import axios from 'axios'

const schema = yup.object({
  username: yup.string().required(),
  password: yup.string().required('No password provided.').min(6, 'Password is too short - should be 8 chars minimum.'),
}).required();

function Login() {
  const [isValid, setValid] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async data => {
    setValid(false);
    if(data.userType == null){
      toast.error('Please select a user type to proceed');
      setValid(true);
    }
    if(data.userType == 'user'){
      await axios.post(loginUser, data)
        .then(res => {
          const response = res.data;
          toast.success(response.message);
          writeStorage('token', response.data.token);
          writeStorage('loggedInUser', response.data.user);
          setTimeout(() => {
            const origin = location.state?.from?.pathname || '/app/dashboard';
            navigate(origin, { replace: true });
          }, 2000);
        })
        .catch(err => {
          if(err.code == 'ERR_BAD_REQUEST'){
            const error = err.response.data
            toast.error(error.message)
            if(error.message == 'Hi, a code has been sent. Please provide the code to continue'){
              setTimeout(() => {
                navigate('/verify-account/'+error.data._id, { replace: true })
              }, 2000);
            }
            if(error.message == 'Please subscribe to either of the plans to continue'){
              setTimeout(() => {
                navigate('/subscribe-account/'+error.data._id, { replace: true })
              }, 2000);
            }
          }else{
            toast.error(err.message)
          }
          setValid(true);
        });
    }else{
     
    }
  };

  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img aria-hidden="true" className="object-cover w-full h-full dark:hidden" src={ImageLight} alt="Quickbook"/>
            <img aria-hidden="true" className="hidden object-cover w-full h-full dark:block" src={ImageDark} alt="Quickbook"/>
          </div>
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">Login</h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Label>
                  <span>Username</span>
                  <Input className="mt-1" type="text" placeholder="xantadoe" {...register("username")}/>
                  <p className='text-center text-red-600'>{errors.username?.message}</p>
                </Label>
                <Label className="mt-4">
                  <span>Password</span>
                  <Input className="mt-1" type="password" placeholder="***************"  {...register("password")}/>
                  <p className='text-center text-red-600'>{errors.password?.message}</p>
                </Label>
                
                <div className="grid grid-cols-2 gap-4 mt-5">
                  <Label check>
                      <Input type="radio" value="user" {...register("userType")} />
                      <span className="ml-2">User</span>
                  </Label>
                  <Label check>
                      <Input type="radio" value="agent" {...register("userType")} />
                      <span className="ml-2">Agent</span>
                  </Label>
                </div>
                <Button className="mt-4" block type="submit" disabled={!isValid}>Log in</Button>
              </form>
              <hr className="my-8" />
              <p className="mt-4">
                <Link className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline" to="/forgot-password">Forgot your password?</Link>
              </p>
              <p className="mt-1">
                <Link className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline" to="/pricing">Create Account</Link>
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Login
