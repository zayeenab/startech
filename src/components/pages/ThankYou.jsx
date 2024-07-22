import React from 'react'
import { Link } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import EcomContext from '../../context/EcomContext'
import { useSearchParams } from 'react-router-dom'

function ThankYou() {
  const {createOrder} = useContext(EcomContext)
  const [searchParams] = useSearchParams()
  const tx_ref = searchParams.get("tx_ref")
  const transaction_id = searchParams.get("transaction_id")

  useEffect(()=>{
    if (transaction_id && tx_ref) {
      createOrder(transaction_id, tx_ref)
    }
  }, [transaction_id, tx_ref, createOrder])
  return (
    <div className='py-[5%] px-[10px] bg-cover bg-[100%] bg-no-repeat text-center mb-[-3%]' style={{backgroundImage: `url(/img/thankyou.jpg)`, height:`100vh`}}>
        <div className='bg-white rounded-md py-[20px] opacity-85 w-[50%] mx-auto'>
            <p className='text-xl text-blue-950 '>Thank you for your patronage. A Representative will contact you shortly.</p>

            <Link to = "/products">
            <button className='bg-blue-950 p-[10px] rounded-lg mt-[10px] text-white'>Back to Product</button>
            </Link>
        </div>
    </div>
  )
}

export default ThankYou