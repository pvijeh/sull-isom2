/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import classNames from 'classnames';
import styles from './Search.scss';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';
import CloseModal from '../CloseModal';
import _ from 'lodash'; 
import TransitionGroup from 'react/lib/ReactCSSTransitionGroup';


    // these should be passed in as props
    let  states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
          'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
          'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
          'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
          'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
          'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
          'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
          'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
          'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming', 'brand'
        ];


@withStyles(styles)
class Search extends React.Component {
  constructor () {
    super()
    this.state =  {
      searchInputText: "looking for something?",
      searchPlaceHolderText: "looking for something?",
      autocomplete: ''
    }
}

  static propTypes = {
    className: PropTypes.string
  };

  handleSearchFocus = event => {
    this.setState({ searchInputText : '' });   
  }

  handleSearchInput = event => {
      
      let autocomplete = ''; 

      this.setState({ searchInputText : event.target.value });

      if (event.target.value.length > 0 ){
      
        _.each(states, function (stt, i){
            
            if(stt.toLowerCase().substring(0, event.target.value.length) === event.target.value.toLowerCase() ) {
            autocomplete = stt.toLowerCase(); 

          } 

        }); 

        // set placeholder text to autocomplete value 
        this.setState({ 
          searchPlaceHolderText : autocomplete,
          autocomplete: autocomplete
           });       


      } else if (event.target.value.length == 0) {
        this.setState({ 
          searchPlaceHolderText : 'Looking for something?', 
          autocomplete: ''
           });   
      }
  }

  handleEnterPress = event => {
    if (event.keyCode == '13' ){

      //
      //  prevent default key action 
      //
       event = event || window.event; // fallback to window.event in IE
      
      if(event.preventDefault){
          event.preventDefault(); 
      }
      
      if (event.stopPropagation) {
          event.stopPropagation();
      }

      //
      //  send search query somewhere 
      //
      
      console.log(this.state.searchInputText);

      return false; 
    }
  }

  render() {

    console.log(this.props.DropDownMenuType);

    let inputPrompt = "Looking for something?"; 
    let showSearchResults= '';

    if (this.state.autocomplete == 'brand' && this.state.searchInputText.length > 3 ) {
      showSearchResults = <SearchResults />
    } else {
      showSearchResults = ''; 
    }

    return (
        <div className={'Search-wrapper Search-wrapper--'+this.props.DropDownMenuType}>
            <div className="Search-inner">
                <CloseModal />
                <div className="Search-content">
                  <textarea rows="2" cols="20" autofocus="true" className="Search-input Search-input--js" onFocus={this.handleSearchFocus.bind(this)} value={this.state.searchInputText} onChange={this.handleSearchInput.bind(this)} onKeyDown={this.handleEnterPress.bind(this) }/>
                  <textarea rows="2" cols="30" className="Search-input Search-input--ghost" value={this.state.searchPlaceHolderText}/>
                </div>
                  <TransitionGroup transitionName="example" transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
                    {showSearchResults}
                  </TransitionGroup>
            </div>
      </div>
    );
  }

}

class SearchResults extends React.Component {

  render(){
    return(
      <div className="Search-resultsWrapper">
        <div className="Search-results Search-results--large">
          <div className="Search-resultsInner">
            <div className="Search-resultsImageContainer">
              <img src={require('./assets/HKUOGSLFJU31h3CEx6h8zuV-OsUOt3M7jhRj6nQ5wnQ.png')} />
            </div>
          </div> 
        </div>
        <div className="Search-results Search-results--small">
          <div className="Search-resultsInner">
            <div className="Search-resultsImageContainer">
              <img src={require('./assets/CornellTech.Folder.jpg')} />
            </div>
          </div>
        </div>
        <div className="Search-results Search-results--small">
          <div className="Search-resultsInner">
            <p>Want to reclaim the word "brand"? Ban it from your vocabulary.</p>
            <p className="Search-resultSubtitle">John Paolini ECD</p>
          </div>
        </div>
        <div className="Search-results Search-results--small">
          <div className="Search-resultsInner">
            <div className="Search-resultsImageContainer">
              <img src={require('./assets/cornell-logo.jpg')} />
            </div>
          </div>
        </div>
        <div className="Search-results Search-results--small">
          <div className="Search-resultsInner">
            <div className="Search-resultsImageContainer">
              <img src={require('./assets/unused/Eeb4ZjDsUs0BCdAc83ayNDFpW3RZd_iFzFgoewieDsQ.png')} />
              </div>
            </div>
        </div>
      </div>
      )
  }

}






export default Search;


