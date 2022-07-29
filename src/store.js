import { configureStore } from "@reduxjs/toolkit";
import featureReducer from './features/featureSlice';
import newarrivalReducer from './features/newarrivalSlice'
import cartReducer from './features/cartSlice'
import shopReducer from './features/shopSlice'

export const store=configureStore({
    reducer:{
        feature:featureReducer,
        newarrival:newarrivalReducer,
        cart:  cartReducer,
        shop:shopReducer
    }
});