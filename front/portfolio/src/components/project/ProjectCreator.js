import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import update from 'react-addons-update';

import { Container, InputGroup, FormControl, Row, Col, Button } from 'react-bootstrap';
import { createProject } from '../../apis/ProjectAPI';

class ProjectCreator extends Component {

    constructor(props) {

        super(props);
        this.state = {
            project : {}
        };

    }

    saveProject() {

        const attributes = [
            "title",
            "brief",
        ];

        let {project} = this.state;
        console.log("save", project);

        let hasNull = false;
        attributes.forEach( (attribute) => {
            if (typeof project[attribute] === 'undefined' || project[attribute] === '' ) 
                hasNull = true;
        })

        if (hasNull) {
            
            alert("Has Null !");
            return;

        }

        this.props.dispatch(createProject(project));

        this.props.history.push('/projects');

    }

    cancel() {

        this.props.history.push('/projects');

    }

    handleChange(e) {

        let {name, value} = e.target;
        console.log(name, " : ", value);

        const { project } = this.state;
        const newProject = update(project, {$merge : {[name] : value}});

        this.setState({
            project: newProject
        });

    }


    render () {
        return (
            <Container className="project-modify">

            {/** title */}
            <InputGroup size="lg"   >
                <InputGroup.Prepend  >
                <InputGroup.Text>Title</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl onChange={this.handleChange.bind(this)} name="title" placeholder="Title" />
            </InputGroup>

            {/** brief */}
            <InputGroup size="lg" className="mb-3" >
                <InputGroup.Prepend >
                <InputGroup.Text>Brief</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl as="textarea" onChange={this.handleChange.bind(this)} name="brief" placeholder="Brief" />
            </InputGroup>

            {/** url */}
            <InputGroup size="lg" className="mb-3" >
                <InputGroup.Prepend >
                <InputGroup.Text>Url</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl onChange={this.handleChange.bind(this)} name="url" placeholder="Url" />
            </InputGroup>

            <InputGroup as={Row}>
                <Col sm={{ span: 1,  offset: 2 }}>
                <Button size='lg' onClick={this.saveProject.bind(this)}>Save</Button>
                </Col>
                <Col sm={{ span: 1, offset: 1 }}>
                <Button variant='danger' size='lg' onClick={this.cancel.bind(this)} >Cancel</Button>
                </Col>
            </InputGroup>
            </Container>
        );

    }

}


const mapStateToProps = (state) => {
    console.log("state : " , state);
    return {project: state};
};

  
export default withRouter( connect(
    mapStateToProps
)( ProjectCreator ) );
