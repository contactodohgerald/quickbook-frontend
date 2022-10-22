import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import { fecthSinglePlan } from '../../routes/api';

const initialState = {
    plans: {},
    loading: false,
    error: ''
}

export const fetchSinglePlan = createAsyncThunk("plans/fetchPlans", async (uniqueID) => { 
    return await axios.get(fecthSinglePlan+uniqueID).then((response) =>  response.data.data);
});

const singlePlanSlice = createSlice({
    name: 'plans', 
    initialState,  
    extraReducers: (builder) => {
        builder.addCase(fetchSinglePlan.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchSinglePlan.fulfilled, (state, action) => {
            state.loading = false, state.plans = action.payload, state.error = '';
        })
        builder.addCase(fetchSinglePlan.rejected, (state, action) => {
            state.loading = false, state.plans = {}, state.error = action.error.message;
        })
    }
})

export default singlePlanSlice.reducer