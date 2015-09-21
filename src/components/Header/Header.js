  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import styles from './Header.less';
import withStyles from '../../decorators/withStyles';
import { Link } from 'react-router';
import Navigation from '../Navigation';

@withStyles(styles)
class Header {

  render() {
    console.log('Header.render()| props:', this.props);
    return (
      <div className="Header">
        <div className="Header-container">
          <Link className="Header-brand" to="/">
            <img className="Header-brandImg" src={require('./pulse-logo.png')} width="114" height="50" alt="closyaar" />
          </Link>
          <Navigation className="Header-nav" {...this.props}/>
          <div className="Header-banner">

          </div>
        </div>
      </div>
    );
  }

}

export default Header;
