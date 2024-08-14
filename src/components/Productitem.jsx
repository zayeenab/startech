 import { Link, useNavigate } from "react-router-dom"
import { useContext } from "react"
import EcomContext from "../context/EcomContext"

function Productitem({item}) {
  const { addToCart, isAuthenticated } = useContext(EcomContext)
  const redirect = useNavigate();

  const login = () => {
    if (!isAuthenticated) {
      redirect("/login")
    }
  }
  return (
    <div className="mb-5 border-2 border-black w-max rounded-lg shadow-lg shadow-blue-500">
        <Link to={`/detail/${item._id}`}>
        <img src={"https://startech-ecom-api-t2fv.onrender.com/" + item.img} alt="" className="h-[200px] w-[250px] rounded-lg object-cover"/>
        </Link>
        <div className="text-center my-5">
            <p className="text-xl">{item.name}</p>
            <p className="py-3 text-xl">₦{item.price}</p>
            <p
            className="bg-blue-950 text-white rounded p-[10px] cursor-pointer" 
            onClick={isAuthenticated ? ()=> addToCart(item._id) : login}> Add to Cart </p>
        </div>
    </div>
  )
}

export default Productitem