import React, { Component } from 'react';
import Carta from '../Carta/Carta.js'
import '../Tablero/Tablero.css';

class Tablero extends Component {
    render() {
        return (
            <div className="tablero">
                {
                    this.props.deckCards
                        .map((card, index) => {
                            const compared = this.props.selectedCouple.indexOf(card) > -1;
                            return <Carta
                                key={index}
                                icono={card.icono}
                                compared={compared}
                                selectCard={() =>this.props.selectCard(card)}
                                guessLetter={card.guessLetter}
                            />
                        })
                }
            </div>
        );
    }
}

export default Tablero;
