import React from 'react';
import { useContext } from 'react';
import { DropContext } from '../../contexts/Drop.down.context';
import CheckoutItem from '../checkoutItem/CheckoutItem';
import "./checkout.styles.scss"

import { UserContext } from '../../contexts/user.context';
import PayButton from '../payButton/PayButton';


const Checkout = () => {
 const { cartItems, cartTotal } = useContext(DropContext);
const { currentUser } = useContext(UserContext); // <-- Access logged-in user


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
      <div className='total'>TOTAL: ${cartTotal}
   {currentUser ? (
  cartItems.length > 0 ? (
    <PayButton
      email={currentUser.email}
      amount={cartTotal}
      cartItems={cartItems}
    />
  ) : (
    <p style={{ color: 'red' }}>You haven't selected anything.</p>
  )
) : (
  <p style={{ color: 'red' }}>Please login to proceed with payment.</p>
)}



      </div>

    </div>
  );
};

export default Checkout;
