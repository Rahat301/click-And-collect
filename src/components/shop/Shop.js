import React, { useEffect, useState } from 'react';
import "./Shop.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Products from '../products/Products';
import Details from '../details/Details';







const Shop = () => {
    const cartIcon =(< FontAwesomeIcon icon={faShoppingCart} style={{fontSize:"30px", marginLeft:"20px"}} /> )

    const [products,setProducts] = useState([])
    const[cart,setCard] = useState([]);

    useEffect(()=>{
        fetch('./products.json')
        .then(res=> res.json())
        .then(data => setProducts(data));
    },[])

    //add to cart event handler
    const handleCart = (product)=>{
        let newCart = [...cart,product];
        setCard(newCart);
        
    }

    // cart icon design
    return (
       
        <div className='shop'>
            <div className='search'>
            <h1>Search Your Products</h1>

            <div style={{display:"flex" ,alignItems:"center", justifyContent:"center"}}>
                <input type="text" placeholder='Search Products' />
                {cartIcon}
                <span>{cart.length}</span>
            </div>
            
            </div>
            

            <div className='shop-childs'>
                <div className='products'>
                    {products.map((product)=>(
                    <Products handleCart={handleCart} key={product._id} product={product}></Products>
                     ))}
                </div>
                <Details cart={cart}></Details>
            </div>
            
            
        </div>
    );
};

export default Shop;