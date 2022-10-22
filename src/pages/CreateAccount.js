import React, {useEffect, useState} from 'react'
import { Link, useParams, useNavigate  } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'

import { Input, Label, Button } from '@windmill/react-ui'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios';
import { toast } from 'react-toast';


import { fetchSinglePlan } from '../redux/feature/singlePlanSlice'
import ImageDark from '../assets/img/create-account-office-dark.jpeg'
import { registerUser } from '../routes/api';


const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().required(),
  phone: yup.string().required(),
  password: yup.string().required('No password provided.').min(6, 'Password is too short - should be 8 chars minimum.'),
  password_confirmation: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
}).required();
  
function Register() {
  const {planId} = useParams();
  const {plans} = useSelector((state) => state.plan);
  const [isValid, setValid] = useState(true);

  const [value, setValue] = useState()

  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSinglePlan(planId));
  }, []);

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async data => {
    setValid(false);
    await axios.post(registerUser, data)
      .then(res => {
        const response = res.data;
        toast.success(response.message);
        setTimeout(() => {
          navigate('/verify-account/'+response.data._id, { replace: true })
        }, 3000);
      })
      .catch(err => {
        toast.error(err.message)
        setValid(true);
      });
  };

  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2" style={{backgroundImage : `url(${ImageDark})`}}>
            <p className="text-white mt-5 text-center">You're trying</p>
            <h1 className="text-4x1 text-white font-extrabold">QuickBook {plans.title} Plan</h1>
            <ul role="list" className="my-7 space-y-5 mt-5">
              <li className="flex space-x-3">
                <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"><strong>Price:</strong> US$ {plans.price}</span>
              </li>
              <li className="flex space-x-3">
                <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"><strong>Duration:</strong> {plans.duration} Days</span>
              </li>
            </ul>
          </div>
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">Create a Quickbook account</h1>
              <p className="text-white">Already have a Quickbook account ?
                <Link className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline" to="/login"> Login</Link>
              </p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Input className="mt-1" type="hidden" value={planId} {...register("planID")}/>
                <Label>
                  <span>Full Name</span>
                  <Input className="mt-1" type="text" placeholder="xanta doe"  {...register("name")}/>
                  <p className='text-center text-red-600'>{errors.name?.message}</p>
                </Label>
                <Label>
                  <span>Email</span>
                  <Input className="mt-1" type="email" placeholder="xanta@doe.com" {...register("email")} />
                  <p className='text-center text-red-600'>{errors.email?.message}</p>
                </Label>
                <Label>
                  <span>Phone</span>
                  <PhoneInput 
                    id="PhoneInput" 
                    className="mt-1" 
                    placeholder="081063*****" 
                    defaultCountry="NG" 
                    international 
                    countryCallingCodeEditable={false} 
                    value={value} 
                    onChange={setValue} 
                    {...register("phone")}
                  />
                  <p className='text-center text-red-600'>{errors.phone?.message}</p>
                </Label>
                <Label className="mt-4">
                  <span>Password</span>
                  <Input className="mt-1" placeholder="***************" type="password" {...register("password")} />
                  <p className='text-center text-red-600'>{errors.password?.message}</p>
                </Label>
                <Label className="mt-4 mb-4">
                  <span>Confirm password</span>
                  <Input className="mt-1" placeholder="***************" type="password" {...register("password_confirmation")}  />
                  <p className='text-center text-red-600'>{errors.password_confirmation?.message}</p>
                </Label>
                <span className='text-white text-center text-sm'>By selecting One more step, you agree to our <Link className="text-purple-600 dark:text-purple-400 hover:underline"  to={'terms'}>Terms</Link> and have read and acknowledge our <Link className="text-purple-600 dark:text-purple-400 hover:underline"  to={'policy'}>Global Privacy Statement</Link>.</span>
                <Button type="submit" block className="mt-4" disabled={!isValid}>One More Step</Button>
              </form>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Register
