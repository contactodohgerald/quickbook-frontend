import React, { useState } from 'react'

import { Input, Label, Textarea, Button } from '@windmill/react-ui'

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import PageTitle from '../../components/Typography/PageTitle'
import { toast } from 'react-toast';
import axios from 'axios';
import { addAgent } from '../../routes/api';
import { useAuth } from '../../middleware/AuthProvider';
import Alert from '../../components/Alert/Alert';

const schema = yup.object({
    name: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required('No password provided.').min(6, 'Password is too short - should be 8 chars minimum.'),
}).required();

function AddAgent() {
    const [isValid, setValid] = useState(true);

    const { token } = useAuth();

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': token
    }

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = async data => {
        setValid(false);
        await axios.post(addAgent, data, {headers})
        .then(res => {
          const response = res.data;
          toast.success(response.message);
          setValid(true);
        })
        .catch(err => {
            toast.error(err.message);
            setValid(true);
        });
    };
   
    return (
        <>
            <PageTitle>Add Agent</PageTitle>
            <div className="px-4 py-3 mb-8 h-full max-w-4xl bg-white rounded-lg shadow-md dark:bg-gray-800">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Label>
                        <span>Agent Name</span>
                        <Input type="text" className="w-full" placeholder="e.g xanta doe" {...register("name")}/>
                        <p className='text-center text-red-600'>{errors.name?.message}</p>
                    </Label>
                    <Label className="mt-4">
                        <span>Agent Email</span>
                        <Input type="email" className="w-full" placeholder="e.g xantadoe@gmail.com" {...register("email")}/>
                        <p className='text-center text-red-600'>{errors.email?.message}</p>
                    </Label>
                    <Alert message='1234567890 is the default password for all agent accounts, which they can change after loginning in' />
                    <Label className="mt-4">
                        <span>Password</span>
                        <Input type="password" className="w-full" value="1234567890" {...register("password")} readonly/>
                        <p className='text-center text-red-600'>{errors.password?.message}</p>
                    </Label>
                    <Button className="mt-4" block type="submit" disabled={!isValid}>Add Agent</Button>
                </form>
            </div>
        </>
    )
}

export default AddAgent
