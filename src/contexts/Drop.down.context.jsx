
import { createContext, useEffect, useState } from "react";


// function to find inside existing array
const addCartItem = (cartItems, productToAdd) => {
    // find if currentItems contains product to add
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id

    )

    // if found, increment quqntity
    if (existingCartItem) {
        return cartItems.map((cartItem => cartItem.id === productToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem

        ))


    }

    // return new array with modified cartItems/ new cart
    return [...cartItems, { ...productToAdd, quantity: 1 }]
}




const removeCartItems = (cartItems, cartItemToRemove) => {
  // find the cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  // check if quantity is equal to 1, if it is remove that item from the cart
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  // return back cartitems with matching cart item with reduced quantity
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);









export const DropContext = createContext({

    show: false,
    setShow: () => { },
    cartItems: [],
    addItemToCart: () => { },
    removeCartFromItems: () => {},
  clearItemFromCart: () => {},
    cartCount: 0,
    cartTotal: 0,
}

)




const cartReducer =(state,action ) =>{
const {type, payload} = action


switch (type) {
    case 'SET_CART_ITEMS':
        return{
            ...state,
            ...payload
        }
      

    default:
        throw new Error(`unhandled type of ${type}`in cartReducer)
}

}


export const DropProv = ({ children }) => {

    const [show, setShow] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [cartTotal, setCartTotal] = useState(0)




 useEffect(() => {
  const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
  setCartCount(newCartCount);
}, [cartItems]);


    useEffect(() => {
        const newCartTotal = cartItems.reduce(

            (total, cartItem) => total + cartItem.quantity * cartItem.price, 0);
                
                setCartTotal(newCartTotal) 
            },[cartItems]


        )
    
// const updateCartItemsReducer =(newCartItems)=>{


// }


    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }


    
  const removeItemToCart = (cartItemToRemove) => {
    setCartItems(removeCartItems (cartItems, cartItemToRemove));
  };

  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  };

    
    const value = { show, setShow, addItemToCart,removeItemToCart,
    clearItemFromCart, cartItems ,cartCount, setCartCount, setCartTotal,
    cartTotal}
    return (
        <DropContext.Provider value={value}>{children}</DropContext.Provider>

    )

}

