import React from 'react';
import "./Details.css"

const Details = (props) => {
    let products = props.cart;
    let totalprice = 0;
    let selectedProduct = [];
    for (let product of products){
    totalprice = totalprice + product.price;
    selectedProduct.push(product.name);
}
console.log(selectedProduct)
    
    return (
        <div className='details'>
            <h1>Product Summary</h1>
            <h3>Total Selected Product: {props.cart.length}</h3>
            <h3>Total Amount:$ <span>{totalprice}</span></h3>
            {
                selectedProduct.map( product =>
                    
                    <span className='sProducts'>{product}</span>
                )
            }
            <button>Proceed to checkout</button>
        </div>
    );
};

export default Details;