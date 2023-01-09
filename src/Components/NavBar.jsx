import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './NavBar.css'
import { useSelector } from 'react-redux'
import logo from '../Images/logo.png'
const NavBar = () => {

    const { data } = useSelector((state) => state.cart)
    return (
        <nav className='navbar'>
            <Link to={'/'}>
                <img src={logo} alt="" />
            </Link>
            <Link to={'/'}> <h1>
                F-MART</h1>
            </Link>

            <Link to={'/cart'}>
                <div className="cartBar">
                    <FontAwesomeIcon icon={faShoppingCart} className='cart-icon' />
                    <span className='count'>{data.length}</span>
                </div>
            </Link>
        </nav>
    )
}

export default NavBar