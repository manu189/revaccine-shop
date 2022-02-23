import React from "react"

export const ItemDetail = ({detail}) => {
    return(
            <article class="product_pod">
                <div class="container">
                        <a href="#">
                            <img width="300" src={detail.picURL} alt={detail.title} class="thumbnail"/>

                            </a>
                </div>
                    <h3><a href="#" title={detail.title}>{detail.title}</a></h3>
                    <div class="product_price">
                    <p class="price_color">${detail.price}</p>
                    <p class="instock availability">
                    <i class="icon-ok"></i>
                    {detail.description}
                    </p>
                    {/* <form>
                        <button type="submit" class="btn btn-primary btn-block" data-loading-text="Adding...">+ Info</button>
                    </form> */}
                    </div>
            </article>
    )
}

