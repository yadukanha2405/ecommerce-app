import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: "product",
    initialState: [],
    reducers:{
        addProduct:(state, action)=>{
            state = [...state, action.payload]  
          return state;
        }
    }
})

export const {addProduct} = productSlice.actions;
export default productSlice.reducer;