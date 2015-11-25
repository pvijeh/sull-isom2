/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './CaseStudy.scss';
import $ from 'jquery'; 
import withStyles from '../../decorators/withStyles';
import ExeNv from 'exenv'; 

// function to create full page scrolling effect
function singlePageScrolling (){

    if (ExeNv.canUseDOM){

        $('.js--onePageScroll').addClass('js--onePageScroll--jsActive'); 

        let wHeight = $( window ).height();
        let currentSection = 0; 
        let totalSections = $( ".js--section" ).length; 
        let scrollRunning = false; 

            function scrollTimeout(){
                scrollRunning = true;
                setTimeout(function(){
                    scrollRunning = false; 
                },1300)
            }

            function scrollUp(){
                if (currentSection > 0 && scrollRunning == false ){
                     --currentSection;
                    $( ".js--section" ).first().css({
                      marginTop: '-'+wHeight*currentSection+'px',
                    });
                    scrollTimeout()
                }
            }

            function scrollDown(){
                if (currentSection < totalSections -1 && scrollRunning == false ){
                    ++currentSection; 
                   $( ".js--section" ).first().css({
                    marginTop: '-'+wHeight*currentSection+'px',
                  });
                scrollTimeout()
                }
            }

            //scroll on mouse wheel scroll 
            $(document).on( 'DOMMouseScroll mousewheel', function ( event ) {
                event.preventDefault();
                if (scrollRunning == false){
                        if( event.originalEvent.wheelDelta / 120 > 0 ) { 
                        scrollUp();
                      } else {
                        scrollDown();
                      }
                      //prevent page fom scrolling
                      return false;
                }
            });        

            // scroll on keyboard down arrow / up arrow 
        function checkKey(e) {
            var event = window.event ? window.event : e;
            console.log(event.keyCode)
        }

        document.onkeydown = checkKey;

        function checkKey(e) {
            e = e || window.event;
            if (e.keyCode == '38') {  
                event.preventDefault();
                 scrollUp();
            }
            else if (e.keyCode == '40') {
                event.preventDefault(); 
                scrollDown();
            }
        }
    }
}

// unbind full page scrolling function 
function unbindScrollEvents(){
            $(document).unbind();
            $(window).unbind(); 
}

@withStyles(styles)
class CaseStudy extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  componentDidMount(){
            if (ExeNv.canUseDOM){ 
            singlePageScrolling();
            console.log(this.props.content);

            console.log(this.props.content.meta.case_study_slides);
        }
    }

    componentWillUnmount(){
        if (ExeNv.canUseDOM){ 
            unbindScrollEvents(); 
        }
    }

  render() {



    return (
        <div className="js--onePageScroll">
            <section className="js--section CaseStudy-ContentWrapper">
                  <div className="CaseStudy-InnerWrapper">
                    <div className="CaseStudy-InnerCell">
                      <div className="caseStudyContentSection caseStudyImage">1</div>
                        <div className="caseStudyContentSection caseStudyText">
                            <div className="caseStudyTextInner">
                                <h3>Case Study Section Title</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit doloribus animi distinctio repellendus ratione sed fugiat, unde harum ipsum nemo ea quae laborum, iste nihil voluptatibus nostrum consequatur dicta aperiam?</p>
                            </div>
                            </div>
                        </div>
                  </div>
            </section>
            <section className="js--section CaseStudy-ContentWrapper">
                  <div className="CaseStudy-InnerWrapper">
                    <div className="CaseStudy-InnerCell">
                      <div className="caseStudyContentSection caseStudyImage">2</div>
                        <div className="caseStudyContentSection caseStudyText">
                            <div className="caseStudyTextInner">
                                <h3>Case Study Section Title</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit doloribus animi distinctio repellendus ratione sed fugiat, unde harum ipsum nemo ea quae laborum, iste nihil voluptatibus nostrum consequatur dicta aperiam?</p>
                            </div>
                            </div>
                        </div>
                  </div>
            </section>
            <section className="js--section CaseStudy-ContentWrapper">
                  <div className="CaseStudy-InnerWrapper">
                    <div className="CaseStudy-InnerCell">
                      <div className="caseStudyContentSection caseStudyImage">3</div>
                        <div className="caseStudyContentSection caseStudyText">
                            <div className="caseStudyTextInner">
                                <h3>Case Study Section Title</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit doloribus animi distinctio repellendus ratione sed fugiat, unde harum ipsum nemo ea quae laborum, iste nihil voluptatibus nostrum consequatur dicta aperiam?</p>
                            </div>
                            </div>
                        </div>
                  </div>
            </section>
            <section className="js--section CaseStudy-ContentWrapper">
                  <div className="CaseStudy-InnerWrapper">
                    <div className="CaseStudy-InnerCell">
                      <div className="caseStudyContentSection caseStudyImage">4</div>
                        <div className="caseStudyContentSection caseStudyText">
                            <div className="caseStudyTextInner">
                                <h3>Case Study Section Title</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit doloribus animi distinctio repellendus ratione sed fugiat, unde harum ipsum nemo ea quae laborum, iste nihil voluptatibus nostrum consequatur dicta aperiam?</p>
                            </div>
                            </div>
                        </div>
                  </div>
            </section>
            <section className="js--section CaseStudy-ContentWrapper">
                  <div className="CaseStudy-InnerWrapper">
                    <div className="CaseStudy-InnerCell">
                      <div className="caseStudyContentSection caseStudyImage">5</div>
                        <div className="caseStudyContentSection caseStudyText">
                            <div className="caseStudyTextInner">
                                <h3>Case Study Section Title</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit doloribus animi distinctio repellendus ratione sed fugiat, unde harum ipsum nemo ea quae laborum, iste nihil voluptatibus nostrum consequatur dicta aperiam?</p>
                            </div>
                            </div>
                        </div>
                  </div>
            </section>
            <section className="js--section CaseStudy-ContentWrapper">
                  <div className="CaseStudy-InnerWrapper">
                    <div className="CaseStudy-InnerCell">
                      <div className="caseStudyContentSection caseStudyImage">6</div>
                        <div className="caseStudyContentSection caseStudyText">
                            <div className="caseStudyTextInner">
                                <h3>Case Study Section Title</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit doloribus animi distinctio repellendus ratione sed fugiat, unde harum ipsum nemo ea quae laborum, iste nihil voluptatibus nostrum consequatur dicta aperiam?</p>
                            </div>
                            </div>
                        </div>
                  </div>
            </section>

        </div>  
    );
  }

}

export default CaseStudy;