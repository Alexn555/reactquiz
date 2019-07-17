import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuizError from '../components/quiz-error/quiz-error';

import { fetchAnswers } from '../actions/quiz-actions';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/answer-list/answer-list.scss';
import { MOBILE_SCREEN_WIDTH } from '../types/mobileVars';
import { Row, Col, Button } from 'react-bootstrap';


class AnswerListPage extends Component {

   state = {
	   screenWidth: 0,
   }

   componentDidMount() {	 
      this.props.fetchAnswers(this.props.quizId, this.props.questionId);
	  this.updateWindowDimensions();
	  window.addEventListener('resize', this.updateWindowDimensions.bind(this));
   }
  
   updateWindowDimensions() {
	  this.setState({ screenWidth: window.innerWidth });
   }
  

   showTab() {
	   const answers = this.props.answers; // possible answers, one is correct
	   const self = this;
	   
       return (
           <div>
		     <Row className='answers-wrapper'>
				<Col>
			     {answers.map(function(item, index){
                    return<Button className='answer-item' key={item.id}  
					   onClick={(e) => { 
							self.nextQuestion(item);
						  }}>
						{item.title}
					</Button>;
                  })}
				</Col>
			 </Row>
           </div>
       ) 
   }
   
   nextQuestion(item) {
	   this.props.onSelectedAnswer(item);// send to parent (questions page)
	   setTimeout(() => {
		    this.props.fetchAnswers(this.props.quizId, this.props.questionId);
	   }, 500);
   }
   

   render() {
      if (this.props.answers.length > 0) {
          return (
              <div>
                {this.showTab()}
              </div>
         );
      } 
      else {
         return(<QuizError page='Answers' items={this.props.answers}
                       loading={this.props.loading}
                       errors={this.props.errors}
          />);
      }
   }

}

// Make answers  array available in  props
function mapStateToProps(state) {
  return {
      answers: state.quizStore.answers,
      loading: state.quizStore.loading,
      errors: state.quizStore.errors
  }
}

export default connect(mapStateToProps, {fetchAnswers})(AnswerListPage);
