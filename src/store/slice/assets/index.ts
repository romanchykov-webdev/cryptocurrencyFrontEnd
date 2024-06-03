import {createSlice} from "@reduxjs/toolkit";
import {getFavoriteAssets} from "../../thunks/assets";

const initialState: any = {
    assets: [],
    favoriteAssets: []
}

export const assetsSlice = createSlice({
    name: 'assets',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getFavoriteAssets.fulfilled, (state, action) => {
            // state.favoriteAssets = action.payload
            state.favoriteAssets.push(action.payload)
            const filteredArray = state.favoriteAssets?.filter((value: any, index: any, self: any) => index === self.findIndex((t: any) => t.name === value.name))
            state.favoriteAssets = filteredArray
        })
    }
})

export default assetsSlice.reducer