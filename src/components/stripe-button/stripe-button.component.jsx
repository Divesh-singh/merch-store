import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51GyMIiGhQjOsTon4UKjUr7sqvRWa384ZfxFxRV6k8adjvbaE1pEHucSTc0HnvJtCucbZlhXHQK4Azivp9oW5blJs00DZFNKa4q';

    const onToken = token => {
        console.log(token);
        alert('Payment Sucessful');
    }


    return (
        <StripeCheckout 
        label='Pay Now'
        name='CRWN Clothing'
        billingAddress
        shippingAddress
        image=''
        description={`Your total is $${price}`}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton