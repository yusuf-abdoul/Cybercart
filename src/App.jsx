import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Home from './pages/Home'
import Checkout from './pages/Checkout'
import { CartProvider } from './context/CartContext'

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </CartProvider>
  )
}

export default App