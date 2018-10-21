import React, { Component } from 'react';
import  Flipcard  from 'react-flipcard'
import '../Carta/Carta.css';



class Carta extends Component {
    render() {
        return (
            <div className="carta" onClick={this.props.selectCard}>
             <Flipcard
             flipped={this.props.compared || this.props.guessLetter}
             disabled={true}
             >
                    <div className="portada"></div>
                    <div className="contenido">
                    <i className={`fa ${this.props.icono} fa-5x`}></i>
                    </div>
                </Flipcard>
            </div>
        );
    }
}

export default Carta;
