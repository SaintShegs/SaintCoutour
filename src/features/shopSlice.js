import { createSlice } from "@reduxjs/toolkit";
import shop from '../data/shop';


const initialState={
    shop: shop
};

const shopSlice=createSlice({
    name:'shop',
    initialState
})


export default shopSlice.reducer
