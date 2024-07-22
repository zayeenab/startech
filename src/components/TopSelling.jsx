import { useContext } from 'react';
import EcomContext from '../context/EcomContext';
import Productitem from './Productitem';

function TopSelling() {
    const { topSelling } = useContext(EcomContext);

  return (
    <div className='mx-[5%]'>
        <h1 className='py-[10px] text-xl font-bold text-blue-950'>Top Selling Product</h1>
    <div className='grid md:grid-cols-4 grid-cols-2'>
        {topSelling.map((item)=>(
            <Productitem item={item} key={item._id}/>
        ))}
    </div>
    </div>
  )
}

export default TopSelling