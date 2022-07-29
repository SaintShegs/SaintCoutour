import React from 'react'
import Cards from '../components/Cards'
import Discount from '../components/Discount'
import Featuredproducts from '../components/Featuredproducts'
import Landing from '../components/Landing'
import Newproducts from '../components/Newproducts'
import Services from '../components/Services'
import { useEffect } from 'react'

const Homepage = () => {
  useEffect(()=>{
    window.scrollTo({ behavior: 'smooth', top: '0px' })
    },[]
  )
  return (
    <div>
        <Landing/>
        <Services/>
        <Featuredproducts/>
        <Discount/>
        <Newproducts/>
        <Cards/>
      
    </div>
  )
}

export default Homepage