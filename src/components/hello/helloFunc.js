import React, {Component, useState} from 'react';


export const HelloFunction = (props) => {
    const [count, setCount] = useState(0);
    const [title, setTitle] = useState('Item');
    const [number, setNumber] = useState(0);
    const [items, setItems] = useState([]);
    const [items2, setItems2] = useState([]);
    const [items3, setItems3] = useState([]);
    
    const handleClick = () => {
        setCount(count + 1);
    }
    const handleClick2 = () => {
        setTitle('Item2');
    }
    const handleClick3 = () => {
        setNumber(number + 1);
    }
    const handleClick4 = () => {
        setItems([...items, 'item1']);
    }
    const handleClick5 = () => {
        setItems2([...items2, 'item2']);
    }
    const handleClick6 = () => {
        setItems3([...items3, 'item3']);
    }
    return(
        <div>
            <h1>Hello {props.name}</h1>
            <h2>You are {props.age} years old</h2>
            <button onClick={handleClick}>cambiar estado</button>
            <button onClick={handleClick2}>cambiar estado</button>
            <button onClick={handleClick3}>cambiar estado</button>
            <button onClick={handleClick4}>cambiar estado</button>
            <button onClick={handleClick5}>cambiar estado</button>
            <button onClick={handleClick6}>cambiar estado</button>
            <h1>{count}</h1>
            <h2>{title}</h2>
            <h3>{number}</h3>
            <h4>{items}</h4>
            <h4>{items2}</h4>
            <h4>{items3}</h4>
        </div>
    )
}