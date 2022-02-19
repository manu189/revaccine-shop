import cart from '../assets/cart-widget.png';
import React from "react";

export const CartWidget = () => {
    return(
        <div>
        <a class="nav-link" aria-current="page" href="#">
            <img className="cart-widget-img" width='50px' src={cart} alt="cart-widget"/>
            <span style={{backgroundColor: 'white', borderRadius:"5px", width:"20px", height:"20px", padding:10,margin:5, color:"black"}}>5</span>
        </a>
        
        </div>
    )
}

