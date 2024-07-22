import { useContext } from "react"
import EcomContext from "../../context/EcomContext"
import Productitem from "../Productitem"

function Products() {
    const { product } = useContext(EcomContext)

  return (
    <div className="mx-[5%]">
        <h1 className="py-[10px] text-xl font-bold text-blue-950">All Products</h1>
        <div className="grid lg:grid-cols-4 grid-cols-2">
        {product.map((item)=>(
            <Productitem key={item.id} item={item}/>
        ))}
        </div>
    </div>
  )
}

export default Products