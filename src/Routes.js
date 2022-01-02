import React from 'react';
import {
    BrowserRouter as BRouter,
    Switch,
    Route
} from 'react-router-dom';

import Search from './pages/search';
import Home from './pages/Home';
import Repos from './pages/Repos';
import Followers from './pages/Followers';
import Following from './pages/Following';
    

const Routes = () => (
    <BRouter basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route path="/" exact component={ Search } />
            <Route path="/Home" exact component={ Home } />
            <Route path="/Repos" exact component={ Repos } />
            <Route path="/Followers" exact component={ Followers} />
            <Route path="/Following" exact component={ Following} />
        </Switch>
    </BRouter>
);

export default Routes;