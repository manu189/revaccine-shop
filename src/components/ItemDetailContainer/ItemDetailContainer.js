import React, {useState, useEffect} from 'react';
import {products} from '../../Data/Data';
import { ItemDetail } from '../ItemDetail/ItemDetail';
// import {useParams} from 'react-router-dom'; //para obtener el id del producto

export const ItemDetailContainer = (props) => {
    const [details, setDetails] = useState([]);
    // const {id} = useParams();

    const getItem = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 2000);
    });


    useEffect(() => {
        getItem.then(   data => {
            setDetails(data);
            // console.log('data', data);
        });
    }, [details]);

    // console.log('items', items);
    return(
        <React.Fragment>
            <div>
                <p>Listado de items</p>
                {details.length === 0 ? 
                
                <p>Cargando...</p> 
                :
                details.map((detail) =>{
                        return(<ItemDetail key={detail.id} detail={detail}/>) 
                    })
                }
            </div>
        </React.Fragment>
    )
}