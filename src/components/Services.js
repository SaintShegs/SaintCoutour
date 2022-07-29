import React from 'react'
import deliver from '../Images/delivery.22fb3d8c.svg'
import order from '../Images/order.81d090f7.svg'
import promotion from '../Images/promos.a5a10805.svg'
import saving from '../Images/savings.9e09e8a6.svg'
import shipping from '../Images/shipping.e2ecc9ab.svg'
import support from '../Images/support.2d95b08f.svg'

const Services = () => {
  return (
    <div className='services'>
        <div className="services__header">
            <h2>Services</h2>
        </div>
        <div className="service__cards">
            <div className="service__card">
                    <img src={shipping} alt=""/>
                   <span>Free shipping</span>
            </div>
            <div className="service__card">
                    <img src={order} alt="" />
                   <span>Easy Order</span>
            </div>
            <div className="service__card">
                    <img src={promotion} alt="" />
                   <span>Promotions</span>
            </div>
            <div className="service__card">
                    <img src={saving} alt="" />
                   <span>Smart Saving</span>
            </div>
            <div className="service__card">
                    <img src={deliver} alt="" />
                   <span>Home Delivery</span>
            </div>
            <div className="service__card">
                    <img src={support} alt="" />
                   <span>24/7 Support</span>
            </div>
        </div>





    </div>
  )
}

export default Services