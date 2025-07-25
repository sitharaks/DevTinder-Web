import { createSlice } from "@reduxjs/toolkit"

const feedSlice = createSlice({
    name: "feed",
    initialState: null,
    reducers: {
        addFeedUser: (state,action) => {
            return action.payload
        }
    }
})

export const {addFeedUser} = feedSlice.actions
export default feedSlice.reducer
