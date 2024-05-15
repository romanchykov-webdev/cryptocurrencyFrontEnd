import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: {},
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
