import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchCustormers } from '../../routes/api';

const initialState = {
    customers: [],
    loading: false,
    error: ''
}

export const fetchCustomers = createAsyncThunk("agents/fetchCustomers", async (token) => { 
    return await axios({ method: 'get', url: fetchCustormers, headers: { Authorization: token } }).then((response) => response.data.data);
});

const customerSlice = createSlice({
    name: 'customers', 
    initialState,  
    extraReducers: (builder) => {
        builder.addCase(fetchCustomers.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchCustomers.fulfilled, (state, action) => {
            state.loading = false, state.customers = action.payload, state.error = '';
        })
        builder.addCase(fetchCustomers.rejected, (state, action) => {
            state.loading = false, state.customers = [], state.error = action.error.message;
        })
    }
})

export default customerSlice.reducer