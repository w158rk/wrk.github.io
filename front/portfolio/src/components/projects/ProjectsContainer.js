import React, {Component } from 'react';
import { Provider } from 'react-redux';

import Projects from './Projects';
import projectStore from '../../stores/ProjectsStore';

class ProjectsContainer extends Component {

    render() {

        console.log("render projects container");

        return (

            <Provider store={projectStore}>
                <Projects />
            </Provider>

        );

    }

}

export default ProjectsContainer;