import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/cartSlice';

const Cart = () => {

    const products = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    //console.log(products[0].payload.id);

    const handleRemove = (id) => {
     dispatch(remove(id));
    };

    return (
        <div>

            {
                products && products.map(product =>
                    <div key={product.id}  >
                        <img src={product.image} alt="products" height="80px" />
                        <h4>{product.title}</h4>
                        <h5>{product.price}</h5>
                        <button className='btn btn-primary m-2' onClick={() => { handleRemove(product.id) }}>Remove</button>
                    </div>
                )
            }


        </div>
    )


}

export default Cart;