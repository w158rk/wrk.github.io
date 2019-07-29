import React, {Component } from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import Project from './Project';
import ProjectCreator from './ProjectCreator';
import ProjectEditor from './ProjectEditor';

import ProjectStore from '../../stores/ProjectStore';


class ProjectContainer extends Component {

    render() {

        console.log(this.props.mode);    

        if(this.props.mode === 'add') {
            return (
                <Provider store={ProjectStore}>
                    <ProjectCreator />
                </Provider>
            );
        }

        const { id } = this.props.match.params;
        let id_num = parseInt(id);

        if(this.props.mode === 'edit') {
            return (
                <Provider store={ProjectStore}>
                    <ProjectEditor />
                </Provider>
            );
        }

        return (
            <Provider store={ProjectStore}>
                <Project id={id_num} />
            </Provider>
        )


    }

}



/** 
 * @param mode
 *      'add' for creating
 *      'show' for display
 *      'edit' for updating
 */
ProjectContainer.propTypes = {
    mode : PropTypes.string.isRequired
}

export default ProjectContainer;