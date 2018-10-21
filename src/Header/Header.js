import React, { Component } from 'react';
import '../Header/Header.css';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="titulo"><h2>Juego de Memoria</h2></div>
                <div>
                    <button className="btn-reiniciar" onClick={this.props.resetGame}>Reiniciar Partida</button>
                </div>
            </header>
        );
    }

}

export default Header;
