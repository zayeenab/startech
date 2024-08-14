import { useContext } from 'react';
import EcomContext from '../context/EcomContext';
import Productitem from './Productitem';

function Featured() {
    const { featured } = useContext(EcomContext);

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <h1 className="text-center py-4 text-lg sm:text-xl md:text-2xl font-bold text-blue-950">
                Featured Products
            </h1>
            <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {featured.map((item) => (
                    <Productitem item={item} key={item._id} />
                ))}
            </div>
        </div>
    );
}

export default Featured;
