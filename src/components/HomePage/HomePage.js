/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './HomePage.scss';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';


@withStyles(styles)
class HomePage extends Component {

  render() {

    return (
          <div className="HomePage">
            <div className="HomePage-container">
               <a href="/work/casestudyone" onClick={Link.handleClick}>
                <div className="HomePage-ContentItem HomePage-ContentItem--1">
                  <img className="HomePage-ContentImage" src={require('./FastCo.jpg')}/>
                  <p>2015 Innovation by Design Award Finalist</p>
                </div>
              </a>
              <a href="/work/casestudytwo" onClick={Link.handleClick}>
                <div className="HomePage-ContentItem HomePage-ContentItem--2">
                  <img className="HomePage-ContentImage" src={require('./CornellTech_Demonstration1-copy.jpg')} />
                  <p>Cornell Tech</p>
                </div>
              </a>
              <a href="/work/casestudythree" onClick={Link.handleClick}>
                <div className="HomePage-ContentItem HomePage-ContentItem--3">
                  <img className="HomePage-ContentImage" src={require('./1178625-new_yankee_stadium_flag_unfurled.jpg')}/>
                  <p>Baseball Hall of Fame</p>
                </div>
              </a>
              <a href="/work/casestudyfour" onClick={Link.handleClick}>
                <div className="HomePage-ContentItem HomePage-ContentItem--4">
                  <h3 className="HomePage-contentTitle">Want to reclaim the word "Brand"? Ban it from your vocabulary</h3>
                  <p>John Paolini ECD</p>
                </div>
              </a>
                <div className="HomePage-ContentItem HomePage-ContentItem--6">
                </div>
              <a href="/work/casestudyfive" onClick={Link.handleClick}>
                <div className="HomePage-ContentItem HomePage-ContentItem--5">
                  <img className="HomePage-ContentImage" src={require('./saffron_tuenti_case_01.jpg')}/>
                  <p>Lorem ipsum dolor sit amet, consectetur.</p>
                </div>
              </a>
            </div>
          </div>
    );
  }

}

export default HomePage;

