import React, { Component } from 'react';
import Header from './Header/Header.js'
import Tablero from './Tablero/Tablero.js'
import Barajas from './utils/Barajas.js'
import './App.css';

const getEstadoInicial = () =>{
  const baraja = Barajas();
  return{
    baraja
  };
}
class App extends Component {
constructor(props){
  super(props)
  this.state = getEstadoInicial();
}

  render() {
    return (
      <div className="App">
      <Header />
      <Tablero 
      baraja = {this.state.baraja}/>
      </div>
    );
  }
}

export default App;
