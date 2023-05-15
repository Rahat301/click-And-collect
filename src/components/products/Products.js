import React from 'react';
import "./Products.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import Rating from "react-rating"

const Products = (props) => {
    const {name,img,price,rating,category} = props.product;
    


    const cartIcon =(< FontAwesomeIcon icon={faShoppingCart} />)

    return (
        
            <div className='product'>
            <div className='product-image'> 
            <img src={img} alt="" />
            <span>{category}</span>
            </div>

            <div className='p-content'>
            <h2>{name}</h2>
            <div style={{display:"flex",justifyContent:"space-between",marginTop:"-15px",fontSize:"20px"}}>
            <p>Price:$ <span>{price}</span> </p>
            
            <p>Rating: <Rating 
                    initialRating={rating}

                    emptySymbol= {< FontAwesomeIcon icon={faStarHalf} />}
                    fullSymbol={< FontAwesomeIcon icon={faStar} />}
            >
            </Rating></p>
            </div>
            <button onClick={()=>props.handleCart(props.product)}>{cartIcon} Add to Cart</button>
            </div>
            
            </div>
    );
};

export default Products;