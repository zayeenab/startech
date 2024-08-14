import { useContext } from "react";
import EcomContext from "../../context/EcomContext";
import Productitem from "../Productitem";

function Products() {
  const { product } = useContext(EcomContext);

  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="py-4 text-2xl font-bold text-blue-950">All Products</h1>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {product.map((item) => (
          <Productitem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Products;
