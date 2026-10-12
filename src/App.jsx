
import { useState } from "react"

import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import ProductList from "./components/ProductList"
import Footer from "./components/Footer"

export default function App() {
  const [cart, setCart] = useState([])

  function addToCart(product) {
    setCart((currentCart) => [...currentCart, product])
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar cartCount={cart.length} />

      <main>
        <Banner />

        <div className="mx-auto max-w-7xl px-5 pt-8">
          <p className="text-sm text-slate-600" aria-live="polite">
            {cart.length === 0
              ? "Tu carrito está vacío. ¡Explora nuestros productos!"
              : `Tienes ${cart.length} ${
                  cart.length === 1 ? "producto" : "productos"
                } en tu carrito.`}
          </p>
        </div>

        <ProductList onAdd={addToCart} />
      </main>

      <Footer />
    </div>
  )
}
