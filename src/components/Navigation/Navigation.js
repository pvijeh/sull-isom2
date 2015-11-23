/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import classNames from 'classnames';
import styles from './Navigation.scss';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';
import CloseModal from '../CloseModal';

@withStyles(styles)
class Navigation extends React.Component{

  static propTypes = {
    className: PropTypes.string
  };

  render() {
    return (
        <div className={'Navigation-wrapper Navigation-wrapper--'+this.props.DropDownMenuType}>
          <div className="Navigation-inner">
            <CloseModal />
            <div className="Navigation-content">
              <a className="Navigation-link" href="/" onClick={Link.handleClick}>Home</a><br/>
              <a className="Navigation-link" href="/about" onClick={Link.handleClick}>About</a><br/>
              <a className="Navigation-link" href="/work" onClick={Link.handleClick}>Work</a><br/>
              <a className="Navigation-link" href="/news" onClick={Link.handleClick}>News</a><br/>
              <a className="Navigation-link" href="/contact" onClick={Link.handleClick}>Contact</a>
            </div>
          </div>
      </div>
    );
  }

}

export default Navigation;


