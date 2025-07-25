import { createSlice } from "@reduxjs/toolkit";

const requestsSlice = createSlice({
    name: "requestSlice",
    initialState: null,
    reducers: {
        addRequests: (state, action) => {
            return action.payload
        }
    }
})

export const { addRequests} = requestsSlice.actions
export default requestsSlice.reducer