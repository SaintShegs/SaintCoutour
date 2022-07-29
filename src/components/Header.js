import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Cart from './Cart'
import { togglecart } from '../features/cartSlice'

import { useAuth0} from '@auth0/auth0-react';





const Header = () => {

    function toggleMenu() {
        document.querySelector('.profile__menu-drop').classList.toggle('is-active');
    }

    function openmenu(){
        document.querySelector('.header__menu-control').classList.toggle('open');
    }


   
    
    const { user, isAuthenticated, /*isLoading*/ } = useAuth0();
    
    const { loginWithRedirect } = useAuth0();
    
    const { logout } = useAuth0();
    const dispatch=useDispatch()
    const { numberofitems , isEmpty, isOpen } = useSelector(state => state.cart)


  return (
    <header>
        <div className='header__title'>
            <Link to='/'><h4>Saint's Coutour</h4></Link>

        </div>

            <div className='header__menu'>
                <div className='header__menu-control open'>
                    <ul className='header__nav'>
                        <li className='header__nav-item'>
                            <Link to='./about'>About</Link>
                        </li>
                        <li className='header__nav-item'>
                            <Link to='./shop'>Shop</Link>
                        </li>
                        <li className='header__nav-item'>
                            <Link to='./contact'>Contact</Link>
                        </li>
                    </ul>
                </div>

                <div className='cart__section'>
                    <div className='cart-container'>
                            <i className="fa-solid fa-cart-shopping" onClick={()=>{dispatch(togglecart())}}></i>
                                {!isEmpty && 
                            <div className='amount-container' onClick={()=>{dispatch(togglecart())}}>
                                <p className='total-amount'>{numberofitems}</p>
                            </div>
                                }

                                {isOpen && 
                            <div className='cart__details'>
                                <Cart/>            
                            </div>
                                }
                    </div>
                    <div className='profile__section'>
                        {isAuthenticated ? (
                            <div className='profile'>
                                <h5 className='profile__name'>Welcome: {user.name}</h5>

                                <div className='profile__menu'>

                                <img onClick={toggleMenu} className='profile__picture' src={user.picture} alt=""/>
                                    <div className='profile__menu-drop is-active' >
                                        <ul className='profile__menu-list'>
                                          
                                                <Link className='profile__menu-item' to='/profile'>Profile</Link>
                                            
                                         
                                                <Link className='profile__menu-item' to='/orders'>Orders</Link>
                                    
                                                <Link className='profile__menu-item' to='/' onClick={()=>logout()}>Logout</Link>
                                          
                                        </ul>
                                        {/* <button className='login__button' onClick={() => logout()}>
                                            Logout
                                        </button> */}
                                    </div>
                                </div>

                                
                            {/* </img> */}

                            </div>

                            
                        ) : (
                        <button onClick={() => loginWithRedirect()} className='login__button'>Login</button>
                            
                        )}
                    </div>
                    <div class="nav-toggler" onClick={openmenu}>
                        <span></span>
                    </div>
                </div>
            </div>
    </header>
  )
}

export default Header