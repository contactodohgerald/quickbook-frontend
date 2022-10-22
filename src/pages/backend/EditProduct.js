import React, { useEffect, useState } from 'react'

import { Input, Label, Textarea, Button } from '@windmill/react-ui'

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import PageTitle from '../../components/Typography/PageTitle'
import { toast } from 'react-toast';
import axios from 'axios';
import { editProduct, singleProduct } from '../../routes/api';
import { useAuth } from '../../middleware/AuthProvider';
import { useNavigate, useParams } from 'react-router-dom';

const schema = yup.object({
    title: yup.string().required(),
    unit_price: yup.number().required(),
    quantity: yup.number().required(),
}).required();

function EditProduct() {
    const {productId} = useParams();
    const [product, setProduct] = useState({});
    const [isValid, setValid] = useState(true);

    const { token } = useAuth();

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': token
    }

    const fetchProduct = async (uniqueId) => {
        await axios({ method: 'get', url: singleProduct+uniqueId, headers})
            .then(res => {
                const response = res.data.data;
                setProduct(response);
            })
            .catch(err => {
                toast.error(err.message);
            });
    }

    useEffect(() => {
        fetchProduct(productId);
    }, []);
  
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const navigate = useNavigate();
    const onSubmit = async data => {
        setValid(false);
        await axios.post(editProduct+productId, data, {headers})
        .then(res => {
          const response = res.data;
          toast.success(response.message);
          setValid(true);
          fetchProduct(productId);
          setTimeout(() => {
            navigate('/app/view-products', { replace: true })
          }, 3000);
        })
        .catch(err => {
            toast.error(err.message);
            setValid(true);
        });
    };
   
    return (
        <>
            <PageTitle>Edit Product</PageTitle>
            <div className="px-4 py-3 mb-8 h-full max-w-4xl bg-white rounded-lg shadow-md dark:bg-gray-800">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Label>
                        <span>Product Title</span>
                        <Input type="text" className="w-full" value={product.title} {...register("title")}/>
                        <p className='text-center text-red-600'>{errors.title?.message}</p>
                    </Label>
                    <Label className="mt-4">
                        <span>Product Unit Price <span className='text-sm text-purple-600'>(USD$)</span></span>
                        <Input type="number" className="w-full" value={product.unit_price} {...register("unit_price")}/>
                        <p className='text-center text-red-600'>{errors.unit_price?.message}</p>
                    </Label>
                    <Label className="mt-4">
                        <span>Product Quantity</span>
                        <Input type="number" className="w-full" value={product.qty} {...register("quantity")}/>
                        <p className='text-center text-red-600'>{errors.quantity?.message}</p>
                    </Label>
                    <Label className="mt-4">
                        <span>Product Thumbnail</span>
                        <Input type="file" className="w-full" placeholder="Product Title" {...register("thumbnail")}/>
                        <p className='text-center text-red-600'>{errors.thumbnail?.message}</p>
                    </Label>
                    <Label className="mt-4">
                        <span>Product Description</span>
                        <Textarea className="mt-1" rows="3" value={product.desc} {...register("description")} />
                        <p className='text-center text-red-600'>{errors.description?.message}</p>
                    </Label>
                    <Button className="mt-4" block type="submit" disabled={!isValid}>Proceed</Button>
                </form>
            </div>
        </>
    )
}

export default EditProduct
