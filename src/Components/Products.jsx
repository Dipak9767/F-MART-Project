
import './Products.css'
import Product from './Product';
import { useSelector } from 'react-redux';

const Products = () => {
   
    const products = useSelector((state)=>state.products.products);

    return (
        <div className='products'>
            {
            products.map((product, idx) => (
                <Product key={idx} product={product} />
            ))}
            
        </div>
    )
}

export default Products