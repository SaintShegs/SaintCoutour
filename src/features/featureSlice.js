import { createSlice } from "@reduxjs/toolkit";
import featured from '../data/featured';


const initialState={
    feature:featured,
};

const featureSlice=createSlice({
    name:'feature',
    initialState,

})




export default featureSlice.reducer