import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import EcomContext from '../../context/EcomContext';

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { showAndHide } = useContext(EcomContext);

  const redirect = useNavigate();

  const registerHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://startech-ecom-api-t2fv.onrender.com/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          phone,
          email,
          password,
          confirmPassword,
        }),
      });

      const data = await res.json();
      if (data === "exist") {
        showAndHide("error", "User Already Exists");
      } else if (data === "do not match") {
        showAndHide("error", "Passwords do not match");
      } else if (data === "invalid password") {
        showAndHide("error", "Password must be at least 8 characters long and include one number and one letter");
      } else {
        redirect("/login");
        showAndHide("success", "Registration successful!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4 py-6 bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-center text-2xl font-bold text-blue-950 mb-6">Register Here</h1>
        <form onSubmit={registerHandler}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-3 border border-stone-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              placeholder="Last Name"
              className="w-full p-3 border border-stone-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full p-3 border border-stone-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border border-stone-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-stone-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              placeholder="Re-Confirm Password"
              className="w-full p-3 border border-stone-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div className="my-4">
            <button
              type="submit"
              className="w-full bg-blue-950 text-white py-3 rounded-lg shadow-md hover:bg-blue-800 transition-colors"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
