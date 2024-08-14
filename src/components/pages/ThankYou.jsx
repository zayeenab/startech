import React, { useContext, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import EcomContext from '../../context/EcomContext';

function ThankYou() {
  const { createOrder } = useContext(EcomContext);
  const [searchParams] = useSearchParams();
  const tx_ref = searchParams.get("tx_ref");
  const transaction_id = searchParams.get("transaction_id");

  useEffect(() => {
    if (transaction_id && tx_ref) {
      createOrder(transaction_id, tx_ref);
    }
  }, [transaction_id, tx_ref, createOrder]);

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center text-center"
      style={{ backgroundImage: `url(/img/thankyou.jpg)` }}
    >
      <div className="bg-white rounded-lg p-4 sm:p-6 md:p-8 lg:p-10 shadow-lg max-w-md w-full mx-4 sm:mx-auto opacity-90">
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-950 font-semibold mb-4">
          Thank you for your patronage. A representative will contact you shortly.
        </p>
        <Link to="/products">
          <button className="bg-blue-950 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors">
            Back to Products
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ThankYou;
