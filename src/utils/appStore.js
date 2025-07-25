import { configureStore } from "@reduxjs/toolkit";
import user from './userSlice'
import feed from './feedSlice'

const store = configureStore({
    reducer: {
        user,
        feed
    }
})

export default store