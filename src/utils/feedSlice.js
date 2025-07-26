import { createSlice } from "@reduxjs/toolkit"

const feedSlice = createSlice({
    name: "feed",
    initialState: null,
    reducers: {
        addFeedUser: (state,action) => {
            return action.payload
        },
        removeFeedUser : (state, action) => {
            state = state.filter(r => r._id !== action.payload)
            return state
        }
    }
})

export const {addFeedUser, removeFeedUser} = feedSlice.actions
export default feedSlice.reducer
