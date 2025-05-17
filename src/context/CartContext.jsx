import { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart')
    return savedCart ? JSON.parse(savedCart) : []
  })
  const [coupon, setCoupon] = useState('')
  const [discount, setDiscount] = useState(0)
  const [couponMessage, setCouponMessage] = useState('')

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id)
      return existingItem
        ? prevCart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...prevCart, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId))
  }

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      setCouponMessage('Quantity must be at least 1')
      return
    }
    
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const applyCoupon = (code) => {
    if (code === 'WEB3BRIDGECOHORTx') {
      setDiscount(0.1)
      setCouponMessage('Coupon applied! 10% discount')
      setCoupon(code)
      return true
    }
    
    setCouponMessage('Invalid coupon code. Try "WEB3BRIDGECOHORTx"')
    return false
  }

  const clearCart = () => {
    setCart([])
    setCoupon('')
    setDiscount(0)
    setCouponMessage('')
  }

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const total = subtotal * (1 - discount)

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        coupon,
        applyCoupon,
        couponMessage,
        subtotal,
        discount,
        total,
        clearCart,
        cartItemCount: cart.reduce((count, item) => count + item.quantity, 0)
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)