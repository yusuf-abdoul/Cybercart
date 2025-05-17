import { useState } from 'react'
import { useCart } from '../context/CartContext'

const CouponInput = () => {
  const [couponCode, setCouponCode] = useState('')
  const { applyCoupon, couponMessage } = useCart()

  const handleSubmit = (e) => {
    e.preventDefault()
    applyCoupon(couponCode)
  }

  return (
    <div className="mt-4">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          placeholder="Enter coupon code"
          className="flex-1 px-3 py-2 border rounded"
        />
        <button 
          type="submit" 
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors"
        >
          Apply
        </button>
      </form>
      {couponMessage && (
        <p className={`mt-2 text-sm ${couponMessage.includes('Invalid') ? 'text-red-500' : 'text-green-500'}`}>
          {couponMessage}
        </p>
      )}
    </div>
  )
}

export default CouponInput