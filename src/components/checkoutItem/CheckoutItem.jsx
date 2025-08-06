import './checkoutItem.styles.scss';
import { useContext } from "react"
import { DropContext } from "../../contexts/Drop.down.context"


const CheckoutItem = ({cartItem}) => {
   const { name, imageUrl, price, quantity } = cartItem;
   
   const { clearItemFromCart, addItemToCart, removeItemToCart } = useContext(DropContext);
  if (!cartItem) {
    console.error("CheckoutItem received undefined cartItem");
    return null; // Prevent render
  }

 

 

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemToCart(cartItem);

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={removeItemHandler}>&#10094;</div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={addItemHandler}>&#10095;</div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={clearItemHandler}>&#10005;</div>
    </div>
  );
};


export default CheckoutItem;