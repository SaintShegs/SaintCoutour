import React from 'react'
import { useSelector } from 'react-redux'
import Products from '../components/Products';
import { useEffect } from 'react';


const Shop = () => {
  const {shop} = useSelector(state => state.shop)
 

  useEffect(()=>{
    window.scrollTo({ behavior: 'smooth', top: '0px' })
    },[]
  )

  return (
    <div className='shop'>
        <section className='stay__in__touch'>
        <h3>#shop with us</h3>
        <p>
            Browse from our wide variety of categories
        </p>
        </section>


      <div className='shop__items'>

          {shop.map((item)=>{
          return(
            <Products key={item.id} {...item} />
            )
              }
            )}
      </div>

    </div>
  )
}

export default Shop