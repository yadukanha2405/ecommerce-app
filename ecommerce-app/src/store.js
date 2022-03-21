import {configureStore} from "@reduxjs/toolkit"
import slice from "./slice"
import { productSlice } from "./slice-product";


export const store = configureStore({
reducer:{
    user: slice,
    product: productSlice
}
});