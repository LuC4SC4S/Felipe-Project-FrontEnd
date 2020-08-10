import React from 'react';
import './styles.css';

const Footer = () => {
    return(
        <footer>
            <section className="ft-legal">
                <ul className="ft-legal-list">
                    <li>More About Me</li>
                    <li><a href="https://github.com/LuC4SC4S" target="_blank">GitHub</a></li>
                    <li>&copy; 2020 Copyright CASCAS Dev</li>
                </ul>
            </section>
        </footer>
    );
}

export default Footer;