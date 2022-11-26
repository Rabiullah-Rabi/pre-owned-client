import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "../PaymentForm/PaymentForm";
const stripePromise = loadStripe(process.env.REACT_APP_stripeKey);
console.log(stripePromise);

const PaymentModal = ({ product }) => {
  const { product_name, resell_Price } = product;
//   console.log(product);
  return (
    <div>
      <input type="checkbox" id="PaymentModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            You are going to pay{resell_Price} for {product_name} 
          </h3>
          <Elements stripe={stripePromise}>
            <PaymentForm product={product}></PaymentForm>
          </Elements>
          <div className="modal-action">
            <label htmlFor="PaymentModal" className="btn">
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
