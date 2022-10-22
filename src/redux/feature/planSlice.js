import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import { fecthPlan } from '../../routes/api';

const initialState = {
    plans: [],
    loading: false,
    error: ''
}

export const fetchPlans = createAsyncThunk("plans/fetchPlans", async () => { 
    return await axios.get(fecthPlan).then((response) =>  response.data.data);
});

const planSlice = createSlice({
    name: 'plans', 
    initialState,  
    extraReducers: (builder) => {
        builder.addCase(fetchPlans.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchPlans.fulfilled, (state, action) => {
            state.loading = false, state.plans = action.payload, state.error = '';
        })
        builder.addCase(fetchPlans.rejected, (state, action) => {
            state.loading = false, state.plans = [], state.error = action.error.message;
        })
    }
})

export default planSlice.reducer