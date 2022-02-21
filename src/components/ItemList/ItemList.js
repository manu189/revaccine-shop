import React, {useState, useEffect} from 'react';
import {Item} from '../Item/Item';
import {products} from '../../Data/Data';
// import {useParams} from 'react-router-dom'; //para obtener el id del producto

export const ItemList = (props) => {
    const [items, setItems] = useState([]);
    // const {id} = useParams();

    const getItem = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 2000);
    });



    useEffect(() => {
        getItem.then(   data => {
            setItems(data);
            // console.log('data', data);
        });
    }, [items]);

    // console.log('items', items);
    return(
        <React.Fragment>
            <div>
                <p>Listado de items</p>
                {
                    items.map((item) =>{
                        return(<Item key={item.id} item={item}/>) 
                    })
                }
            </div>
        </React.Fragment>
    )
}