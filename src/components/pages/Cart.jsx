import { MdDelete } from "react-icons/md";
import React, { useContext } from "react";
import EcomContext from "../../context/EcomContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cartItems, totalAmount, updateQuantity, deleteHandler } =
    useContext(EcomContext);

  const cartTable = (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left">Action</th>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Img</th>
            <th className="px-4 py-2 text-left">Price</th>
            <th className="px-4 py-2 text-left">Quantity</th>
            <th className="px-4 py-2 text-left">Amount</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {cartItems.products?.map((item) => (
            <tr className="border-b" key={item._id}>
              <td className="px-4 py-2">
                <button onClick={() => deleteHandler(item.product._id)}>
                  <MdDelete className="text-2xl text-blue-950" />
                </button>
              </td>
              <td className="px-4 py-2">{item.product.name}</td>
              <td className="px-4 py-2 flex justify-center">
                <img
                  src={"https://startech-ecom-api-t2fv.onrender.com/" + item.product.img}
                  alt={item.product.name}
                  className="h-16 w-16 object-cover"
                />
              </td>
              <td className="px-4 py-2">₦{item.product.price}</td>
              <td className="px-4 py-2">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  className="outline-none border border-gray-300 rounded px-2 py-1"
                  onChange={(e) => updateQuantity(item.product._id, e.target.value)}
                />
              </td>
              <td className="px-4 py-2">₦{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex flex-col lg:flex-row justify-between mt-4 px-4 lg:px-0">
        <div>
          <p className="text-xl font-semibold">Total Amount: ₦{totalAmount()}</p>
        </div>
        <div>
          <Link to="/checkout">
            <button className="bg-blue-950 text-white py-2 px-4 rounded-lg hover:bg-blue-800">
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className="my-8 mx-4 lg:mx-16">
      <h1 className="text-center text-3xl font-bold mb-6 text-blue-950">Your Shop Cart</h1>
      {cartItems.products?.length > 0 ? (
        cartTable
      ) : (
        <p className="text-center text-blue-950">No Items in Cart</p>
      )}
    </div>
  );
}

export default Cart;
