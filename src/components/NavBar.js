import React from "react";
import {CartWidget} from "./CartWidget";

const Navbar = () => {
    return (
            <ul class="nav">
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Tienda</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Nosotros</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contacto</a>
                </li>
                <li class="nav-item">
                    <CartWidget />
                </li>
            </ul>
    )
    }

export default Navbar;

// function App() {
//     return <>
//              // Desarrolla tu implementación de un navbar dentro del componente NavBar.js
//              <NavBar />
//              <h2>Las ofertas de la semana</h2>
//      </>;
// }


