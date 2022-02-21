import React, {useState, useEffect} from 'react';

const Welcome = (props) => {
    const [lastname, setLastname] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            console.log("Hola " + lastname)
        }, 1000);
    },[lastname])

    const handleClick = () => {
        setLastname(!lastname);
    }

    return(
        <div>
            <h1>Welcome {lastname}</h1>
            <button onClick={handleClick}>cambiar nombre</button>
            <br/>
            <p>{props.conferencia}</p>
            <button onClick={props.cambiar}>cambiar variable desde el hijo</button>
        </div>
    )
}

export default Welcome;