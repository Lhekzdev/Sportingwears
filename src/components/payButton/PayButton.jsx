import React from "react";
import { PaystackButton } from "react-paystack";

const PayButton =({ email, amount, cartItems })=>{
    
     const publicKey = process.env.REACT_APP_PAYSTACK_PUBLIC_KEY;
    
  const metadata = {
    cart: cartItems,
    custom_fields: [
      {
        display_name: "Customer Email",
        variable_name: "email",
        value: email,
      },
    ],
  };


  const componentProps = {
    email,
    amount: amount * 100, // Convert Naira to Kobo
    metadata,
    publicKey,
    text: "Pay Now",
    onSuccess: () => alert("Payment Successful!"),
    onClose: () => alert("Payment Cancelled."),
  };



    return(
        <div>

<PaystackButton  {...componentProps} />;
        </div>
    )
}

export default PayButton;