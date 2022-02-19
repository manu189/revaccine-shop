// import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';
import Hello from './components/hello/hello';
import Welcome from './components/Welcome/Welcome';
import {ItemCount} from './components/ItemCount/ItemCount';

function App() {
  // const cart_text = "Carrito de compras";
  // const cart_number = 5;
  // const stock = 5;
  // const initial = 1;
  return (
    <React.Fragment>  
      <div className="App">
        <header className="App-header">
        <Navbar />
        {/* <ItemListContainer title={cart_text} number = {cart_number}>
        <p>Primer Elemento </p>
        <p>segundo Elemento </p>
        </ItemListContainer> */}
        {/* <Hello /> */}
        <ItemListContainer/>
        {/* <ItemCount/> */}
        {/* <Alert variant="danger">
        Hey, nice to see you
        </Alert>
        <Welcome /> */}

        </header>

      </div>
    </React.Fragment>
  );
}

export default App;
