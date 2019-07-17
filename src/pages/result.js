import React, { Component } from 'react';
import { connect } from 'react-redux';
import NumberHelper from '../utils/number-helper';

import QuizError from '../components/quiz-error/quiz-error';
import { fetchResult } from '../actions/quiz-actions';

import ChoozeQuizPage from '../pages/choose-quiz';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/result/result.scss';
import { Row, Col, Button } from 'react-bootstrap';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';


class ResultPage extends Component {

   state = {
	   showHomePage: false
   }

   componentDidMount() {	 
	   this.setState({ showHomePage: false });
       this.props.fetchResult(this.props.quizId, this.props.answers);
   }
  

   showTab() {
	   const username = this.props.username;
	   const result = this.props.result;
	   const correctProcentage = NumberHelper.getProcentage(result.correct, result.total);

	   if (!this.state.showHomePage) {
		   return (
			   <div className='result'>
				 <Row>  
					<Col md='12'> Result, <span className='username'> {username} </span> </Col>
				 </Row>
				  <Row> 
					<Col md='6'> correct
						  <span className='correct'> {result.correct} </span>
							out of {result.total } 
					</Col>
					<Col md='6'>
  					 score:
					<span className={this.getProcentageColor(correctProcentage)}> {correctProcentage} % </span> </Col>
				 </Row>
				 <Row>
					<Col md='6'> 
					   Try Again?
					</Col>
					<Col md='6'> 
					   <Button variant="outline-info" value="full-list"
						onClick={(e) => { 
							this.restart();
						}}>Restart</Button>
					</Col>
				 </Row>
			   </div>
		   ) 
	   } else {
		  return this.renderRedirectHome();
	   }
   }
   
   getProcentageColor(correctProcentage) {
	   let cl = 'bad';
	   if (correctProcentage >= 50 && correctProcentage < 70) {
		   cl = 'semi';
	   } else if (correctProcentage >= 70) {
		   cl = 'good';
	   }
	   return cl;
   }
   
   restart() {
	   this.setState({ showHomePage: true });
   }
   
   renderRedirectHome() {
	  return <ChoozeQuizPage restart={true} />
   }

   render() {
      if (this.props.result) {
          return (
              <div>
                {this.showTab()}
              </div>
         );
      } 
      else {
         return(<QuizError page='Result' items={this.props.result}
                       loading={this.props.loading}
                       errors={this.props.errors}
          />);
      }
   }

}

// Make result available in props
function mapStateToProps(state) {
  return {
      result: state.quizStore.result,
      loading: state.quizStore.loading,
      errors: state.quizStore.errors
  }
}

export default connect(mapStateToProps, {fetchResult})(ResultPage);
