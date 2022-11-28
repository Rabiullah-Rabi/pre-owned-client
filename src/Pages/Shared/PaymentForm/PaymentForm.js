import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import PrimaryButton from "../../../Components/Button/PrimaryButton";
import { Navigate, useNavigate } from "react-router-dom";

const PaymentForm = ({ product }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const {
    product_id,
    resell_Price,
    seller_email,
    buyer_email,
    buyer_name,
    seller_id,
  } = product;
  const navigate = useNavigate();
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    const url = `${process.env.REACT_APP_SERVER}/create-payment-intent`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearar ${localStorage.getItem("pre-owned_token")}`,
      },
      body: JSON.stringify({ resell_Price }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
      });
  }, [resell_Price]);
  //handle submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || elements) {
      // return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, payment_method } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log(error);
      setCardError(error.message);
    } else {
      setCardError("");
    }
    setSuccess("");
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: buyer_name,
            email: buyer_email,
          },
        },
      });
    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      const payment = {
        transactionId: paymentIntent.id,
        product_id,
        resell_Price,
        seller_email,
        seller_id,
        buyer_email,
        paid: false,
      };
      const url = `${process.env.REACT_APP_SERVER}/payments`;
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `bearar ${localStorage.getItem("pre-owned_token")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            setSuccess(
              "Congrats! You have successfully completed your payment"
            );
            setTransactionId(paymentIntent.id);
          }
        });
      }
      setProcessing(false);
      navigate("/dashboard");
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="p-10 w-80">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          disabled={!stripe || !clientSecret || processing}
          className="btn bg-primary btn-small mt-5"
        >
          Pay
        </button>
      </form>
      <p className="mt-5 text-red-500">{cardError}</p>
      {success && (
        <div>
          <p className="text-green-500">{success}</p>
          <p className="">Your transection Id is :{transactionId}</p>
        </div>
      )}
    </>
  );
};

export default PaymentForm;
