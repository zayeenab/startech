import { useContext } from "react"
import EcomContext from "../../context/EcomContext"
import Productitem from "../Productitem"

function Products() {
    const { product } = useContext(EcomContext)

  return (
    <div className="mx-4 sm:mx-6 md:mx-8 lg:mx-[5%]">
        <h1 className="py-4 text-lg sm:text-xl md:text-2xl font-bold text-blue-950">All Products</h1>
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {product.map((item)=>(
            <Productitem key={item.id} item={item}/>
        ))}
        </div>
    </div>
  )
}

export default Products

