import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import { Button } from '@windmill/react-ui'
import axios from "axios";
import { verifySubscription } from '../routes/api';
import { toast } from "react-toast";

function VerifySubscription() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [isValid, setValid] = useState(false);

    const status = searchParams.get("status");
    const tx_ref = searchParams.get("tx_ref");
    const transaction_id = searchParams.get("transaction_id");
    const data = {status, tx_ref, transaction_id};

    const verifyPayment = async () => {
        await axios.post(verifySubscription, data)
            .then(res => {
                const response = res.data;
                toast.success(response.message);
                setValid(true);
            })
            .catch(err => {
                toast.error(err.message);
                setValid(true);
            });
    }

    useEffect(() => {
        verifyPayment();
    }, [])

    return (
        <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
            <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-xl dark:bg-gray-800">
                <div className="flex flex-col overflow-y-auto p-5"> 
                    <div className="text-white text-center">
                        <h1 className="text-lg font-bold">Congratulations 👏👏👏</h1>
                        <hr className="my-3" />
                        <p className="text-sm">You can speed up the checkout process by ensuring ahead of time that you have adequate funds in your account to cover all planned purchases. On this page, you can subscribe to  plan using any accepted payment method. To view your previous top-up transactions</p>
                    </div>
                    <div className="text-white mt-5">
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div className="">
                                <Button block disabled={!isValid} tag={Link} to="/">Go To Home</Button>
                            </div>
                            <div className="">
                                <Button block disabled={!isValid} tag={Link} to="/login">Go To Login</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VerifySubscription;