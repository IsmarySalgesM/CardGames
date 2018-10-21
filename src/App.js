import React, { Component } from 'react';
import Header from './Header/Header.js'
import Tablero from './Tablero/Tablero.js'
import Barajas from './utils/Barajas.js'
import './App.css';

const getEstadoInicial = () => {
  const baraja = Barajas();
  return {
    baraja,
    parejaSeleccionada: [],
    estaComparando: false,
    numeroDeIntentos: 0
  };
}
class App extends Component {
  constructor(props) {
    super(props)
    this.state = getEstadoInicial();
  }

  seleccionarCarta(carta) {
    if (
      this.state.estaComparando ||
      this.state.parejaSeleccionada.indexOf(carta) > -1 ||
      carta.guessLetter
    ) {
      return;

    }
    const parejaSeleccionada = [...this.state.parejaSeleccionada, carta];
    this.setState({
      parejaSeleccionada
    });
    if (parejaSeleccionada.length === 2) {
       this.compararParejas(parejaSeleccionada);
    }
  }
   compararParejas(parejaSeleccionada) {
     this.setState({ estaComparando: true });

     setTimeout(() => {
       const [primeraCarta, segundaCarta] = parejaSeleccionada;
      let baraja = this.state.baraja;

       if(primeraCarta.icono === segundaCarta.icono){
         baraja = baraja.map((carta) =>{
           if(carta.icono !== primeraCarta.icono){
             return carta;
           }
           return {...carta, guessLetter: true};
         })
       }
       this.verificarSiHayGanador(baraja);
       this.setState({
         parejaSeleccionada:[],
         baraja,
         estaComparando:false,
         numeroDeIntentos:this.state.numeroDeIntentos + 1
       })
    }, 1500)
   }
  verificarSiHayGanador(baraja){
    if(
      baraja.filter((carta) => !carta.guessLetter).length === 0
      ){
      alert(`Genial ganaste en ${this.state.numeroDeIntentos} intentos !!! `)
  }
}
 resetearPartida(){
   this.setState
   (getEstadoInicial());
 }

  render() {
    return (
      <div className="App">
        <Header  numeroDeIntentos={this.state.numeroDeIntentos}
        resetearPartida={()=> this.resetearPartida()}/>
        <Tablero
          baraja={this.state.baraja}
          parejaSeleccionada={this.state.parejaSeleccionada}
          seleccionarCarta={(carta) => this.seleccionarCarta(carta)}
        />
       
      </div>
    );
  }

 
 
}
export default App;
