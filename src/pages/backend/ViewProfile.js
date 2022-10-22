import React, { useState } from 'react'

import PageTitle from '../../components/Typography/PageTitle'

import { Card, CardBody } from '@windmill/react-ui'
import { Label, Input } from '@windmill/react-ui'
import DT_DD from '../../components/DT_DD/DT_DD'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from '@windmill/react-ui'

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import axios from 'axios';
import { toast } from 'react-toast';
import { useAuth } from '../../middleware/AuthProvider'

const schema = yup.object({
    name: yup.string().required(),
}).required();

function ViewProfile() {
    const {loggedInUser} = useAuth();
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isValid, setValid] = useState(true);
    const [value, setValue] = useState()


    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = async data => {
        setValid(false);
        await axios.post('', data)
        .then(res => {
          const response = res.data;
          toast.success(response.message);
          setValid(true);
        })
        .catch(err => {
            console.log('err', err)
            toast.error(err.message);
            setValid(true);
        });
    };
   
    const {avatar, name, email, userType, username, phone} = loggedInUser;
    return (
        <>
            <PageTitle>View Profile</PageTitle>

            <Card className="shadow-md mb-8">
            <CardBody>
                <div className="flex flex-col items-center pb-10">
                    <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src={avatar} alt={name} />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{name}</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{userType}</span>
                    <div className="flex mt-4 space-x-3 md:mt-6">
                        <Button onClick={() => setIsModalOpen(true)}>Edit Profile</Button>
                    </div>
                </div>
            </CardBody>
            </Card>
        
            <div className="grid gap-6 mb-8 md:grid-cols-2">
                <Card className="shadow-md">
                    <CardBody>
                        <dl className="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                            <DT_DD value={'Fullname'} valueHold={name} />
                            <DT_DD value={'Email Address'} valueHold={email} />
                        </dl>
                    </CardBody>
                </Card>

                <Card className="shadow-md">
                <CardBody>
                    <dl className="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                        <DT_DD value={'Username'} valueHold={username} />
                        <DT_DD value={'Phone number'} valueHold={phone} />
                    </dl>
                </CardBody>
                </Card>
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <ModalHeader>Edit Profile</ModalHeader>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <ModalBody>
                        <Label>
                            <span>Full Name</span>
                            <Input type="text" className="w-full" value={name} {...register("name")}/>
                            <p className='text-center text-red-600'>{errors.name?.message}</p>
                        </Label>
                        <Label>
                            <span>Email</span>
                            <Input type="text" className="w-full" value={email} readonly/>
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
                                {...register("phone")}/>
                            <p className='text-center text-red-600'>{errors.phone?.message}</p>
                        </Label>
                    </ModalBody>
                    <ModalFooter>
                        <div className="hidden sm:block">
                            <Button layout="outline" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                        </div>
                        <div className="hidden sm:block">
                            <Button type="submit" block disabled={!isValid}>Continue</Button>
                        </div>
                        <div className="block w-full sm:hidden">
                            <Button block size="large" layout="outline" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                        </div>
                        <div className="block w-full sm:hidden">
                            <Button type="submit" block disabled={!isValid}>Continue</Button>
                        </div>
                    </ModalFooter>
                </form>
            </Modal>
        </>
    )
}

export default ViewProfile
