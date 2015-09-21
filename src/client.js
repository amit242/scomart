import React from 'react';
import Router, {Route} from 'react-router';
import App from './components/App';
import appRoutes from './routes/Routes';
import RouterContainer from './services/RouterContainer';
import LoginAction from './actions/LoginAction';
import ClientDetection from './utils/ClientDetection';
import AuthService from './services/AuthService';
import AppActions from './actions/AppActions';
import ActionTypes from './constants/ActionTypes';
import FastClick from 'fastclick';
import CookieUtils from './utils/CookieUtils';


let path = decodeURI(window.location.pathname);
function run() {
  let dt = new Date();
  //alert();
  console.log('Client.run()| render start... ', dt.getHours() + ':' + dt.getMinutes() + ':' + dt.getSeconds() + ':' +  dt.getMilliseconds());
  var router = Router.create({
    location: Router.HistoryLocation,
    routes: appRoutes
  });
  RouterContainer.set(router);

  console.log('Client.run()| Path:', window.location, window.location.search);
  let jwt = localStorage.getItem('scomart-jwt');
  console.log('Client.run()| localStorage jwt:',jwt);
  let rememberuser = false;

  if (jwt) {
    rememberuser = true;
    AuthService.verifyJWT(jwt);
  }

  router.run(function (Handler) {
    let isMobile = ClientDetection.isMobile(navigator.userAgent);

    let props = {
      isMobile: {isMobile},
      context: {
        onSetTitle: value => {document.title = value; }
      }
    };
    console.log('Client.router.run()|  cookies:', document.cookie, CookieUtils.getCookie('rememberuser'));
    console.log('Client.router.run()|  react render props:', props, Handler.routes, Handler.getCurrentPathname());
    React.render(<Handler { ...props } rememberuser={CookieUtils.getCookie('rememberuser') === 'true'} />, document.getElementById('app'));
  });

  dt = new Date();
  console.log('Client.run()| render end... ', dt.getHours() + ':' + dt.getMinutes() + ':' + dt.getSeconds() + ':' +  dt.getMilliseconds());
}

try {
  console.log('promise client run:');
  Promise.all([
    new Promise((resolve) => {
      if (window.addEventListener) {
        window.addEventListener('DOMContentLoaded', resolve);
      } else {
        window.attachEvent('onload', resolve);
      }
    }).then(() => FastClick.attach(document.body))
  ]).then(run);
} catch(e) {
  // TODO: IE hack, find a better way to check if Promise is not defined
  console.log('Most probably you are running in IE, run without promise, error:', e);
  run(); // internet explorer
}

