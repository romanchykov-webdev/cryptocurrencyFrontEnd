import {createSlice} from "@reduxjs/toolkit";
import {IAuthState} from "../../../common/types/auth";

// const initialState: IAuthState = {
const initialState: any = {
    user: {
        id: null,
        firstName: "",
        userName: "",
        email: "",
        createdAt: "",
        updatedAt: "",
        watchlist: [
            {
                id: null,
                name: "",
                assetId: "",
                createdAt: "",
                updatedAt: "",
                userId: null
            }
        ]
    },
    isLogged: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            state.user = action.payload
            state.isLogged = true
            // console.log('Action', action.payload)
            // console.log('User', state.user)
            // console.log('login', state.isLogged)
        }
    }

})
export const {
    login,
} = authSlice.actions
export default authSlice.reducer
