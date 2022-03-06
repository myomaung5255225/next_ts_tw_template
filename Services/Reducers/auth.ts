import {createSlice,PayloadAction} from '@reduxjs/toolkit';
import { authStateProps, setCredentialsProps } from '../../Interfaces/store';

const initialState:authStateProps={
    accessToken:'',
    refreshToken:'',
    loginTm:'',
    isAuth:false
}

export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        setCredentials:(state,action:PayloadAction<setCredentialsProps>)=>{
            state.accessToken=action.payload.accessToken;
            state.refreshToken=action.payload.refreshToken;
            state.loginTm=action.payload.loginTm;
            state.isAuth=action.payload.isAuth
        },
        removeCredentials:(state,action:PayloadAction)=>{
            state.accessToken='';
            state.refreshToken='';
            state.loginTm='';
            state.isAuth=false;
        }
    }
    
})

export const {setCredentials,removeCredentials} = authSlice.actions

export default authSlice.reducer;