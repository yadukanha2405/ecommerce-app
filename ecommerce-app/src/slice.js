import { createSlice } from "@reduxjs/toolkit";
export const slice = createSlice({
    name: "user",
    initialState: [],
    reducers:{
        addUsers: (state, action)=>{
            state = [...state, action.payload]
            return state;
        },
    }
});

export const {addUsers} = slice.actions;
export default slice.reducer