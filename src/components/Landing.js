import React from 'react' 
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className='landing'>
      
        <div className='landing__hero'>

            <div className='landing__hero-info'>
                <h4>Trade in Offer</h4>
                <h1>Super value deals 
                    </h1>
                    <h1> on all products</h1>
                <p>The best place to buy your favorite clothes.<br />save more with coupon and get 70% off.</p>
                
                <Link className='start_shopping' to='./shop'>Start Shopping</Link>
            </div>
                

            </div>

    </div>
  )
}

export default Landing