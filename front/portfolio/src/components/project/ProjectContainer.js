import React, {Component } from 'react';
import { Provider } from 'react-redux';

import Project from './Project';
import ProjectStore from '../../stores/ProjectStore';

class ProjectContainer extends Component {

    render() {

        const { id } = this.props.match.params;
        let id_num = parseInt(id);
        console.log("render project container");    

        return (
            <Provider store={ProjectStore}>
                <Project id={id_num} />
            </Provider>
        )


    }

}

export default ProjectContainer;