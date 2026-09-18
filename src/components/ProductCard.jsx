export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 border border-neutral-100 flex flex-col">
      <img
        src={product?.image || "/placeholder.jpg"}
        alt={product?.name || "Product"}
        className="w-full h-60 object-cover"
      />
      
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-semibold text-neutral-900 mb-2">
          {product?.name || "Product Name"}
        </h3>
        <p className="text-2xl font-bold text-blue-600 mb-4">
          R{product?.price || "0.00"}
        </p>

        <div className="flex gap-2 mt-auto">
          <button className="flex-1 px-4 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors cursor-pointer">
            Add to Cart
          </button>
          <button className="px-4 py-2.5 text-sm font-medium text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors cursor-pointer">
            View
          </button>
        </div>
      </div>
    </div>
  );
}