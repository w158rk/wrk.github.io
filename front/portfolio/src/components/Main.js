import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage';
import Contact from './Contact';
import Resume from './Resume';

const Main = () => (

    <Switch>

        <Route exact path="/" component={LandingPage} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/resume" component={Resume} />

    </Switch>

);

export default Main;