import { useContext } from 'react';
import { DropContext } from '../../contexts/Drop.down.context';
import CheckoutItem from '../checkoutItem/CheckoutItem';
import "./checkout.styles.scss"
const Checkout = () => {
 const { cartItems, cartTotal } = useContext(DropContext);



  return (
    <div className='checkout-container '>
      <div className='checkout-header'>
        <div className='header-block'>
          <span className=''>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className='total'>TOTAL: ${cartTotal}</div>
    </div>
  );
};

export default Checkout;
