import { MdDelete } from "react-icons/md";
import React, { useContext } from "react";
import EcomContext from "../../context/EcomContext";
import { Link } from "react-router-dom"


function Cart() {
  const { cartItems, totalAmount, updateQuantity, deleteHandler } =
    useContext(EcomContext);

  const cartTable = (
    <div>
      <table className="w-[90%] mx-auto">
        <thead>
          <th>Action</th>
          <th>Name</th>
          <th>Img</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Amount</th>
        </thead>
        <tbody className="text-center">
          {cartItems.products?.map((item) => (
            <tr className="border-b-2" key={item._id}>
              <td>
                <button onClick={() => deleteHandler(item.product._id)}>
                  <MdDelete className="text-2xl flex text-blue-950" />
                </button>
              </td>

              <td>₦{item.product.name}</td>

              <td className="flex justify-center">
                <img
                  src={"http://localhost:8000/" + item.product.img}
                  alt=""
                  className="h-[50px]"
                />
              </td>

              <td>{item.product.price}</td>
              <td>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  className="outline outline-1"
                  onChange={(e) => updateQuantity(item.product._id, e.target.value)}
                />
              </td>

              <td>₦{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between mt-[3%]">
        <div>
          <p className="text-xl">Total Amount: ₦{totalAmount()} </p>
        </div>

        <div>
          <Link to = "/checkout">
          <button className="bg-blue-950 text-white p-[10px] rounded-lg">
            Checkout
          </button>
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className="my-[5%] mx-[7%]">
      <h1 className="text-center font-bold text-3xl mb-[5%] text-blue-950">
        Your Shop Cart</h1>
      {cartItems.products?.length > 0 ? (
        cartTable
      ) : (
        <p className="text-center text-blue-950">No Items in Cart</p>
      )}
    </div>
  );
}

export default Cart;
