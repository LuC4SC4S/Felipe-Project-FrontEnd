import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';
import { Map, TileLayer, Marker } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';

import api from '../../services/api';
import './styles.css';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

function CreateClient() {
    const [name, setName] = useState('');
    const [cel, setCel] = useState('');
    const [stars, setStars] = useState(0);
    const [product, setProduct] = useState('');
    const [observation, setObservation] = useState('');
    const [city, setCity] = useState('');
    const longitude = -22.40161;
    const latitude = -44.255861;

    const history = useHistory();

    async function HandleSubmit(e){
        e.preventDefault();

        const data = {
            name,
            cel,
            stars,
            product,
            observation,
            longitude,
            latitude,
            city
        };

        try {
            const response = await api.post('cadastro', data);

            alert(`Cliente ${name} cadastrado com sucesso!`);
            history.push('/')
        }catch (err){
            alert(err);
        };
    }


    return(
        <div id="page-create">
            <Header />
            <form onSubmit={HandleSubmit}>
                <div id="pseudo-form">
                    <div id="form-main">
                        <h1>Informações do Cliente</h1>
                        
                        <fieldset>
                            <div className="field">
                                <label htmlFor="name">Nome do Cliente</label>
                                <input 
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={name}
                                    onChange = {e => setName(e.target.value)}
                                />
                            </div>
                            <div className="field">
                                <label htmlFor="cel">Contato do Cliente</label>
                                <input 
                                    type="text"
                                    name="cel"
                                    id="cel"
                                    value={cel}
                                    onChange = {e => setCel(e.target.value)}
                                />
                            </div>
                            <div className="field">
                                <label htmlFor="classification">Classificação Inicial</label>
                                <input 
                                    type="range"
                                    min="0" 
                                    max="5"
                                    name="classification"
                                    id="classification"
                                    value={stars}
                                    onChange = {e => setStars(e.target.value)}
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
                                    value={product}
                                    onChange = {e => setProduct(e.target.value)}
                                />
                            </div>
                            <div className="field">
                                <label htmlFor="observation">Observação</label>
                                <textarea 
                                    name="observation"
                                    id="observation"
                                    rows="5"
                                    value={observation}
                                    onChange = {e => setObservation(e.target.value)}
                                />
                            </div>
                        </fieldset>
                    </div>
                    <div id="form-main">
                        <h1>Localização do Cliente</h1>
                        
                        {/* <Map center={[-22.403687, -44.256656]} zoom={15}>
                            <TileLayer
                                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                        </Map> */}
                        <fieldset>
                            <div className="map">
                                <p>Aqui terá um mapa para selecionar a localização do cliente</p>
                            </div>

                            <div className="field">
                                <label htmlFor="cel">Cidade do Cliente</label>
                                <input 
                                    type="text"
                                    name="city"
                                    id="city"
                                    value={city}
                                    onChange = {e => setCity(e.target.value)}
                                />
                            </div>
                        </fieldset>
                    </div>
                </div>
                <button type="submit">Cadastrar</button>
            </form>
            <Footer />
        </div>
    );
};

export default CreateClient;