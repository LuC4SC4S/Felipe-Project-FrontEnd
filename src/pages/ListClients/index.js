import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import './styles.css';

function ListClients() {
    const [clients, setClients] = useState([]);
    const emoticonStar = '&#11088;';

    useEffect(() => {
        api.get('clientes').then(response => {
            setClients(response.data.json());
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
                        <p id="star">{emoticonStar.repeat(client.star)}</p>

                        <button>Atualizar Cliente</button>
                        <button>Excluir Cliente</button>
                    </li>
                    ))}
                    
                    <li>
                        <h3>Fulano de Sicrano</h3>

                        <strong>Produtos:</strong>
                        <p>Ovo e Peixe</p>
                        <strong>Observações:</strong>
                        <p>30 ovos e 1kg de Linguado</p>
                        <strong>Endereço:</strong>
                        <p>Rua Fulano Bairro Sicrano</p>
                        <p id="star">&#11088;&#11088;&#11088;&#11088;&#11088;</p>

                        <button>Atualizar Cliente</button>
                        <button>Excluir Cliente</button>
                    </li>
                    <li>
                        <h3>Fulano de Sicrano</h3>

                        <strong>Produtos:</strong>
                        <p>Ovo e Peixe</p>
                        <strong>Observações:</strong>
                        <p>30 ovos e 1kg de Linguado</p>
                        <strong>Endereço:</strong>
                        <p>Rua Fulano Bairro Sicrano</p>
                        <p id="star">&#11088;&#11088;&#11088;&#11088;&#11088;</p>

                        <button>Atualizar Cliente</button>
                        <button>Excluir Cliente</button>
                    </li>
                    <li>
                        <h3>Fulano de Sicrano</h3>

                        <strong>Produtos:</strong>
                        <p>Ovo e Peixe</p>
                        <strong>Observações:</strong>
                        <p>30 ovos e 1kg de Linguado</p>
                        <strong>Endereço:</strong>
                        <p>Rua Fulano Bairro Sicrano</p>
                        <p id="star">&#11088;&#11088;&#11088;&#11088;&#11088;</p>

                        <button>Atualizar Cliente</button>
                        <button>Excluir Cliente</button>
                    </li>
                    <li>
                        <h3>Fulano de Sicrano</h3>

                        <strong>Produtos:</strong>
                        <p>Ovo e Peixe</p>
                        <strong>Observações:</strong>
                        <p>30 ovos e 1kg de Linguado</p>
                        <strong>Endereço:</strong>
                        <p>Rua Fulano Bairro Sicrano</p>
                        <p id="star">&#11088;&#11088;&#11088;&#11088;&#11088;</p>

                        <button>Atualizar Cliente</button>
                        <button>Excluir Cliente</button>
                    </li>
                    <li>
                        <h3>Fulano de Sicrano</h3>

                        <strong>Produtos:</strong>
                        <p>Ovo e Peixe</p>
                        <strong>Observações:</strong>
                        <p>30 ovos e 1kg de Linguado</p>
                        <strong>Endereço:</strong>
                        <p>Rua Fulano Bairro Sicrano</p>
                        <p id="star">&#11088;&#11088;&#11088;&#11088;&#11088;</p>

                        <button>Atualizar Cliente</button>
                        <button>Excluir Cliente</button>
                    </li>
                </ul>

                
                
            </div>
        </div>
    );
};

export default ListClients;