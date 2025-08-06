import React from 'react'
import './cart-icon.style.scss'
import { useContext } from 'react'
import { DropContext } from '../../contexts/Drop.down.context'
import {ReactComponent as Shoppingbag} from '../../assets/shoppingbag.svg'
const CartIconComponent =()=>{

  const {show,setShow, cartCount,setCartCount} = useContext(DropContext) ;

const increaseCount = ()=>{
  setCartCount(cartCount)
}

// const totalCartNumber =()=>{
//   setCartTotal(cartTotal)
// }
const toggleFunction =()=>{
setShow(!show)

}
return(
<div onClick={toggleFunction} className='cart-icon-container'>
    <Shoppingbag className='shopping-icon'/>
    <span onClick={increaseCount} className='item-count'>{cartCount}</span>
</div>

)

}

export default CartIconComponent;