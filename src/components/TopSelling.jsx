import { useContext } from 'react';
import EcomContext from '../context/EcomContext';
import Productitem from './Productitem';

function TopSelling() {
    const { topSelling } = useContext(EcomContext);

  return (
    <div className='mx-[5%]'>
        <h1 className='text-center py-4 text-lg sm:text-xl md:text-2xl font-bold text-blue-950'>Top Selling Product</h1>
    <div className='grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {topSelling.map((item)=>(
            <Productitem item={item} key={item._id}/>
        ))}
    </div>
    </div>
  )
}

export default TopSelling