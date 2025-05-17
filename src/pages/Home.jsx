import ProductCard from '../components/ProductCard'
import Cart from '../components/Cart'
import CouponInput from '../components/CouponInput'
import { Link } from 'react-router'
import { useCart } from '../context/CartContext'

const Home = () => {
  const { addToCart, cart, clearCart } = useCart()

  // Sample product data
  const products = [
    { id: 1, name: 'Laptop', price: 999.99, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Smartphone', price: 699.99, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Headphones', price: 199.99, image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Keyboard', price: 99.99, image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Mouse', price: 49.99, image: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Monitor', price: 249.99, image: 'https://via.placeholder.com/150' },
    { id: 7, name: 'Tablet', price: 349.99, image: 'https://via.placeholder.com/150' },
    { id: 8, name: 'Smartwatch', price: 199.99, image: 'https://via.placeholder.com/150' },
    { id: 9, name: 'Camera', price: 599.99, image: 'https://via.placeholder.com/150' },
    { id: 10, name: 'Speaker', price: 129.99, image: 'https://via.placeholder.com/150' }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Welcome to our Shop</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        </div>
        
        <div className="lg:w-1/4">
          <Cart />
          
          <CouponInput />
          
          {cart.length > 0 && (
            <div className="flex flex-col gap-2 mt-4">
              <button 
                onClick={clearCart} 
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded transition-colors"
              >
                Clear Cart
              </button>
              <Link 
                to="/checkout" 
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded text-center transition-colors"
              >
                Proceed to Checkout
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home