import axios from "axios";
import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const KEY =
  "pk_test_51L8LzmG1pBKKjQrw1yvdCY1YJcHaH8p15QpMZSp4FnO4qIcITsuiPVjZQ45p4RuuuEaJu6p0ApkOl9SflbY1B0pU00isRWQ9g6";

const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const history = useHistory();

  // const onToken = (token) => {
  //   setStripeToken(token);
  // };
  // useEffect(() => {
  //     const makeReqest = async () =>{
  //         try{
  //           const res = axios.post("http://localhost:5000/api/checkout/payment",{
  //               tokenId:stripeToken.id,
  //               amount:2000
  //           })
  //           console.log(res)
  //         }catch(err){
  //             console.log(err)
  //         }
  //     }

  //     makeReqest();
  // }, stripeToken);

  const paySSl = () => {
   
      try {
        const res = axios.post("http://localhost:5000/api/Payment/sslPay", {
          //tokenId:stripeToken.id,
          amount: 2000,
        });
        res.then((res) =>{
          console.log(res.data)
          const win = window.open(res.data, "_blank");
          //win.focus();
        })
        
      } catch (err) {
        console.log(err);
      }
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <StripeCheckout
        name="Al Manahil Foundation"
        image="https://i.ibb.co/bF7GDCc/amwfb-logo.png"
        billingAddress
        shippingAddress
        description="some thing"
        amount={2000}
        token={onToken}
        stripeKey={KEY}
      >
        <button>Pay</button>
      </StripeCheckout> */}
      <button onClick={paySSl}>Pay SSL</button>
    </div>
  );
};

export default Pay;
