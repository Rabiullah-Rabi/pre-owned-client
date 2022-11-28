import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import PaymentForm from "../../../Shared/PaymentForm/PaymentForm";

const Payment = () => {
  const stripePromise = loadStripe(process.env.REACT_APP_stripeKey);
  const product = useLoaderData();
    const { product_name, resell_Price } = product;
  return (
    <div>
      <h3 className="font-bold text-lg">
        You are going to pay $ {resell_Price} for {product_name}
      </h3>
      <Elements stripe={stripePromise}>
        <PaymentForm product={product}></PaymentForm>
      </Elements>
    </div>
  );
};

export default Payment;
