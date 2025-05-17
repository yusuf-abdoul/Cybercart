const ProductCard = ({ product, onAddToCart }) => {
return (
    <div className="border rounded-lg  overflow-hidden shadow-2xl hover:shadow-2xl transition-shadow duration-300 hover:scale-105">
        
        <div className="w-full h-48 bg-white flex items-center justify-center">
            <img 
                src={product.image} 
                alt={product.name} 
                className="max-w-full max-h-full object-contain"
                loading="lazy"
            />
        </div>
        <div className="p-4">
            <h3 className="font-semibold text-lg">{product.name}</h3>
            <p className="text-gray-600">${product.price.toFixed(2)}</p>
            <button
                onClick={() => onAddToCart(product)}
                className="mt-2 w-full bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 transition-colors"
            >
                Add to Cart
            </button>
        </div>
    </div>
)
}

export default ProductCard