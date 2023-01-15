import React from 'react';
import Products from './Products';
import { useSelector } from 'react-redux';

const Home = () => {

    const items = useSelector((state)=>state.cart);

    return (
        <div >

            <h2 className='display-3'>Welcome to the Redux toolkit store</h2>
            <h3>Cart items : {items.length}</h3>
            <section>
                <h3>Products</h3>
                <Products />
            </section>

        </div>
    )
}

export default Home;