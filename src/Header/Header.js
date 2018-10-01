import React, { Component } from 'react';
import '../Header/Header.css';

class Header extends Component {
    render() {
        return (
            <header>
                <div class="titulo"> Juego de Cartas</div>
                <div>
                    <button className="btn-reiniciar">Reiniciar</button>
                </div>
                <div className="titulo">
                    Intentos:
       </div>
            </header>
        );
    }
}

export default Header;
