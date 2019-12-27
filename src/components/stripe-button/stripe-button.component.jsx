import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = price =>{

    const priceInCents = price*100;
    const publishableK ='pk_test_5zczuvHKxs1Ih3uo07klafvO00rfzmKNuh';
const onToken =token=>{
    console.log(token);
    alert('Payment Successful')
    
}
    return (
      <StripeCheckout
        label="Pay Now"
        name="Crown Clothing pvt ltd"
        billingAddress
        shippingAddress
        image="https://sendeyo.com/up/d/f3eb2117da"
        description={`Your Total is $${price}`}
        amount = {priceInCents}
        panelLabel='Pay Now'
        token = {onToken}
stripeKey = {publishableK}
        />
    );
}

export default StripeCheckoutButton;