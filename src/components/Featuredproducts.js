import React from 'react'
import { useSelector } from 'react-redux'
import Products from './Products';


const Featuredproducts = () => {
  const {feature} = useSelector(state => state.feature)
  // console.log(feature);

 



  return (
    <div className='featured'>
        <div className="featured__header">
            <h2>Featured Products</h2>
            <h5>The best selling products we have on sale</h5>
        </div>

      <div className='products'>
      
          {feature.map((item)=>{
          return(
            <Products key={item.id} {...item} />

            )
        }
        )}
    </div>

    </div>
  )
}

export default Featuredproducts