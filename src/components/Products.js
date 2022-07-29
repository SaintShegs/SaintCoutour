import React from 'react'
import { useDispatch } from 'react-redux'

import { addtocart } from '../features/cartSlice';
import { useAuth0 } from "@auth0/auth0-react";




const Products = ({id,name,price,currency,description,image,instock }) => {
  const { isAuthenticated } = useAuth0();
  const { loginWithRedirect } = useAuth0();

  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addtocart(item))
  }


  return (
    <div className='product__container'>
            <div className="featured__item">
                <div className="featured__item__image">
                    <img src={image} alt=""/>
                </div>
                <div className="featured__item__info">
                    <div className='featured__item__info-name'>
                    <p>{name}</p>
                    {instock ? <span>In stock</span> : <span>Out of stock</span>}
                    </div>

                    <div className='featured__item__info-description'>
                      <p>{description}</p>

                    </div>
                    <div className='featured__item__info-price'>
                      <p>{`${currency} ${price}.00`}</p>
                      <i title='Add to cart' className="fas fa-cart-plus" onClick={
                        ()=>{
                          if(isAuthenticated){
                            handleAddToCart({id,name,price,currency,description,image,instock})
                          }
                          else{
                            loginWithRedirect()
                          }
                        
                        }}></i>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Products