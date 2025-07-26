import { createSlice } from "@reduxjs/toolkit";

const requestsSlice = createSlice({
    name: "requestSlice",
    initialState: null,
    reducers: {
        addRequests: (state, action) => {
            return action.payload
        },
        removeRequests: (state, action) => {
            const newArr = state.filter(req => req._id !== action.payload)
            return newArr
        }
    }
})

export const { addRequests, removeRequests} = requestsSlice.actions
export default requestsSlice.reducer