import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home/Home';
import NavigationBar from './components/Navbar/NavigationBar';
import Auth from './components/Auth/Auth';
import Profile from './components/User/Profile';
import Chat from './components/Chat/Chat';
import PostDetails from './components/PostDetails/PostDetails';

const App = () => {

  const user = JSON.parse(localStorage.getItem('profile'));
  console.log('[App] user: ', user);

  return (
        <BrowserRouter>
        <NavigationBar />
        <Container maxWidth="xl" style={{ marginTop: '99px'}}> 
          <Switch>
            <Route path="/" exact component={() => <Redirect to="/posts" />} />
            <Route path="/posts" exact component={Home}/>
            <Route path="/posts/search" exact component={Home}/>
            <Route path="/posts/:id"  component={PostDetails}/>
            <Route path="/chat" exact component={Chat} />
            <Route path="/auth" exact component={() => (user === null ? <Auth /> : <Redirect to="/posts" />)} />
            <Route path="/user/profile" exact component={Profile}/>
          </Switch>
        </Container>
      </BrowserRouter>
  );
}



export default App;
