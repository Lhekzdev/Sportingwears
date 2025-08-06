import { useContext } from 'react';
import { DropContext } from '../../contexts/Drop.down.context';
import { useNavigate } from 'react-router-dom';

import CartItem from '../cart-item/Cart-item-component';
import './cart-dropping.scss';
import Button from '../button/Button';
import CheckoutItem from '../checkoutItem/CheckoutItem';
import Checkout from '../checkout/Checkout';

const Cartdropdown = () => {
  const navigate = useNavigate();
  const { cartItems } = useContext(DropContext);

const goToCheckout = () => {
  if (cartItems.length >= 1) {
    navigate("/checkout");
  } else {
    alert ( "Cart is empty")
  }
};


  // ✅ Valid location for console.log
  console.log("CART ITEMS:", cartItems);

return (



    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
      <Button onClick={goToCheckout}>GO TO CHECKOUT</Button>
    </div>
  );
};
  //   <div className='cart-dropdown-container'>
  //     <div className='cart-items'>
  //       {cartItems.map((item) => (
  //         <CartItem key={item.id} cartItem={item} />
  //       ))}
  //     </div>
  //     <Button onClick={goToCheckout}>GO TO CHECKOUT</Button>
  //   </div>
  // );






export default Cartdropdown;
