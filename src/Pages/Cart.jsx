import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, setCart }) => {
  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decreaseQty = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0), 
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  if (!cart || cart.length === 0) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h2>Your Cart is Empty 🛒</h2>
        <Link
          to="/"
          style={{
            color: "#007bff",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Go Shopping
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "40px" }}>
      <h2>Shopping Cart</h2>

      {cart.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            border: "1px solid #ddd",
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "10px",
            gap: "15px",
            background: "#fafafa",
          }}
        >
          {/* Product Image */}
          <div style={{ flexShrink: 0 }}>
            <img
              src={item.image || "https://via.placeholder.com/80"}
              alt={item.title}
              style={{
                width: "80px",
                height: "80px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          </div>

          {/* Title & Price */}
          <div style={{ flex: 2 }}>
            <h4 style={{ margin: "0 0 5px 0" }}>{item.title}</h4>
            <p style={{ margin: 0 }}>₹{item.price}</p>
          </div>

          {/* Quantity Controls */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              flex: 1,
            }}
          >
            <button onClick={() => decreaseQty(item.id)}>-</button>

            <span style={{ minWidth: "20px", textAlign: "center" }}>
              {item.quantity}
            </span>
            <button onClick={() => increaseQty(item.id)}>+</button>
          </div>

          {/* Remove Button */}
          <button
            onClick={() => removeItem(item.id)}
            style={{
              background: "red",
              color: "white",
              border: "none",
              padding: "6px 12px",
              borderRadius: "5px",
              cursor: "pointer",
              flexShrink: 0,
            }}
          >
            Remove
          </button>
        </div>
      ))}

      <hr />

      <div style={{ textAlign: "right" }}>
        <h3>Total Items: {totalItems}</h3>
        <h2>Total Price: ₹{totalPrice.toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default Cart;
