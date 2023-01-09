import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../Components/CartItem'
import './Cart.css'

const Cart = () => {

  const cart = useSelector((state) => state.cart.data)
  const [totalItems , setTotalItems] = useState(0);
  const [totalPrice , setTotalPrice] = useState(0)

  useEffect(()=>{
    const amount=()=>{
      let amt = 0;
      cart.forEach(element => {
        amt = amt + element.quantity * element.price
      });
      setTotalPrice(amt)
    }

    const items=()=>{
      let itm = 0;
      cart.forEach(element => {
        itm +=  element.quantity
      });
      setTotalItems(itm)
    }

    amount();
    items()
  },[cart])

  return (
    <div className="container">
      <div className="cart-Container">
        {
          cart.map((item ,idx)=>(
            <CartItem key={idx} item={item}/>
          ))
        }
      </div>
      <div className="check-out">
        <h1>Cart Summary</h1>
        <div className='info'>
        <div className="total-items">
          <h3>Total Items : </h3>
          <h4>{totalItems}</h4>
        </div>
        <div className="total-price">
          <h3>Total Price : </h3>
          <h4>${totalPrice}</h4>
        </div>
        <button>Check Out</button>
        </div>
      </div>
    </div>
  )
}

export default Cart