import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchAgent } from '../../routes/api';

const initialState = {
    agents: [],
    loading: false,
    error: ''
}

export const fetchAgents = createAsyncThunk("agents/fetchAgents", async (token) => { 
    return await axios({ method: 'get', url: fetchAgent, headers: { Authorization: token } }).then((response) => response.data.data);
});

const agentSlice = createSlice({
    name: 'agents', 
    initialState,  
    extraReducers: (builder) => {
        builder.addCase(fetchAgents.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchAgents.fulfilled, (state, action) => {
            state.loading = false, state.agents = action.payload, state.error = '';
        })
        builder.addCase(fetchAgents.rejected, (state, action) => {
            state.loading = false, state.agents = [], state.error = action.error.message;
        })
    }
})

export default agentSlice.reducer