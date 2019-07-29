import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import update from 'react-addons-update';

import { Container, InputGroup, FormControl, Row, Col, Button } from 'react-bootstrap';
import { updateProject } from '../../apis/ProjectAPI';

class ProjectEditor extends Component {

    constructor(props) {

        super(props);
        this.state = {
            project : {
                title : '',
                brief : '',
                url : ''
            }
        };

    }

    componentDidMount () {
        
        let { project } = this.props;
        console.log("props.project : " , project);
        this.setState({
            project : project
        });

    }

    submitProject() {

        const attributes = [
            "title",
            "brief",
        ];

        let {project} = this.state;

        let hasNull = false;
        attributes.forEach( (attribute) => {
            if (typeof project[attribute] === 'undefined' || project[attribute] === '' ) 
                hasNull = true;
        })

        if (hasNull) {
            
            alert("Has Null !");
            return;

        }

        this.props.dispatch(updateProject(this.props.project, project));

        this.props.history.push(`/project/${project.id}`);

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

        let { project } = this.state;
        console.log("state.project : " , project);

        return (
            <Container className="project-modify">

            {/** title */}
            <InputGroup size="lg"   >
                <InputGroup.Prepend  >
                <InputGroup.Text>Title</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl onChange={this.handleChange.bind(this)} 
                                name="title" value={project.title} />
            </InputGroup>

            {/** brief */}
            <InputGroup size="lg" className="mb-3" >
                <InputGroup.Prepend >
                <InputGroup.Text>Brief</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl as="textarea" onChange={this.handleChange.bind(this)} 
                                name="brief" value={project.brief} />
            </InputGroup>

            {/** url */}
            <InputGroup size="lg" className="mb-3" >
                <InputGroup.Prepend >
                <InputGroup.Text>Url</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl onChange={this.handleChange.bind(this)} 
                            name="url" value={project.url} />
            </InputGroup>

            <InputGroup as={Row}>
                <Col sm={{ span: 1,  offset: 2 }}>
                <Button size='lg' onClick={this.submitProject.bind(this)}>Save</Button>
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
    return {project: state};
};

  
export default withRouter( connect(
    mapStateToProps
)( ProjectEditor ) );
