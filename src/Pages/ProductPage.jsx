import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { add, remove } from '../store/CartSlice';
import './ProductPage.css'
const ProductPage = () => {
  const { id } = useParams()
  const products = useSelector((state) => state.products.products);
  const product = products.filter((item) => item.id.toString() === id.toString())
  
  const [imgURL, setImgURL] = useState( product[0].images[0])

  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart.data)

  let flag = false;
  cart.forEach(element => {
    if (element.id === product[0].id) {
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
    <div className="container">
      <div className="img-container">
        <div className="img-list">
          {
            product[0].images.map((Img,idx)=>(
              <img key={idx} src={Img} alt="" onClick={()=> setImgURL(Img)}/>
            ))
          }
        </div>
        <img  src={imgURL} className='main-img' alt="" />
      </div>
      <div className="info-container">
        <div className="title">
          <h1>{product[0].title}</h1>
        </div>
        <div className="desc">
          <p>Lorem ipsum dolor Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis architecto quos fugiat aperiam error doloremque numquam q
            uasi eveniet consequatur ipsa? sit amet consectetur adipisicing elit. Dolorem est ab sed expedita veritatis fugit quas amet. Culpa corporis cum quisquam sint dolore esse?
          </p>
        </div>
        <span className="price">${product[0].price}</span>
        <button onClick={() => addHandler(product[0])} className={flag ? 'deactive' : 'active'}>
        {
          flag ? 'remove' : 'Add To Cart'
        }
      </button>
      </div>
    </div>
  )
}

export default ProductPage