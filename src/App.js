import React from 'react';
import { Container } from '@material-ui/core';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import Profile from './components/User/Profile';
import Chat from './components/Chat/Chat';


const App = () => (
  <BrowserRouter>
    <Container maxWidth="lg">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/chat" exact component={Chat} />
        <Route path="/auth" exact component={Auth} />
        <Route path="/user/profile" exact component={Profile}/>

     

      </Switch>
    </Container>
  </BrowserRouter>
);

export default App;
