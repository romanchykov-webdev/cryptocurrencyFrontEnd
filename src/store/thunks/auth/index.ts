import {createAsyncThunk} from "@reduxjs/toolkit";
import {ILoginData, IRegisterData} from "../../../common/types/auth";
import {instance, instanceAuth} from "../../../utils/axios";


//thunk for logIn
export const LoginUser = createAsyncThunk(
    'auth/login',
    async (data: ILoginData, {rejectWithValue}) => {
        try {
            const user = await instance.post('auth/login', data)
            console.log(user)
            if (
                user.data.status === 400 ||
                user.data.status === 401 ||
                user.data.status === 500
            ) return

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


//thunk for get-public-user-info
export const getPublicUser = createAsyncThunk(
    'auth/get-public-user-info',
    async (_, {rejectWithValue}) => {
        try {
            const user = await instanceAuth.get('auth/get-public-user-info')
            // console.log('user',user.data)
            sessionStorage.setItem("firstName", user.data.firstName)
            return user.data
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    },
)

//thunk for get-public-user-info
export const updateUserInfo = createAsyncThunk(
    'users/update',
    async (data: any, {rejectWithValue}) => {
        try {
            const user = await instanceAuth.patch('users', data)
            console.log('user', user.data)
            return user.data
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    },
)

//thunk for update password
export const updateUserPassword = createAsyncThunk(
    'users/change-password',
    async (data: { oldPassword: string, newPassword: string }, {rejectWithValue}) => {
        try {
            return instanceAuth.patch('users/change-password', data)

        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    },
)
//thunk for deleteUser
export const deleteUser = createAsyncThunk(
    'users/delete-user',
    async (_, {rejectWithValue}) => {
        try {
            return instanceAuth.patch('users')

        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    },
)