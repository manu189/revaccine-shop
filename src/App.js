import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import React from 'react';

function App() {
  return (
    <React.Fragment>  
      <div className="App">
        {/* <header className="App-header">


        </header> */}
        <Navbar />
        <ItemListContainer title="Lista de productos"/>
      </div>
    </React.Fragment>
  );
}

export default App;
