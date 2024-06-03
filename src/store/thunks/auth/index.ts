import {createAsyncThunk} from "@reduxjs/toolkit";
import {ILoginData, IRegisterData} from "../../../common/types/auth";
import {instance} from "../../../utils/axios";


//thunk for logIn
export const LoginUser = createAsyncThunk(
    'auth/login',
    async (data: ILoginData, {rejectWithValue}) => {
        try {
            const user = await instance.post('auth/login', data)
            //session storage
            sessionStorage.setItem("token", user.data.token)
            sessionStorage.setItem("firstName", user.data.user.firstName)
            //session storage end
            //localStorage
            // localStorage.setItem("token", user.data.token)
            // localStorage.setItem("firstName", user.data.user.firstName)
            //localStorage end
            return user.data
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)
//thunk for registration
export const RegisterUser = createAsyncThunk(
    'auth/register',
    async (data: IRegisterData, {rejectWithValue}) => {
        try {
            const user = await instance.post('auth/register', data)

            //session storage
            sessionStorage.setItem("token", user.data.token)
            sessionStorage.setItem("firstName", user.data.user.firstName)
            //session storage end
            //localStorage
            // localStorage.setItem("token", user.data.token)
            // localStorage.setItem("firstName", user.data.user.firstName)
            //localStorage end

            return user.data
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)