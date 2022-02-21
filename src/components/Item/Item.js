import React, {useState, useEffect} from 'react';


export const Item = ({item}) => {
    return(
            <article class="product_pod">
                <div class="container">
                        <a href="#">
                            <img width="300" src={item.picURL} alt={item.title} class="thumbnail"/>

                            </a>
                </div>
                    <h3><a href="#" title={item.title}>{item.title}</a></h3>
                    <div class="product_price">
                    <p class="price_color">${item.price}</p>
                    <p class="instock availability">
                    <i class="icon-ok"></i>
                        In stock
                    </p>
                    <form>
                        <button type="submit" class="btn btn-primary btn-block" data-loading-text="Adding...">+ Info</button>
                    </form>
                    </div>
            </article>



    )
}

