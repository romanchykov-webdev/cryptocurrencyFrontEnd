import {createAsyncThunk} from "@reduxjs/toolkit";
import {newsInstance} from "../../../utils/axios";


export const getNews = createAsyncThunk(
    'news/ge-news',
    async (_, {rejectWithValue}) => {
        try {
            const news = await newsInstance.get('news/?lang=EN')
            // console.log(news.data.Data)
            return news.data.Data
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)