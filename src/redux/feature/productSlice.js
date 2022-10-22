import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchProduct } from '../../routes/api';

const initialState = {
    products: [],
    loading: false,
    error: ''
}

export const fetchProducts = createAsyncThunk("products/fetchProducts", async (token) => { 
    return await axios({ method: 'get', url: fetchProduct, headers: { Authorization: token } }).then((response) => response.data.data);
});

const productSlice = createSlice({
    name: 'products', 
    initialState,  
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false, state.products = action.payload, state.error = '';
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false, state.products = [], state.error = action.error.message;
        })
    }
})

export default productSlice.reducer