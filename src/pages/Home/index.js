import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Home = () => {
    return(
        <div id="page-home">
            <div className="content">
                <header>
                    <h1>Projeto Felipe</h1>
                </header>
                <main>
                    <Link to="/cadastrar">
                        <button>CADASTRAR CLIENTE</button>
                    </Link>
                    <Link to="/index">
                        <button>LISTAR CLIENTES</button>
                    </Link>
                    <Link to="/map">
                        <button>MAPEAR CLIENTES</button>
                    </Link>
                </main>
            </div>
        </div>
    );
};

export default Home;