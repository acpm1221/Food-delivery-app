import React, { useState } from 'react';
import "./PlaceOrder.css";

const PlaceOrder = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [upiId, setUpiId] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);

  const handlePayment = () => {
    // Perform payment processing here (e.g., send data to backend, validate payment)
    // For demonstration purposes, let's assume payment is successful after a delay
    setTimeout(() => {
      setPaymentSuccess(true);
      // Simulated order details
      const dummyOrderDetails = {
        orderId: "123456",
        items: ["Item 1", "Item 2", "Item 3"]
      };
      setOrderDetails(dummyOrderDetails);
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    handlePayment(); // Call function to simulate payment
  };

  return (
    <div className="place-order-container">
      {!paymentSuccess ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          ></textarea>

          <label htmlFor="phone">Phone No.:</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <label>Payment Method:</label>
          <div>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="card"
                checked={paymentMethod === 'card'}
                onChange={() => setPaymentMethod('card')}
              />
              Card Payment
            </label>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="upi"
                checked={paymentMethod === 'upi'}
                onChange={() => setPaymentMethod('upi')}
              />
              UPI
            </label>
          </div>

          {paymentMethod === 'card' && (
            <>
              <label htmlFor="cardNumber">Card Number:</label>
              <input
                type="text"
                id="cardNumber"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required
              />

              <label htmlFor="expiryDate">Expiry Date:</label>
              <input
                type="text"
                id="expiryDate"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                required
              />

              <label htmlFor="cvv">CVV:</label>
              <input
                type="text"
                id="cvv"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                required
              />
            </>
          )}

          {paymentMethod === 'upi' && (
            <>
              <label htmlFor="upiId">UPI ID:</label>
              <input
                type="text"
                id="upiId"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                required
              />
            </>
          )}

          <button type="submit">Complete Payment</button>
        </form>
      ) : (
        <div className="payment-success-message">
          <p>Order Placed...😋 <br/> Your Order Will Arrive in 30 Minutes  </p>
          {orderDetails && (
            <div className="order-details">
              <h2>Order Details</h2>
              <p><strong>Order ID:</strong> {orderDetails.orderId}</p>
              
              
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PlaceOrder;
