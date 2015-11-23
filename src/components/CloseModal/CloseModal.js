/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import classNames from 'classnames';
import styles from './CloseModal.scss';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

import AppDispatcher from '../../core/Dispatcher';
import AppActions from '../../actions/appActions';
import AppStore from '../../stores/appStore';

@withStyles(styles)

class CloseModal extends React.Component{

  onCloseModalClick = event => {
  AppActions.displayPopup(event);
}

  static propTypes = {
    className: PropTypes.string
  };

  render() {
    return (
        <div className="CloseModal-wrapper" onClick={this.onCloseModalClick.bind(this, 'None')}>
        &times;
      </div>
    );
  }
}

export default CloseModal;


