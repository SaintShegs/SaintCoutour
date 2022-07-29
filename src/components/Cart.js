import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { remove, increase, decrease } from '../features/cartSlice'
import empty from '../Images/empty cart 2.png'
import { withAuthenticationRequired } from '@auth0/auth0-react';

const Cart = () => {
    const { cart,  numberofitems, totalquantity} = useSelector(state => state.cart)
   

    const increasequantity = (id) => {
        dispatch(increase(id))
    }

    const dispatch=useDispatch()
    if (numberofitems===0){
        return(
            <div className='emptycart'>
                <img src={empty} alt="" />
                {/* <h5>Your Cart is Empty</h5> */}
                <h5>Browse our categories and discover our best deals!

</h5>
            </div>
        )
    }

  return (
    <div className='cart__items'>
        <h5 className='cart__items--hear'>Items in your cart</h5>
        <hr />
       {cart.map((item)=>{ 
        return(
            <div className='cart__item' key={item.id}>
                <div className='cart__image'>
                    <div className='cart__image-size'>
                        <img src={item.image} alt="" />
                    </div>

                </div>

                <div className='cartdetails'>
                    <p>{item.description}</p>
                    <h5>{`NGN ${item.price}.00`}</h5>
                    <p className='rem' onClick={
                        ()=>{
                            dispatch(remove(item.id))
                        }
                    }>remove</p>
              <hr />
                </div>

                <div className='cartquantity'>
                <i onClick={
                    ()=>{
                increasequantity(item.id)
                    }
                } className="fa-solid fa-chevron-up"></i>
                <h4>{item.quantity}</h4>
                <i onClick={
                    ()=>{
                        if(item.quantity===1){
                            dispatch(remove(item.id))
                            return
                        }
                        dispatch(decrease(item.id))
                    }
                } className="fa-solid fa-chevron-down"></i>
                </div>
            </div>
        )
       })}
        <hr />
        <div className='carttotal'>
       <Link>Checkout</Link>

       <h5>{`NGN ${totalquantity.toLocaleString()}.00`}</h5>

        </div>
    </div>
  )
}

export default withAuthenticationRequired(Cart, {
    // Show a message while the user waits to be redirected to the login page.
    onRedirecting: () => <div>Redirecting you to the login page...</div>,
  })