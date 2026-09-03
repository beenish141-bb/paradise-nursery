import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart
} from "../redux/CartSlice";
import { Link } from "react-router-dom";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    state => state.cart.items
  );

  const totalAmount = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="cart-container">

      <h1>Shopping Cart</h1>

      <h2>
        Total Items: {totalItems}
      </h2>

      {cartItems.length === 0 ? (

        <div>
          <p>Your cart is empty.</p>

          <Link to="/plants">
            <button className="continue-button">
              Continue Shopping
            </button>
          </Link>
        </div>

      ) : (

        <>

          {cartItems.map(item => {

            const itemTotal =
              item.price * item.quantity;

            return (
              <div
                className="cart-item"
                key={item.id}
              >

                <img
                  src={item.image}
                  alt={item.name}
                />

                <div>

                  <h3>{item.name}</h3>

                  <p>
                    Unit Price: ${item.price}
                  </p>

                  <p>
                    Quantity: {item.quantity}
                  </p>

                  <p>
                    Total: ${itemTotal}
                  </p>

                  <div className="quantity-buttons">

                    <button
                      onClick={() =>
                        dispatch(
                          decreaseQuantity(item.id)
                        )
                      }
                    >
                      -
                    </button>

                    <span>
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        dispatch(
                          increaseQuantity(item.id)
                        )
                      }
                    >
                      +
                    </button>

                  </div>

                  <button
                    onClick={() =>
                      dispatch(
                        removeFromCart(item.id)
                      )
                    }
                  >
                    Delete
                  </button>

                </div>

              </div>
            );
          })}

          <h2>
            Total Cart Amount: ${totalAmount}
          </h2>

          <button
            className="checkout-button"
            onClick={() =>
              alert("Coming Soon")
            }
          >
            Checkout
          </button>

          <Link to="/plants">
            <button className="continue-button">
              Continue Shopping
            </button>
          </Link>

        </>

      )}

    </div>
  );
}

export default CartItem;
