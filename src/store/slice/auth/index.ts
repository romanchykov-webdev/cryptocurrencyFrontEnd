import {createSlice} from "@reduxjs/toolkit";
import {getPublicUser, LoginUser, RegisterUser} from "../../thunks/auth";
import {IAuthState, IPublicUser} from "../../../common/types/auth";

// const initialState: IAuthState = {
const initialState: IAuthState = {
    user: {
        token: '',
        user: {} as IPublicUser
    },
    isLogged: false,
    isLoading: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // login(state, action) {
        //     state.user = action.payload
        //     state.isLogged = true
        //     // console.log('Action', action.payload)
        //     // console.log('User', state.user)
        //     // console.log('login', state.isLogged)
        // },
    },
    extraReducers: (builder) => {
        //в ожидании  pending
        builder.addCase(LoginUser.pending, (state, action) => {
            state.isLogged = false
            state.isLoading = true
        })

        //выполнено fulfilled
        builder.addCase(LoginUser.fulfilled, (state, action) => {
            state.user = action.payload
            state.isLogged = true
            state.isLoading = false
        })
        //отклоненный rejected ошибка при входе
        builder.addCase(LoginUser.rejected, (state, action) => {
            state.isLogged = false
            state.isLoading = false
        })
        // registration -----------------------------
        // registration pending
        builder.addCase(RegisterUser.pending, (state, action) => {
            state.isLogged = false
            state.isLoading = true
        })
        // registration ok
        builder.addCase(RegisterUser.fulfilled, (state, action) => {
            state.user = action.payload
            state.isLogged = true
            state.isLoading = false
        })
        // отклоненный rejected ошибка при register
        builder.addCase(RegisterUser.rejected, (state, action) => {
            state.isLogged = false
            state.isLoading = false
        })
        // getPublicUser get public user info
        builder.addCase(getPublicUser.fulfilled, (state, action) => {
            state.user = action.payload
        })
    }

})
// export const {
//     login,
// } = authSlice.actions
export default authSlice.reducer
