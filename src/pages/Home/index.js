import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import Footer from '../../components/Footer';

const Home = () => {
    return(
        <div id="page-home">
            <div className="content">
                <section>
                    <h1>Projeto Felipe</h1>
                </section>
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
            <Footer />
        </div>
    );
};

export default Home;