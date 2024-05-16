import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./slice/auth";

const store = configureStore({
    reducer: {
        auth: authSlice
    }
})

//type function useDispatch and useState
export type AppDispatch = typeof store.dispatch
export type RootStore = ReturnType<typeof store.getState>

export default store;