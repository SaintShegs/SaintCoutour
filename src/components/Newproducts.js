import React from 'react'
import { useSelector } from 'react-redux'
import Products from './Products';
const Newproducts = () => {
    const {newarrival} = useSelector(state => state.newarrival)
    // console.log(newarrival);

  return (
    <div className='featured'>
    <div className="featured__header">
        <h2>New Arrivals</h2>
        <h5>The latest products we have on sale</h5>
    </div>

  <div className='products'>

      {newarrival.map((item)=>{
      return(
        <Products key={item.id} {...item} />
        )
    }
    )}
</div>

</div>
  )
}

export default Newproducts