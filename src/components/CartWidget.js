import cart from '../assets/cart-widget.png';
import React from "react";

export const CartWidget = (props) => {
    return(
        <div>
        <a class="nav-link" aria-current="page" href="#">
            <img className="cart-widget-img" width='50px' src={cart} alt="cart-widget"/>
            <span style={{backgroundColor: 'white', borderRadius:"5px", width:"50px", height:"50px", padding:10,margin:5, color:"black"}}>{props.initial}</span>
        </a>
        
        </div>
    )
}

