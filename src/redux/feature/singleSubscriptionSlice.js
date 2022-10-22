import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import { singleSubscription } from '../../routes/api';

const initialState = {
    subscriptions: {},
    loading: false,
    error: ''
}

export const fetchSingleSubscription = createAsyncThunk("subscription/fetchSubscription", async (uniqueID) => { 
    return await axios.get(singleSubscription+uniqueID).then((response) => response.data.data);
});

const singleSubscriptionSlice = createSlice({
    name: 'subscriptions', 
    initialState,  
    extraReducers: (builder) => {
        builder.addCase(fetchSingleSubscription.pending, (state) => {
            state.loading = true
        });
        builder.addCase(fetchSingleSubscription.fulfilled, (state, action) => {
            state.loading = false, state.subscriptions = action.payload, state.error = '';
        });
        builder.addCase(fetchSingleSubscription.rejected, (state, action) => {
            state.loading = false, state.subscriptions = {}, state.error = action.error.message;
        });
    }
})

export default singleSubscriptionSlice.reducer