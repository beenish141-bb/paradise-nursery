import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";

const products = [
  {
    id: 1,
    name: "Snake Plant",
    price: 25,
    category: "Air Purifying",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee"
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 30,
    category: "Air Purifying",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee"
  },
  {
    id: 3,
    name: "Spider Plant",
    price: 20,
    category: "Air Purifying",
    image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333"
  },
  {
    id: 4,
    name: "Aloe Vera",
    price: 18,
    category: "Air Purifying",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09"
  },
  {
    id: 5,
    name: "Rubber Plant",
    price: 35,
    category: "Air Purifying",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09"
  },
  {
    id: 6,
    name: "Boston Fern",
    price: 28,
    category: "Air Purifying",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee"
  },

  {
    id: 7,
    name: "Rose",
    price: 22,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946"
  },
  {
    id: 8,
    name: "Orchid",
    price: 40,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd"
  },
  {
    id: 9,
    name: "Anthurium",
    price: 32,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1455587734955-081b22074882"
  },
  {
    id: 10,
    name: "African Violet",
    price: 24,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e"
  },
  {
    id: 11,
    name: "Begonia",
    price: 27,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946"
  },
  {
    id: 12,
    name: "Jasmine",
    price: 29,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e"
  },

  {
    id: 13,
    name: "ZZ Plant",
    price: 26,
    category: "Low Maintenance",
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b"
  },
  {
    id: 14,
    name: "Pothos",
    price: 21,
    category: "Low Maintenance",
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b"
  },
  {
    id: 15,
    name: "Chinese Evergreen",
    price: 31,
    category: "Low Maintenance",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
  },
  {
    id: 16,
    name: "Cast Iron Plant",
    price: 34,
    category: "Low Maintenance",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
  },
  {
    id: 17,
    name: "Lucky Bamboo",
    price: 19,
    category: "Low Maintenance",
    image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e"
  },
  {
    id: 18,
    name: "Dracaena",
    price: 36,
    category: "Low Maintenance",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee"
  }
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    state => state.cart.items
  );

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const categories = [
    "Air Purifying",
    "Flowering Plants",
    "Low Maintenance"
  ];

  const isInCart = (id) => {
    return cartItems.some(item => item.id === id);
  };

  return (
    <div className="products-container">

      <h1>Houseplants</h1>

      <p className="cart-count">
        Cart Items: {cartCount}
      </p>

      {categories.map(category => {

        const categoryProducts = products.filter(
          product => product.category === category
        );

        return (
          <section
            className="category"
            key={category}
          >
            <h2>{category}</h2>

            <div className="product-grid">

              {categoryProducts.map(product => (

                <div
                  className="product-card"
                  key={product.id}
                >

                  <img
                    src={product.image}
                    alt={product.name}
                  />

                  <h3>{product.name}</h3>

                  <p>
                    ${product.price}
                  </p>

                  <button
                    disabled={isInCart(product.id)}
                    onClick={() =>
                      dispatch(addToCart(product))
                    }
                  >
                    {isInCart(product.id)
                      ? "Added"
                      : "Add to Cart"}
                  </button>

                </div>

              ))}

            </div>
          </section>
        );
      })}

    </div>
  );
}

export default ProductList;
