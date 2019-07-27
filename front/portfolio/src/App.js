import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import  Main  from  './components/Main';

function App() {
  return (
    <div className="demo-big-content">
        <Layout>
            <Header className='header-color' title="R W" to="/" scroll>
                <Navigation>
                    <Link to="/">Home</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/project">Projects</Link>
                    <Link to="/blog">Blogs</Link>
                    <Link to="/contact">Contact</Link>
                </Navigation>
            </Header>
            <Drawer title="R W">
                <Navigation>
                    <Link to="/">Home</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/project">Projects</Link>
                    <Link to="/blog">Blogs</Link>
                    <Link to="/contact">Contact</Link>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
            </Content>
        </Layout>
        <Main />
    </div>  
  );
}

export default App;
