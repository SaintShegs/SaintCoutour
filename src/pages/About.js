import React from 'react'
import image1 from '../Images/a6.f1fedb72.webp'
import image2 from '../Images/download.f6de3f8e.svg'
import Services from '../components/Services'
const About = () => {
  return (
    <div className='About__us'>
        <section className='stay__in__touch'>
        <h3>#Who we are</h3>
        <p>
        Get to know us.
        </p>
      </section>


      <section className='about__us-section'>
        <div className='about__us-one'>
            <img src={image1} alt="" />
        </div>
        <div className='about__us-two'>
            <h4>Who We Are ?</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nostrum facilis delectus corrupti, aspernatur, aperiam iste laudantium voluptate veniam unde ducimus consequatur, perspiciatis voluptatibus! Qui maiores temporibus aperiam hic sequi eveniet ipsa nihil ut minima quam, perspiciatis placeat asperiores iure veniam ducimus, at expedita quisquam deleniti rerum quod. Expedita porro excepturi eos repellendus culpa eum qui cum harum, est rerum aut minima mollitia. Corrupti cupiditate aperiam officiis dignissimos esse deserunt voluptatum ut molestias repellendus, qui ipsa repellat nisi ab magni dicta id eius! Quasi molestiae eos provident consequatur. Optio debitis ea corporis aperiam, libero repellendus distinctio illo similique necessitatibus sunt?</p>
        </div>
      </section>

      <section className='download'>
        <div className='download__image'>
            <h4>Download our App</h4>
            <img src={image2} alt="" />

        </div>
      </section>
      <Services/>
    </div>
  )

}

export default About