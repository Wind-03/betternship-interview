/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

export default function App() {
  const discountCode = "SAVE10";
  const [discount, setDiscount] = useState("");
  const [cart, setCart] = useState<Product[]>([]);

  const defaultProducts: Product[] = [
    { id: 1, name: "Notebook", quantity: 1, price: 10 },
    { id: 2, name: "Pen", quantity: 1, price: 5 },
    { id: 3, name: "Backpack", quantity: 1, price: 30 },
  ];

  const [products, setProducts] = useState<Product[]>(defaultProducts);

  function addToCart(product: Product) {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      setCart((prev) =>
        prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart((prev) => [...prev, { ...product }]);
    }
  }

  function incrementQuantity(id: number) {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function applyDiscount() {
    if (discount === discountCode) {
      alert("Discount applied!");
    } else {
      alert("Invalid code");
    }
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const finalTotal = discount === discountCode ? total * 0.9 : total;

  return (
    <div>
      <h1>Products</h1>
      {products.map((product) => (
        <div key={product.id}>
          <p>
            {product.name}  
          </p>
          <p>${product.price}</p>
          <p>{product.quantity}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
          <button onClick={() => incrementQuantity(product.id)}>
            Increment Quantity
          </button>
        </div>
      ))}

      <h1>Cart</h1>
      {cart.length === 0 && <p>No items in cart</p>}
      {cart.map((item) => (
        <div key={item.id}>
          <p>
            {item.name} - {item.quantity} × ${item.price} = $
            {item.price * item.quantity}
          </p>
        </div>
      ))}

      <h2>Total: ${finalTotal.toFixed(2)}</h2>

      <input
        placeholder="Enter discount code"
        value={discount}
        onChange={(e) => setDiscount(e.target.value)}
      />
      <button onClick={applyDiscount}>Apply Code</button>
    </div>
  );
}
