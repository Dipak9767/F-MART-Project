
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { add, remove } from '../store/CartSlice'
import './Product.css'

const Product = ({ product }) => {

  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart.data)

  let flag = false;
  cart.forEach(element => {
    if (element.id === product.id) {
      flag = true

    }
  })

  const addHandler = (item) => {
    if (flag) {
      dispatch(remove(item))
    }
    else {
      const newItem = { ...item, quantity: 1 };
      dispatch(add(newItem))
    }
  }

  return (
    
    <div className="product">
    <Link to={`product/${product.id}`}></Link>
      <img src={product.images[0]} alt="" />
      <h3 >{product.title}</h3>
      <span>${product.price}</span>
      <button onClick={() => addHandler(product)} className={flag ? 'deactive' : 'active'}>
        {
          flag ? 'remove' : 'Add To Cart'
        }
      </button>

    </div>
  )
}

export default Product