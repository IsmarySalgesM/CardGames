import React, { Component } from 'react';
import Flipcard from "react-flipcard-2"
import '../Carta/Carta.css';



class Carta extends Component {
    render() {
        return (
            <div className="carta">
             <Flipcard>
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
