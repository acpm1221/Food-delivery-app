import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContent";


const Cart = () => {
  
  const { food_list, removeToCart, cartItem, getTotalAmount } = useContext(StoreContext);
  const deliveryFee = 80; // Assuming a delivery fee of ₹80
  
  

  // Calculate subtotal
  const subtotal = food_list.reduce((acc, item) => {
    if (cartItem[item._id] > 0) {
      return acc + item.price * cartItem[item._id];
    } else {
      return acc;
    }
  }, 0);

  // Calculate total including delivery fee only if there are items in the cart
  const total = subtotal > 0 ? subtotal + deliveryFee : 0;

  const handleMakePayment = () => {
    // Redirect to PlaceOrder page when Make Payment button is clicked
    window.location.href = "/Order";
  };

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-item-title">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItem[item._id] > 0) {
            return (
              <div key={item._id}>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt=""></img>
                  <p>{item.name}</p>
                  <p>₹ {item.price}</p>
                  <p>{cartItem[item._id]}</p>
                  <p>₹ {item.price * cartItem[item._id]}</p>
                  <button onClick={() => removeToCart(item._id)}>X</button>
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
      {total > 0 && ( // Render the summary only if there are items in the cart
        <div className="cart-summary">
          <p>Subtotal: ₹{getTotalAmount()}</p>
          <p>Delivery Fee: ₹{deliveryFee}</p>
          <p>Total: ₹{getTotalAmount() + 80}</p>
          <button onClick={handleMakePayment}>Make Payment</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
