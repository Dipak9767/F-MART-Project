import React from 'react'
import Banner from '../Components/Banner'
import CategoriesBar from '../Components/CategoriesBar'
import Products from '../Components/Products'
import './Home.css'
const Home = () => {
  return (
    <section>
      <Banner/>
        <h3 className='heading'>Products</h3>
      <CategoriesBar/>
        <Products/>
    </section>
  )
}

export default Home