import { useContext } from "react";
import EcomContext from "../../context/EcomContext";

function Checkout() {
  const { cartItems, totalAmount } = useContext(EcomContext);

  const handleCheckout = async (e) => {
    e.preventDefault();

    const amount = totalAmount();
    const currency = "NGN";
    const firstName = e.target.elements.firstName.value;
    const lastName = e.target.elements.lastName.value;
    const phone = e.target.elements.phone.value;
    const address = e.target.elements.address.value;

    try {
      const res = await fetch("https://startech-ecom-api-t2fv.onrender.com/api/payment/initiate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": `${localStorage.getItem("auth-token")}`,
        },
        body: JSON.stringify({
          amount,
          currency,
          firstName,
          lastName,
          phone,
          address,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        window.location.href = data.link;
      } else {
        console.error(data.msg || "Failed to initiate payment");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="my-8 px-4 lg:px-16">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2 w-full">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Img</th>
                <th className="p-4 text-left">Price</th>
                <th className="p-4 text-left">Quantity</th>
                <th className="p-4 text-left">Amount</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {cartItems.products?.map((item) => (
                <tr className="border-b" key={item._id}>
                  <td className="p-4">{item.product?.name}</td>
                  <td className="p-4">
                    <img
                      src={"https://startech-ecom-api-t2fv.onrender.com/" + item.product?.img}
                      alt={item.product?.name}
                      className="h-16 w-16 object-cover mx-auto"
                    />
                  </td>
                  <td className="p-4">₦{item.product?.price}</td>
                  <td className="p-4">{item.quantity}</td>
                  <td className="p-4">₦{item.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between mt-4">
            <p className="text-xl font-semibold">Total Amount: ₦{totalAmount()}</p>
          </div>
        </div>
        <div className="lg:w-1/2 w-full">
          <h1 className="text-center mb-4 text-2xl font-bold">Delivery Information</h1>
          <form onSubmit={handleCheckout}>
            <div className="mb-4">
              <input
                type="text"
                name="firstName"
                className="w-full p-3 border border-gray-300 rounded shadow-sm"
                placeholder="First Name"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="lastName"
                className="w-full p-3 border border-gray-300 rounded shadow-sm"
                placeholder="Last Name"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="phone"
                className="w-full p-3 border border-gray-300 rounded shadow-sm"
                placeholder="Phone Number"
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                name="address"
                className="w-full p-3 border border-gray-300 rounded shadow-sm"
                placeholder="Delivery Address"
                required
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button type="submit" className="bg-blue-950 text-white py-2 px-4 rounded-lg hover:bg-blue-800">
                Pay Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
