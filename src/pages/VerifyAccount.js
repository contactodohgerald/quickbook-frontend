import React, { useState } from "react"
import { Input, Label, Button } from '@windmill/react-ui'

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import ImageDark from '../assets/img/create-account-office-dark.jpeg'
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { verifyAccount, resendActivationCode } from '../routes/api';
import { toast } from "react-toast";

const schema = yup.object({
    code: yup.number().required().positive().integer(),
}).required();

function VerifyAccount(){
    const {userID} = useParams();
    const [isValid, setValid] = useState(true);
    const navigate = useNavigate();
    
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = async data => {
        setValid(false);
        await axios.post(verifyAccount, data)
            .then(res => {
                const response = res.data;
                toast.success(response.message);
                setTimeout(() => {
                    navigate('/subscribe-account/'+response.data.userId, { replace: true })
                }, 3000);
            })
            .catch(err => {
                toast.error(err.message);
                setValid(true);
            });
    };

    const resendCode = async () => {
        setValid(false);
        await axios.post(resendActivationCode+userID)
            .then(res => {
                const response = res.data;
                toast.success(response.message);
                setValid(true);
            })
            .catch(err => {
                toast.error(err.message);
                setValid(true);
            })
    }

    return (
        <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
            <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
            <div className="flex flex-col overflow-y-auto md:flex-row">
                <div className="h-32 md:h-auto md:w-1/2" style={{backgroundImage : `url(${ImageDark})`}}> </div>
                <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                    <div className="w-full">
                    <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">Verify Your Quickbook Account</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input className="mt-1" type="hidden" value={userID} {...register("userId")}/>
                        <Label className="mt-4">
                            <span>Code</span>
                            <Input className="mt-1" placeholder="40711" type="number" {...register("code")}  />
                            <p className='text-center text-red-600'>{errors.code?.message}</p>
                        </Label>
                        <Button type="submit" block className="mt-4" disabled={!isValid}>Continue</Button>
                    </form>
                    <hr className="my-8" />
                    <Button block className="mt-4" onClick={resendCode} disabled={!isValid}>Did not recieve code? Resend</Button>
                    </div>
                </main>
            </div>
            </div>
        </div>
    )
}

export default VerifyAccount