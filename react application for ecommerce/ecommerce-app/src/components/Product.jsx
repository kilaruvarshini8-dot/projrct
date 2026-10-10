const products = [
  { id: 1, name: "T-Shirt", price: 599 },
  { id: 2, name: "Shoes", price: 1299 },
  { id: 3, name: "Watch", price: 999 },
  { id: 4, name: "Bag", price: 799 }
];

function Products() {
  return (
    <div className="page-box">
      <h1>Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <h2>{product.name}</h2>
            <p>₹{product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Products;