const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="text-gray-600">${product.price.toFixed(2)}</p>
        <button
          onClick={() => onAddToCart(product)}
          className="mt-2 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard