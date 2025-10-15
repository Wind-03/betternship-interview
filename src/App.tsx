/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


interface Products {
  id:number;
  name:string;
  quantity:number;
  price:number
}

function App() {
  const [cart, setCart] = useState<Products[]>([])
  
  const defaultProducts: Products[] =[
    {
      id:1,
      name: "Notebook",
      quantity:1,
      price:10,
    },
    {
      id:2,
      name: "Pen",
      quantity:1,
      price:10,
    },
    {
      id:3,
      name: "Backpack",
      quantity:1,
      price:10,
    },
  ]
  const [products, setProducts] = useState<Products[]>(defaultProducts)

  function addToCart(id:number){
    const updatedCart = [... cart]
    setCart((prev)=> [...prev, {id:, name, quantity, price}])
  }
  return(
    <div>
      <h1>View our products to Purchase from us</h1>

      <div>
        {products.map((product:Products)=>(
          <div key={product.id}>
            <div>
              <p>{product.name}</p>
              <p>{product.quantity}</p>
              <p>${product.price}</p>
              {/* <button onClick={addToCart(product.id)}>Increment Quantity</button> */}
              <button onClick={()=> product.quantity + 1}>Increment Quantity</button>
            </div>
          </div>
        ))}
        <h1>View your Cart Items</h1>

      </div>
    </div>
  )
}

export default App
