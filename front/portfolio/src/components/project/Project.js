import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'

import { Button, Grid, Cell } from 'react-mdl';

import { fetchProject, deleteProject } from '../../apis/ProjectAPI';

class Project extends Component {

    constructor(props) {

        super(props);
    
    }

    componentDidMount() {

        console.log("mount project");   

        const {id, dispatch} = this.props;
        dispatch(fetchProject(id));

    }

    display () {

        const {project} = this.props;

        return (
            <div className = 'project-display'>
                <h1> {project.title} </h1>
                <p> {project.brief} </p>
                <nav>
                <Button raised colored> Modify </Button>
                <Button raised accent> Delete </Button>
                </nav>
            </div>
        )

    }

    removeProject() {

        const {project} = this.props; 

        this.props.dispatch(deleteProject(project))
        .then(this.props.history.push("/project"));

        
    }

    render() {
        return this.display();
    }

}

Project.propTypes = {

    id : PropTypes.number.isRequired

}

const mapStateToProps = (state) => {
    return {project: state};
};

export default withRouter( connect(
    mapStateToProps
)( Project ) );
