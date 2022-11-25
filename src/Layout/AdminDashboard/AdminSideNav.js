import React from 'react';
import { Link } from 'react-router-dom';

const AdminSideNav = () => {
    return (
        <div className='w-60 py-10 flex flex-col'> 
            <Link to='./all-seller' className='py-3 pl-2 w-full text-md font-bold hover:text-primary border-b-2 border-primary'>All Seller</Link>
            <Link to='./all-buyers' className='py-3 pl-2 w-full text-md font-bold hover:text-primary border-b-2 border-primary'>All Buyers</Link>
            <Link to='./all-products' className='py-3 pl-2 w-full text-md font-bold hover:text-primary border-b-2 border-primary'>All Products</Link>
            <Link to='./reported-products' className='py-3 pl-2 w-full text-md font-bold hover:text-primary border-b-2 border-primary'>Reported Products</Link>
        </div>
    );
};

export default AdminSideNav;