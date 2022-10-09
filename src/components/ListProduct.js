import React from 'react';
import './ListProduct.css'

const ListProduct = (props) => {
    return (
        <div className='productsContainer'>
        <ul className='productsList'>
            {props.products.map((product) => (
                <li key={product.id} >
                    Produto: {product.name} 
                    <br></br>
                    Valor: R$ {product.value} 
                    <br></br>
                </li>
            ))}
        </ul>
        </div>
    );
};

export default ListProduct;