import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

const ProductPage = () => {
    const {id} = useParams()
    const products = useSelector((state)=>state.products.products);
    const product = products.filter((item)=> item.id.toString() === id.toString())
  return (
    <div>{product[0].title}</div>
  )
}

export default ProductPage