import React, { Component } from 'react';
import Carta from '../Carta/Carta.js'
import '../Tablero/Tablero.css';

class Tablero extends Component {
    render() {
        return (
            <div className="tablero">
                {
                    this.props.baraja
                        .map((carta, index) => {
                            const estaSiendoComparada = this.props.parejaSeleccionada.indexOf(carta) > -1;
                            return <Carta
                                key={index}
                                icono={carta.icono}
                                estaSiendoComparada={estaSiendoComparada}
                                seleccionarCarta={() =>this.props.seleccionarCarta(carta)}
                                guessLetter={carta.guessLetter}
                            />
                        })
                }
            </div>
        );
    }
}

export default Tablero;
