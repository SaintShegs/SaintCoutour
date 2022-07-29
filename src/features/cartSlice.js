import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cart:[],
    numberofitems:0,
    totalquantity:0,
    isEmpty:true,
    isOpen:false,
};




const cartSlice=createSlice({

    name:'cart',
    initialState,
    reducers:{
        addtocart(state,action){
            
            const numberofitems=state.numberofitems+1;
            const itemIndex= state.cart.findIndex(item=>item.id===action.payload.id);
            if(itemIndex>=0){
                state.cart[itemIndex].quantity+=1;
                // console.log(action.payload);
            }
            else{
                const temp={...action.payload, quantity:1};
                state.cart.push(temp);
                // console.log(action.payload);
            }
            state.numberofitems=numberofitems;
            state.isEmpty=false

           
        },
        calculateTotal:(state)=>{
            let amount=0
            let total=0
    
            state.cart.forEach(item=>{
                amount+=item.quantity
                total+=item.price*item.quantity;
            }
            )
            state.totalquantity=total;
            state.numberofitems=amount;
                if(state.numberofitems<1){
                state.isEmpty=true
                }
            },
        remove:(state, action)=>{
               state.cart=state.cart.filter(item=>item.id !== action.payload)
        },
        increase:(state,action)=>{
            const cartItem=state.cart.find(item=>item.id===action.payload);
            cartItem.quantity+=1;
        },
        decrease: (state,{payload}) => {
            const cartItem=state.cart.find(item=>item.id===payload);
            cartItem.quantity-=1;
        },
        togglecart:(state)=>{
        
            if(state.isOpen===false){
                state.isOpen=true
            }else{
                state.isOpen=false
            }
        }
    }
})



export const {addtocart, calculateTotal, remove, increase, decrease, togglecart, scroll}=cartSlice.actions;
export default cartSlice.reducer