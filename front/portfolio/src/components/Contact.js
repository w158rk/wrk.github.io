import React, {Component } from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';


class Contact extends Component {

    render() {

        return (
            <div className="contact-body">
                <Grid className="contact-grid">

                    <Cell col={4}>
                        <h2>Wang Ruikai</h2> 
                        <img 
                            src="https://thumbs.dreamstime.com/z/profile-icon-male-avatar-portrait-casual-person-silhouette-face-flat-design-vector-46846328.jpg"
                            alt="avatar"
                            style={{height: '250px'}}
                        />                   
                        <p style={{width:'75%', margin: 'auto', paddingTop: '1em'}}>
                            There is some brief description for myself
                        </p>    
                    </Cell>

                    <Cell col={8}>

                        <h2> (Don't) Contact </h2>
                        <hr />

                        <div className='contact-list'>
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true" />
                                        (123) 456-7890
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px'}}>
                                        <i className="fa fa-fax" aria-hidden="true" />
                                        (123) 456-7890
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px'}}>
                                        <i className="fa fa-envelope" aria-hidden="true" />
                                        wrk15835@gmail.com
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px'}}>
                                        <i className="fa fa-skype" aria-hidden="true" />
                                        MySkypeId
                                    </ListItemContent>
                                </ListItem>

                            </List>
                        </div>

                    </Cell>
                </Grid>
            </div>
        )

    }
}

export default Contact;