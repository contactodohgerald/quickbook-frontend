import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { Link, useParams } from "react-router-dom";

import { useForm } from "react-hook-form";

import { Input, Label, Button } from '@windmill/react-ui'

import { fetchSingleSubscription } from '../redux/feature/singleSubscriptionSlice'
import { toast } from 'react-toast';
import { createSubscription } from '../routes/api';
import axios from 'axios';

function Subscription() {
    const {userID} = useParams();
    const {subscriptions} = useSelector((state) => state.subscription);
    const dispatch = useDispatch();
    const [isValid, setValid] = useState(true);

    useEffect(() => {
        dispatch(fetchSingleSubscription(userID));
    }, [])

    const { register, handleSubmit, formState:{ errors } } = useForm();

    const onSubmit = async data => {
        setValid(false);
        if(data.paymentMethod == null){
            toast.error('Please select a payment method to proceed');
            setValid(true);
        }
        await axios.post(createSubscription, data)
            .then(res => {
                const response = res.data;
                window.location.replace(response.data);
            })
            .catch(err => {
                toast.error(err.message);
                setValid(true);
            });
    };
    
    return(
        <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
            <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-xl dark:bg-gray-800">
                <div className="flex flex-col overflow-y-auto p-5">
                    <div className="text-white">
                        <h1 className="text-lg font-bold">Subscribe To {(subscriptions.planId) ? subscriptions.planId.title : null} Plan</h1>
                        <hr className="my-3" />
                        <p className="text-sm">You can speed up the checkout process by ensuring ahead of time that you have adequate funds in your account to cover all planned purchases. On this page, you can subscribe to {(subscriptions.planId) ? subscriptions.planId.title : null}  plan using any accepted payment method. To view your previous top-up transactions, click here: <Link className="text-purple-600 dark:text-purple-400 hover:underline" to={'/login'}>Transaction History</Link></p>
                        <p className="text-sm mt-5">When subscribing to plans, please note: Per our fraud control guidelines, some transactions (especially those involving third-party payments) may require additional verification. In some cases, we’ll need phone verification for the card holder.</p>
                    </div>
                    <div className="text-white mt-5">
                       <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                            <div className="">
                                <strong>{(subscriptions.planId) ? subscriptions.planId.title : null} Plan Price:</strong>
                            </div>
                            <div className="col-span-2">
                                <strong>USD$ {subscriptions.amount} </strong>
                            </div>
                       </div>
                       <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mt-5">
                            <div className="">
                                <strong>Payment Method:</strong>
                            </div>
                            <div className="col-span-2">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <Input type="hidden" value={userID} {...register("userId")} />
                                    <div>Card Payment <span className="text-orange-600 text-sm">(Coming Soon)</span></div>
                                    <Label check>
                                        <Input type="radio" value="card" {...register("paymentMethod")} disabled />
                                        <span className="ml-2">We accept: Visa, MasterCard, American Express and Discover</span>
                                    </Label>
                                    <div className='mt-5'>Flutterwave <span className="text-red-600 text-sm">(Recomemded)</span></div>
                                    <Label check>
                                        <Input type="radio" value="flutterwave" {...register("paymentMethod")} />
                                        <span className="ml-2">Accepts: Visa, MasterCard, American Express and Discover</span>
                                    </Label>
                                    <div className='mt-5'>PayPal <span className="text-orange-600 text-sm">(Coming Soon)</span></div>
                                    <Label check>
                                        <Input type="radio" value="paypal"  {...register("paymentMethod")} disabled />
                                        <span className="ml-2">Accepts: Visa, MasterCard, American Express and Discover</span>
                                    </Label>
                                    <div className='mt-5'>Cryptocurrency <span className="text-orange-600 text-sm">(Coming Soon)</span></div>
                                    <Label check>
                                        <Input type="radio" value="crypto"  {...register("paymentMethod")} disabled/>
                                        <span className="ml-2">We accept bitcoin payments through Bitpay and BTCPay. Other cryptocurrencies are available via Bitpay only. See the full list here →</span>
                                    </Label>
                                    <Button type="submit" block className="mt-4" disabled={!isValid}>Next</Button>
                                </form>
                            </div>
                       </div>
                    </div>
                
                </div>
            </div>
        </div>
    )
}

export default Subscription;