import React from 'react'
import { Link } from 'react-router-dom'

const Newsletter = () => {
  return (
    <div className='newsletter'>
        <div className='news__letter'>
            <h4>Subscribe to Our Newsletters</h4>
            <p>To stay up-to-date with our new arrivals and <Link>coupon giveaways.</Link></p>
        </div>

        <div className="new__letter-subscribe">
            <div>
                <input type="email" placeholder='enter your email' />
                <button>Subscribe</button>
            </div>
        </div>

    </div>
  )
}

export default Newsletter