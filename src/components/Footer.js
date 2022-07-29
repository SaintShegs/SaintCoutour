import React from 'react'
import { Link } from 'react-router-dom'
import visa from '../Images/visa.b6c51844.svg'
import master from '../Images/mastercard.71566aeb.svg'
import google from '../Images/google.svg'
import apple from '../Images/apple.svg'
import flutter from '../Images/flutterwave.jpg'
import { useAuth0 } from "@auth0/auth0-react";

const Footer = () => {
    const { loginWithRedirect } = useAuth0();
  return (
    <footer>
        <div className='footer'>
        <div className='footer__header'>
            <Link><h4>Saint's Coutour</h4></Link>
        </div>

            <div className='footer__links'>
                <section className='contact'>
                    <h5>Contacts</h5>
                    <p>Address: <span>562 Wellington Road, San Francisco</span></p>
                    <p>Phone: <span>+01-2222-365/+01-2343-563</span></p>
                    <p>Hours: <span>8:00 - 20:00, Mon - Sat</span></p>
                    <h5>Follow US</h5>
                    <i className='fa-brands fa-twitter'></i>
                    <i className='fa-brands fa-facebook'></i>
                    <i className='fa-brands fa-instagram'></i>
                    <i className='fa-brands fa-pinterest'></i>
                    <i className='fa-brands fa-youtube'></i>

                </section>
                <section className='about'>
                    <h5>About us</h5>
                    <Link>About us</Link>
                    <Link>Delivery information</Link>
                    <Link>Privacy policy</Link>
                    <Link>Terms and condition</Link>
                    <Link to='./contact'>Contact us</Link>


                </section>

                <section className='account'>
                    <h5>My Account</h5>
                    <Link onClick={() => loginWithRedirect()}>Sign In</Link>
                    <Link>View Cart</Link>
                    <Link>My Wish List</Link>
                    <Link>Track My Order</Link>
                    <Link>Help</Link>

                </section>
                <section className='apps'>
                    <h5>Install App</h5>
                    <p>From App Store or Google Play</p>

                    <div className='playstore'>
                        <div className='store'>

                            <a href="https://www.apple.com/store" target={'_blank'} rel='noreferrer'><img className='sto' src={apple} alt="" /></a>
                        </div>
                        <div className='store'>

                            <a href="https://play.google.com/store" target={'_blank'} rel='noreferrer'><img className='sto' src={google} alt="" /></a>
                        </div>
                    </div>
                    
                    <p>Secured Payment Gateways</p>

                    <div className='gateway'>
                       
                        <div className='logo'>
                            <img src={flutter} alt="" />
                        </div>
                        <div className='logo'>
                            <img src={visa} alt="" />
                        </div>
                        <div className='logo'>
                            <img src={master} alt="" /> 
                        </div>
        
                    </div>

                </section>

            </div>
            <div className='copyright'>
                <h5> Saint's Coutour. © 2022. Built by SaintShegs with <span>React.js</span></h5>
            </div>
        </div>
    </footer>
  )
}

export default Footer