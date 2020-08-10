import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import CreateClient from './pages/CreateClient';
import ListClients from './pages/ListClients';
import MapClients from './pages/MapClients';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={CreateClient} path="/cadastrar" />
            <Route component={ListClients} path="/index" />
            <Route component={MapClients} path="/map" />
        </BrowserRouter>
    );
};

export default Routes;