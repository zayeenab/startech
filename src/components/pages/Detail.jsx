import { useParams } from "react-router-dom";
import { useContext } from "react";
import EcomContext from "../../context/EcomContext";

function Detail() {
  const { id: shoeid } = useParams();
  const { product, addToCart } = useContext(EcomContext);
  const shoeitem = product.find((item) => item._id === shoeid);

  if (!shoeitem) {
    return <p className="text-center text-red-600">Product not found</p>;
  }

  return (
    <div className="container mx-auto px-4 py-6 lg:px-8 lg:py-8">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
        {/* Image Section */}
        <div className="flex-shrink-0 w-full lg:w-1/2">
          <img
            src={`https://startech-ecom-api-t2fv.onrender.com/${shoeitem.img}`}
            alt={shoeitem.name}
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Product Details Section */}
        <div className="flex-grow lg:w-1/2">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4 border-b-2 border-gray-300 pb-2">
            {shoeitem.name}
          </h2>
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam illo harum temporibus quasi natus atque id, a culpa rerum dolorum.
          </p>
          <p className="text-xl lg:text-2xl font-bold mb-4">₦{shoeitem.price}</p>
          <p className="mb-4">
            Category: <span className="text-blue-950 italic font-bold">{shoeitem.category.name}</span>
          </p>
          <button
            onClick={() => addToCart({ ...shoeitem, quantity: 1 })}
            className="bg-blue-950 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-800 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
