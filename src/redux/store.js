import {configureStore } from '@reduxjs/toolkit';
import PlanReducer from './feature/planSlice';
import SinglePlanReducer from './feature/singlePlanSlice'
import SingleSubscriptionReducer from './feature/singleSubscriptionSlice'
import ProductSliceReducer from './feature/productSlice'
import AgentSliceReducer from './feature/agentSlice'
import CustomerSliceReducer from './feature/customerSlice'

const store = configureStore({
    reducer: {
        plan: PlanReducer,
        singlePlan: SinglePlanReducer,
        subscription: SingleSubscriptionReducer,
        product: ProductSliceReducer,
        agent: AgentSliceReducer,
        custormer: CustomerSliceReducer,
    },
});

export default store