/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import styles from './Header.scss';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';
import AppDispatcher from '../../core/Dispatcher';
import AppActions from '../../actions/appActions';
import AppStore from '../../stores/appStore';
import http from '../../core/HttpClient';
import $ from 'jquery'; 

@withStyles(styles)
class Header extends React.Component{

onNavClick = event => {
  AppActions.displayPopup(event);

  if (typeof window !=="undefined" && this.props.DropDownMenuType == "push"){ 
    $('html, body').animate({
      scrollTop: 0
    },300); 
  }
}

  
  render() {
    return (
      <div className="Header">
        <div className="Header-container">
            <p className="Header-branding">SULLIVAN</p>
            <a className="Header-icon Header-icon--right fa fa-search" onClick={this.onNavClick.bind(this, 'Search')}></a>
            <a className="Header-icon Header-icon--left fa fa-bars" onClick={this.onNavClick.bind(this, 'Navigation')}></a>
        </div>
      </div>
    );
  }

}

export default Header;


