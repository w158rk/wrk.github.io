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

    removeProject() {

        const {project} = this.props; 

        this.props.dispatch(deleteProject(project.id))
        .then(this.props.history.push("/projects"));

        
    }

    modifyProject() {

        const {id} = this.props.project;
        this.props.history.push(`/project/update/${id}`);

    }

    render() {
        const {project} = this.props;

        return (
            <div className = 'project-display'>
                <h1> {project.title} </h1>
                <p> {project.brief} </p>
                
                
                {project.url==='' ? {} : <a href={project.url}>Wiki Home</a>}
                
                <nav>
                <Button raised colored onClick={this.modifyProject.bind(this)}> Modify </Button>
                <Button raised accent onClick={this.removeProject.bind(this)}> Delete </Button>
                </nav>
            </div>
        )
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
