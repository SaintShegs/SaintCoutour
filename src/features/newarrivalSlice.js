import { createSlice } from "@reduxjs/toolkit";
import newarrival from '../data/newarrival';


const initialState={
    newarrival: newarrival
};

const newarrivalSlice=createSlice({
    name:'arrival',
    initialState
})


export default newarrivalSlice.reducer
