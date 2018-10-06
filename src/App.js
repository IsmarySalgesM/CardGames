import React, { Component } from 'react';
import Header from './Header/Header.js'
import Tablero from './Tablero/Tablero.js'
import Barajas from './utils/Barajas.js'
import './App.css';

const getEstadoInicial = () =>{
  const baraja = Barajas();
  return{
    baraja,
    parejaSeleccionada: [],
    estaComparando : false
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
      baraja = {this.state.baraja}
      parejaSeleccionada ={this.state.parejaSeleccionada}
      seleccionarCarta={(carta)=> this.seleccionarCarta(carta)}
      />
      </div>
    );
  }

  seleccionarCarta(carta){
    if(
      this.state.estaComparando ||
      this.state.parejaSeleccionada.indexOf(carta) > -1 ||
      carta.guessLetter
    ){
      return;
    
    }
    const parejaSeleccionada = [...this.state.parejaSeleccionada, carta];
    this.setState({parejaSeleccionada})
  }
}

export default App;
