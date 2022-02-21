// import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';
import Hello from './components/hello/hello';
import Welcome from './components/Welcome/Welcome';
import {ItemCount} from './components/ItemCount/ItemCount';
// import {Item} from './components/Item/Item';

function App() {
  // const cart_text = "Carrito de compras";
  // const cart_number = 5;
  const id = 1;
  const title = "Vacuna Rabia";
  const price = 100;
  const picURL = "https://img.europapress.es/fotoweb/fotonoticia_20210118173457_420.jpg";
  const item = {id, title, price, picURL};
  const initial = 1;
  const [conferencia, setConferencia] = useState("Conferencia de caca");

  const cambiarConferencia = () => {
    setConferencia("Conferencia de React");
  }

  return (
    <React.Fragment>  
      <div className="App">
        <header className="App-header">
        <Navbar initial= {initial}/>
        {/* <ItemListContainer title={cart_text} number = {cart_number}>
        <p>Primer Elemento </p>
        <p>segundo Elemento </p>
        </ItemListContainer> */}
        {/* <Hello /> */}
        <ItemListContainer/>
        {/* <ItemCount/> */} 
        {/* <Alert variant="danger">
        Hey, nice to see you
        </Alert> */}
        {/* <Welcome conferencia={conferencia}
        cambiar={cambiarConferencia} /> */}

        </header>
        {/* <Item item = {item} /> */}
      </div>
    </React.Fragment>
  );
}

export default App;
