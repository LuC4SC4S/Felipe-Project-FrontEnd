import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import CreateClient from './pages/CreateClient';
import ListClients from './pages/ListClients';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={CreateClient} path="/cadastrar" />
            <Route component={ListClients} path="/index" />
        </BrowserRouter>
    );
};

export default Routes;