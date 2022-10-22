const baseUrl = 'http://127.0.0.1:9090/api/v1';


export const fecthPlan = baseUrl+'/plans/fetch-all';
export const fecthSinglePlan = baseUrl+'/plans/fetch/';
export const registerUser = baseUrl+'/auth/register';
export const verifyAccount = baseUrl+'/verification/verify';
export const singleSubscription = baseUrl+'/subscriptions/fetch/';
export const resendActivationCode = baseUrl+'/verification/resend/code/';
export const createSubscription = baseUrl+'/subscriptions/create';
export const verifySubscription = baseUrl+'/subscriptions/verify';
export const loginUser = baseUrl+'/auth/login';
export const loginAgent = baseUrl+'/agents/login';
export const addProduct = baseUrl+'/products/create';
export const fetchProduct = baseUrl+'/products/fetch';
export const singleProduct = baseUrl+'/products/fetch/';
export const editProduct = baseUrl+'/products/fetch/';

export const fecthUserProfile = baseUrl+'/users/fetch/';
export const fetchAgent = baseUrl+'/agents/fetch';
export const addAgent = baseUrl+'/agents/create';

export const fetchCustormers = baseUrl+'/custormers/fetch';