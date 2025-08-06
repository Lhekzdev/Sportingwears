// import SHOP_DATA from '../../../shop-data.json'
import { useContext } from 'react'
import { UsershopContext } from '../../../contexts/Cart.context';
import ProductCard from '../../products-card/product-card.comp';
import  './shop.styles.scss'

const Shop = () => {
const {tests}= useContext(UsershopContext);

    return (
        < div className='products-container'>
            {tests.map((products) => (

                
                <ProductCard  key={products.id} product={products}/>

                ))}

        </div>
    )

}

export default Shop