import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51JDSL0SDojYKevPolY02BWnuL7XWnf1SkQXFAiyUqSTAxzu5HVJdfgLZLxxmXwN3RHeFPUvDG2mXfJrUqcMb1AUC00vjeEExzB"

    const onToken = token => {
        console.log(token);
        alert('Payment Sucessful');
    }

    return(
        <StripeCheckout
        label='Pay Now'
        name='CRWN CLOTHING Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel= 'Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton