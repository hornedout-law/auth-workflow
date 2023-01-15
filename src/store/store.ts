import { createSlice, configureStore, SerializedError } from "@reduxjs/toolkit";
import { User } from "firebase/auth";
import { admin } from "./admin-sdk";
import * as thunks from "./auth"

export type AuthState = {
    user: User | null,
    idle: boolean,
    pending: boolean,
    fullfilled: boolean,
    error: null | Error | string | SerializedError,
    admin: User | null | any
}

let initialState = (): AuthState=>{
    return {
        user: null,
        idle: true,
        pending: false,
        fullfilled: false,
        error: null,
        admin:null
    }
}

let authSlice = createSlice({
    name: "auth",
    reducers: {},
    initialState: initialState(),
    extraReducers(builder) {
        builder.addCase(thunks.loginAdmin.pending, (state, action)=>{
            state.idle = false;
            state.pending = true;
            state.error=null;
        }).addCase(thunks.loginAdmin.fulfilled, (state, action)=>{
            state.fullfilled = true;
            state.pending = false;
            state.admin = action.payload;
            state.user = null
        }).addCase(thunks.loginAdmin.rejected, (state, action)=>{
            state.error = "some error from action";
            state.pending = false
        }).addCase(thunks.loginUser.pending, (state, action)=>{
            state.idle = false;
            state.pending = true;
            state.error=null;
        }).addCase(thunks.loginUser.fulfilled,(state, action)=>{
            state.admin = null
            state.fullfilled = true;
            state.pending = false;
            state.user = action.payload;
        }).addCase(thunks.loginUser.rejected, (state, action)=>{
            state.error = "some error from action";
            state.pending = false
        }).addCase(thunks.signupUser.pending, (state, action)=>{
            state.idle = false;
            state.pending = true;
            state.error=null;
        }).addCase(thunks.signupUser.fulfilled, (state, action)=>{
            state.fullfilled = true;
            state.pending = false;
            state.user = action.payload as User;
        }).addCase(thunks.signupUser.rejected, (state, action)=>{
            state.error = action.error;
            state.pending = false
        }).addDefaultCase((state)=>{
            return state
        })
    },
})



export let store = configureStore({
    reducer: {
        auth: authSlice.reducer
    },
})

