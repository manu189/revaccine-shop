import React from "react";
import { ItemCount } from "./ItemCount/ItemCount";
import {ItemList} from "./ItemList/ItemList";

// function ItemListContainer(){
//     return <>
//         <div>
//         <p>Listado de items</p>
//         </div>
//     </>;
// }

const ItemListContainer = (props) => {  
    const stock = 5;
    const initial = 1;
    // console.log('props',props)

        // const [count, setCount] = useState(initial);


    return(
        <React.Fragment>
            <ItemList/>
            <ItemCount stock={stock} initial = {initial} />
            {/* <h1>{props.title}</h1>
            <h2>{props.number}</h2>
            {props.children[1]} */}
         </React.Fragment>
        )
}

export default ItemListContainer;