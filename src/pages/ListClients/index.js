import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import './styles.css';

function ListClients() {
    const [clients, setClients] = useState([]);
    const emoticonStar = "*";

    useEffect(() => {
        api.get('clientes').then(response => {
            setClients(response.data);
        })
    }, []);

    return(
        <div id="page-list">
            <div className="content">
                <header>
                    <h1>Sua Lista de Clientes</h1>
                </header>
                
                <ul>
                    {clients.map(client =>(
                        <li key={client.id}>
                            
                            <h3>{client.name}</h3>

                            <strong>Contato:</strong>
                            <p>{client.cel}</p>

                            <strong>Produtos:</strong>
                            <p>{client.product}</p>

                            <strong>Observações:</strong>
                            <p>{client.observation}</p>

                            <strong>Endereço:</strong>
                            <p>Rua Fulano Bairro Sicrano</p>

                            <p id="star">{emoticonStar.repeat(client.stars)}</p>

                            <button>Atualizar Cliente</button>
                            <button>Excluir Cliente</button>
                        </li>
                    ))} 
                </ul>
            </div>
        </div>
    );
};

export default ListClients;