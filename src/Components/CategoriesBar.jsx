import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { displayProducts } from '../store/ProductSlice';
import './CategoriesBar.css'

const CategoriesBar = () => {


    const products = useSelector((state) => state.products.data);
    const [cats , setCats] = useState([])
    const categories = []


        const setCategories=()=>{
            categories.push("All")
            products.forEach(element => {
                if (!categories.includes(element.category)) {
                    categories.push(element.category)
                }
            });
            setCats(categories)
        }

      
       useEffect(()=>{
        setCategories()
       })

    const dispatch = useDispatch();

    const filterHaldler=(cat)=>{
        if(cat ==="All"){
            dispatch(displayProducts(products))
        }else{
            const newProducts = products.filter((item)=> item.category === cat)
            dispatch(displayProducts(newProducts))
        }
    }
  
    return (
        <div className='cat-container'>
            {
                cats.map((cat, idx) => (
                    <h4 key={idx} onClick={()=>{filterHaldler(cat)}}>{cat.toUpperCase()}</h4>
                ))
            }
        </div>
    )
}

export default CategoriesBar