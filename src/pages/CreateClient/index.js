import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';
import { Map, TileLayer, Marker } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';

import api from '../../services/api';
import './styles.css';

function CreateClient() {
    const [name, setName] = useState('');
    const [cel, setCel] = useState('');
    const [star, setStar] = useState(0);
    const [product, setProduct] = useState('');
    const [observation, setObservation] = useState('');
    const [city, setCity] = useState('');

    const history = useHistory();

    function HandleSubmit(e){
        e.preventDefault();

        const data = {
            name,
            cel,
            star,
            product,
            observation,
            city
        }

        try {
            const response = await api.post('create', data);

            alert(`Cliente ${response.data.name} cadastrado com sucesso!`);
            history.push('/')
        }catch (err){
            alert('Erro no cadastro, tente novamente.');
        }
    }


    return(
        <div id="page-create">
            <form>
                <div id="form-main">
                    <h1>Informações do Cliente</h1>
                    
                    <fieldset>
                        <div className="field">
                            <label htmlFor="name">Nome do Cliente</label>
                            <input 
                                type="text"
                                name="name"
                                id="name"
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="cel">Contato do Cliente</label>
                            <input 
                                type="text"
                                name="cel"
                                id="cel"
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="classification">Classificação Inicial</label>
                            <input 
                                type="range"
                                min="0" 
                                max="100"
                                name="classification"
                                id="classification"
                            />
                        </div>
                    </fieldset>

                    <h1>Produtos</h1>

                    <fieldset>
                        <div className="field">
                            <input 
                                type="text"
                                name="product"
                                id="product"
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="observation">Observação</label>
                            <textarea 
                                name="observation"
                                id="observation"
                                rows="5"
                            />
                        </div>
                    </fieldset>
                </div>
                <div id="form-main">
                    <h1>Localização do Cliente</h1>
                    
                    <Map center={[-22.403687, -44.256656]} zoom={15}>
                        <TileLayer
                            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                    </Map>
                
                </div>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default CreateClient;