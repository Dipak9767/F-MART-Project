import React from 'react'
import { useDispatch } from 'react-redux'
import { increment ,decrement , remove} from '../store/CartSlice'
import './CartItem.css'


const CartItem = ({item}) => {

  const dispatch = useDispatch();


  return (
    <div className="item-Container">
      <img src=
      {item.images[0]} alt="" />
      <div className="info">
        <h2>{item.title}</h2>
        <span>{item.price}</span>
        <button className='btn' onClick={()=>dispatch(remove(item))}>remove</button>
      </div>
      <div className="quantity">
        <button className='btn'onClick={()=> dispatch(decrement(item.id))}>-</button>
        <span>{item.quantity}</span>
        <button className='btn'onClick={()=> dispatch(increment(item.id))}>+</button>
      </div>
    </div>
  )
}

export default CartItem