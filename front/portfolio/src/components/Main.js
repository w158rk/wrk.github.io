import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage';
import Contact from './Contact';
import Resume from './Resume';
import ProjectsContainer from './projects/ProjectsContainer';
import ProjectContainer from './project/ProjectContainer';

const Main = () => (

    <Switch>

        <Route exact path="/" component={LandingPage} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
        <Route path="/projects" component={ProjectsContainer} />
        <Route path="/project/add" 
                render = {props => <ProjectContainer {...props} mode="add" />} />
        <Route path="/project/update/:id" 
                render = {props => <ProjectContainer {...props} mode="edit" />} />
        <Route path="/project/:id" 
                render = {props => <ProjectContainer {...props} mode="show" />} />

    </Switch>

);

export default Main;