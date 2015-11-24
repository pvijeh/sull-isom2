/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './App.scss';
import withContext from '../../decorators/withContext';
import withStyles from '../../decorators/withStyles';
import Header from '../Header';
import Navigation from '../Navigation';
import Search from '../Search';
import AppStore from '../../stores/appStore'; 
import TransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import $ from 'jquery'; 
import ExeNv from 'exenv'; 


let getPopupState = function() {
  return {
    popupState: AppStore.sendPopupState()
  };   
};

@withContext
@withStyles(styles)
class App extends React.Component {
constructor (props) {
    super(props)
    this.state =  { 
      popupState: 'none', 
      DropDownMenuType : 'push'
    }
    this.changePopupState = this.changePopupState.bind(this);
  }

  // need to get state from store here 
  changePopupState () {
    this.setState({
      popupState: getPopupState().popupState
    })
}

componentWillMount () {
  AppStore.addChangeListener(this.changePopupState);

  // show popup on page load 
  if (ExeNv.canUseDOM == true && this.state.DropDownMenuType == "push" ){
    setTimeout(function(){
      
      this.setState({
        popupState: 'Search'
      })

        // scroll to top of window 
        $('html, body').animate({
          scrollTop: 0
        },300); 

    }.bind(this), 4000); 
  
  }

}

  componentWillUnmount() {
    AppStore.removeChangeListener(this.changePopupState);
  }

  handleDropSelectorChange = event => {
    console.log(event); 
    this.setState({
      DropDownMenuType: event 
    }); 
  }

  static propTypes = {
    children: PropTypes.element.isRequired,
    error: PropTypes.object
  };

  render() {
        let popUpContent = ''

//  need to set the value of this switch using state so that it can be changed on click of the nav item things. 

        switch (this.state.popupState) {
                case 'None':
                popUpContent = ''
                break;
                case 'Navigation':
                popUpContent = <Navigation DropDownMenuType={this.state.DropDownMenuType} />
                break;
                case 'Search':
                popUpContent = <Search DropDownMenuType={this.state.DropDownMenuType} />
                break;
                default:
                popUpContent = ''
                break; 
        }

    return !this.props.error ? (
      <div>
        <Header popupState={this.state.popupState} DropDownMenuType={this.state.DropDownMenuType}/>
          <TransitionGroup transitionName={'App-Popup--'+this.state.DropDownMenuType} transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
            {popUpContent}
          </TransitionGroup>
        {this.props.children}
        <div className="App-DropDownSelector">
          <label>
              <input type="radio" name=" displayType" onChange={this.handleDropSelectorChange.bind(this, "fade")}/>
               fade in over content
          </label>
          <label>
              <input type="radio" name=" displayType" onChange={this.handleDropSelectorChange.bind(this, "push")}/>
               push content down
          </label>
        </div>
      </div>
    ) : this.props.children;
  }

}

export default App;
