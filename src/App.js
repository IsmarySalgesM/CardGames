import React, { Component } from 'react';
import Header from './Header/Header.js'
import Tablero from './Tablero/Tablero.js'
import Barajas from './utils/Barajas.js'
import './App.css';

const getStateInitial = () => {
  const deckCards = Barajas();
  return {
    deckCards,
    selectedCouple: [],
    comparing: false,
    numberOfAttemps: 0
  };
}
class App extends Component {
  constructor(props) {
    super(props)
    this.state = getStateInitial();
  }

  selectCard(card) {
    if (
      this.state.comparing ||
      this.state.selectedCouple.indexOf(card) > -1 ||
      card.guessLetter
    ) {
      return;

    }
    const selectedCouple = [...this.state.selectedCouple, card];
    this.setState({
      selectedCouple
    });
    if (selectedCouple.length === 2) {
       this.comparingCouple(selectedCouple);
    }
  }
   comparingCouple(selectedCouple) {
     this.setState({ comparing: true });

     setTimeout(() => {
       const [firstCard, secondCard] = selectedCouple;
      let deckCards = this.state.deckCards;

       if(firstCard.icono === secondCard.icono){
         deckCards = deckCards.map((card) =>{
           if(card.icono !== firstCard.icono){
             return card;
           }
           return {...card, guessLetter: true};
         })
       }
       this.checkWinner(deckCards);
       this.setState({
         selectedCouple:[],
         deckCards,
         comparing:false,
         numberOfAttemps:this.state.numberOfAttemps + 1
       })
    }, 1500)
   }
  checkWinner(deckCards){
    if(
      deckCards.filter((card) => !card.guessLetter).length === 0
      ){
      alert(`Genial ganaste en ${this.state.numberOfAttemps} intentos !!! `)
  }
}
 resetGame(){
   this.setState
   (getStateInitial());
 }

  render() {
    return (
      <div className="App">
        <Header  numberOfAttemps={this.state.numberOfAttemps}
        resetGame={()=> this.resetGame()}/>
        <Tablero
          deckCards={this.state.deckCards}
          selectedCouple={this.state.selectedCouple}
          selectCard={(card) => this.selectCard(card)}
        />
       
      </div>
    );
  }

 
 
}
export default App;
