import React from 'react';
import {DefaultRoute, NotFoundRoute, Route} from 'react-router';
import App from '../components/App';
import LoginPage from '../components/LoginPage';
import HomePage from '../components/UserHomePage';
import RegisterPage from '../components/RegisterPage';
import SetPassword from '../components/SetPassword';
import NotFound from '../components/NotFoundPage';

module.exports = [
    <Route path="/" handler={App} >
      <DefaultRoute handler={HomePage} />
      <Route name="login" path="/login" handler={LoginPage}/>
      <Route name="home" handler={HomePage}/>
      <Route name="register" path="/register" handler={RegisterPage}/>
      <Route name="signup" path="/signup" handler={SetPassword}/>
      <Route name="about" path="/notfound" handler={NotFound}/>
      <Route name="contact" path="/notfound" handler={NotFound}/>
      <Route name="privacy" path="/notfound" handler={NotFound}/>
      <Route name="notfound" path="/notfound" handler={NotFound}/>
      <NotFoundRoute handler={NotFound}/>
    </Route>
];