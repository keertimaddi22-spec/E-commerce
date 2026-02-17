import { useEffect, useState } from "react";

function Home({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="products-container">
      {loading && <h2>Loading products...</h2>}

      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.title} />

          <div className="product-info">
            <h3>{product.title.slice(0, 25)}...</h3>
            <p>$ {product.price}</p>

            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
