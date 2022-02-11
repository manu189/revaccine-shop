import React from "react";

// function ItemListContainer(){
//     return <>
//         <div>
//         <p>Listado de items</p>
//         </div>
//     </>;
// }

const ItemListContainer = (props) => {  
    console.log('props',props)
    return(
       <h1>{props.title}</h1>
        )
}

export default ItemListContainer;