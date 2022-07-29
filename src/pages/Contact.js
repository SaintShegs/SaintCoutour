import React from 'react'
import Map from 'react-map-gl';
import { useEffect } from 'react';







const Contact = () => {

  useEffect(()=>{
    window.scrollTo({ behavior: 'smooth', top: '0px' })
    }
  )

  

  return (
    <div className='contact__us'>
      <section className='stay__in__touch'>
        <h3>#Stay in Touch</h3>
        <p>
        With our 24/7 hotlines we will attend to you.
        </p>
      </section>


      <section className='contact__infos'>
        <div className='contact__info'>
            <h5>Get in Touch</h5>
            <p>
            We are here to help you.
            </p>
            <h4>Visit one of our agency locations or contact us today</h4>
            <h5>Head Office</h5>
            <p><i className='fa fa-location'/> <span>56 Glassfor Street Glasgow G1 1UL New York</span></p>
            <p><i className='fa fa-envelope'/><span>buyit@gmail.co.uk</span></p>
            <p><i className='fa fa-phone'/><span>+01-2222-365/+01-2343-563</span></p>
            <p><i className='fa fa-clock'/><span>Monday to Saturday: 8:00am to 8:00pm</span></p>


        </div>

        {/* <div id='map'>
        <Map
    initialViewState={{
      longitude: -100,
      latitude: 40,
      zoom: 3.5
    }}
    style={{width: 600, height: 400}}
    mapStyle="mapbox://styles/mapbox/streets-v9"
  />
        </div> */}



      </section>

    
      <section className='login-box'> 
            <h5>Leave a message</h5>
            <h4>We love to hear from you</h4>

            <form>
                <div className='user-box'>
                    <input type="text" name='username' required />
                    <label htmlFor="username">Fullname</label>
                </div>
                <div className='user-box'>
                    <input type="email" name='email' required />
                    <label htmlFor="email">E-Mail</label>
                </div>
                <div className='user-box'>
                    <input type="text" name='subject' required />
                    <label htmlFor="subject">Subject</label>
                </div>
                <div className='user-box'>
                    <textarea name="message" id="message" cols="30" rows="10"/>
                    <label htmlFor="message">Your message</label>
                </div>

                <button>Submit</button>
            </form>
      </section>
    </div>
  )
}

export default Contact