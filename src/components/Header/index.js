import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Header = () => {
    return(
        <header>
            <section className="hd-legal">
                <ul className="hd-legal-list">
                    <li><Link to="/">Home</Link></li>
                </ul>
            </section>
        </header>
    );
}

export default Header;