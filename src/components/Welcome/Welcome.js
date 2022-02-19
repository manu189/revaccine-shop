import React, {useState} from 'react';

const Welcome = (props) => {
    const [lastname, setLastname] = useState('Manuel');
    return(
        <div>
            <h1>Welcome {lastname}</h1>
            <button onClick={() => setLastname('Juan')}>cambiar nombre</button>
        </div>
    )
}

export default Welcome;