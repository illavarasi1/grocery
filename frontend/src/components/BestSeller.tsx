import { dummyProducts } from "../assets/assets/assets"
import ProductCard from "./ProductCard"

const BestSeller = () => {
  return (
    <div className="mt-16">
      <p className="text-2xl md:text-3xl font-medium">Best Sellers</p>
      <div className="grid grid-col-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6">
        {/* {dummyProducts.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))} */}
        {dummyProducts.slice(0, 5).map((product) => ( // ✅ Only first 5
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default BestSeller