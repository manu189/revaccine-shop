import React, {Component, useState} from 'react';




export const ItemCount = (props) => {
    const [count, setCount] = useState(props.initial);
    // const [currentdate, setCurrentdate] = useState(new Date().toString());

    // const handleClick = (props) => {
    //     setCount(count + 1);
    //     setCurrentdate(new Date().toString());
    // }

    const handlePlus = () => {
        if (count < props.stock){
            setCount(count + 1);
        }
    }

    const handleMinus = () => {
        if (count > 0){
            setCount(count - 1);
        }
    }

    const handleAddToCart = () => {
        if (count === 0)  {
            setCount(count + 1);
        }
    }


    return(
        <div class="mt-5">
            <div class="m-5">
            <button onClick={handleMinus }>-</button>
            <span class="m-5">{count}</span>
            <button onClick={handlePlus}>+</button>
            <div><button onClick={handleAddToCart }>Agregar al carrito</button></div>
            </div>
            {/* <p>Cantidad de Items: {count} <br/>
                Fecha: {currentdate}</p> */}
            {/* <p>Fecha: {currentdate}</p> */}
        </div>
    )
}
