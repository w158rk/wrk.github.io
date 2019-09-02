import React, {Component } from 'react';

class LandingPage extends Component {

    render() {

        return (
            <div className='landing-div'>
                <div className='mask-div'>  

                    <div className='avatar-div'>
                        <div className='avatar-mask'>
                        </div>
                    </div>

                    
                    {/* <div class="dimback">
                        <img src={avatar} class="dim"/>
                    </div> */}

                        <div className="banner-text">
                            <h1> Undergraduate Student </h1>
                            <hr /> 

                            <p>Cryptography | Security </p>

                            <div className="social-links">

                                {/* LinkedIn */ }
                                <a href="https://linkedin.com/in/rk-w-10577b172" rel="noopener noreferrer"  target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/* Github */ }
                                <a href="http://github.com/w158rk" rel="noopener noreferrer"  target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>

                            </div>
                        </div>
                </div>
            </div>
        )

    }
}

export default LandingPage;