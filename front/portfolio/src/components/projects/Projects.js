import React, {Component } from 'react';
import { connect } from 'react-redux';

import { Grid, Cell } from 'react-mdl';
import { Card, CardTitle, CardText, CardActions, CardMenu } from 'react-mdl';
import { Button, IconButton, FABButton, Icon} from 'react-mdl';

import { fetchProjects } from '../../apis/ProjectsAPI';

class Projects extends Component {

    constructor(props) {

        super(props);

    }

    componentDidMount() {

        console.log("did mount");
        this.props.dispatch(fetchProjects());

    }

    displayProjects() {

        const {projects} = this.props;

        console.log(projects);

            return (

                <div className="projects-grid">

                    <Grid>
                    {
                    projects.map( (project) => {
                        return (
                            <Cell key={project.id} col={4}>
                                <a href={"/project/" + project.id}>
                                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}} >
                                        <CardTitle style={{color: '#fff', height: '176px', background: 
                                            'url(https://www.thesslstore.com/blog/wp-content/uploads/2018/08/bigstock-Safety-Concept-Pixelated-Key-243299677.jpg) center / cover'}} >
                                        {project.title}
                                        </CardTitle>
                                        <CardText>
                                            {project.brief}
                                        </CardText>
                                        <CardActions border>
                                            <Button colored>Github</Button>
                                        </CardActions>
                                        <CardMenu style={{color: '#fff'}}>
                                            <IconButton name="share" />
                                        </CardMenu>
                                    </Card>
                                </a>
                            </Cell>
                        );
                    })
                    }
                    </Grid>

                    {/* FAB button with ripple */}
                    <a href='/project/add'>
                    <FABButton ripple>
                        <Icon name="add" />
                    </FABButton>
                    </a>

                </div>
            );

    }


    render() {

        console.log("render");

        return (
            <Grid>
                <Cell col={12}>
                    <div className='content>'>
                        {this.displayProjects()}
                    </div>
                </Cell>
            </Grid>
        )

    }
}

const mapStateToProps = (state) => {
    console.log("state : " , state);
    return {projects: state};
};

  
export default connect(
    mapStateToProps
)( Projects );
