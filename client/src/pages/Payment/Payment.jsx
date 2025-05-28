import React from 'react'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';
const stripePromise = loadStripe('pk_test_51RTGF0R4tYiPiL5gfKsWKVhRRHZ8m2cALd5NJdwvAijE0zB1qOqXoUPhWhh6vXHUe3ZDgOYfwtVYKKD7GlfEx7Mn00NKCfs0Ge');
function Payment() {
  return (
    <>
      <Elements stripe={stripePromise}>
        <PaymentForm />
      </Elements>
    </>
  )
}

export default Payment
