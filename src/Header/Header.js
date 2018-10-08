import React, { Component } from 'react';
import '../Header/Header.css';

class Header extends Component {
    render() {
        return (
            <header>
                <div class="titulo"> Juego de Cartas</div>
                <div>
                    <button className="btn-reiniciar" onClick={this.props.resetearPartida}>Reiniciar</button>
                </div>
                <div className="titulo">
                    Intentos:{this.props.numeroDeIntentos}
                </div>
            </header>
        );
    }
}

export default Header;
