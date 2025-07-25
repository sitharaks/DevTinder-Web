import { configureStore } from "@reduxjs/toolkit";
import user from './userSlice'
import feed from './feedSlice'
import requests from './requestsSlice'
import connections from './connectionSlice'

const store = configureStore({
    reducer: {
        user,
        feed,
        connections,
        requests
    }
})

export default store