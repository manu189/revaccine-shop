import React from "react";

function CartWidget(){
    return <>
        <div>
        <a class="nav-link" aria-current="page" href="#"><img className="cart-widget-img" width='30' src={require("./cart-widget.png")} alt="cart-widget"/></a>
        </div>
    </>;
}

export default CartWidget;