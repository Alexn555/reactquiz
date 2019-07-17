import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuizError from '../components/quiz-error/quiz-error';
import ProgressBar from '../components/progress-bar/progress-bar';
import AnswerListPage from '../pages/answer-list';
import ResultPage from '../pages/result';

import { fetchQuestions } from '../actions/quiz-actions';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/question-list/question-list.scss';
import { Button } from 'react-bootstrap';


class QuestionListPage extends Component {

   state = {
	   currentQuestionIndex: 0,
	   screenWidth: 0,
	   quizId: 141,
	   answers: []
   }

   componentDidMount() {
	  this.setState({ quizId: this.props.quizId });
	  const quizId = this.props.quizId; //todo get from cookie 
      this.props.fetchQuestions(quizId);
   }
 

   filterSwitchWatchLater() {
	  if (this.state.watchLaterOn) {
		 return (<Button variant="outline-info" value="full-list"
                    onClick={(e) => { console.log(' button ');
					}}>Full list</Button>);
	  }
   }
  

   showTab() {
	   const questions = this.props.questions;
	   const currentNumber = this.state.currentQuestionIndex + 1;
	   const question = questions[this.state.currentQuestionIndex];
	   
	   if (currentNumber <= questions.length) {
		    return (
			   <div>
				 <h3> Question # {currentNumber} id: {question.id} | {question.title} </h3>
				 <AnswerListPage onSelectedAnswer={this.handleAnswer.bind(this)} quizId={this.state.quizId} questionId={question.id} />
				 <ProgressBar currentIndex={this.state.currentQuestionIndex} itemLength={questions.length} />
			   </div>
		   ) 
	   } else {
		    return (
			   <div>
				 <ResultPage username={this.props.username} quizId={this.state.quizId} answers={this.state.answers} />
			   </div>
		   ) 
	   }
   }
   
   handleAnswer(answer) { // from answer page
	   let newQuestionIndex = this.state.currentQuestionIndex + 1;
	   let updAnswers = this.state.answers;
	   updAnswers.push(answer);
	   
	   setTimeout(() => { 
		   this.setState({
			   currentQuestionIndex: newQuestionIndex,
			   answers: updAnswers
		   });
	   }, 500);
   }
   

   render() {
      if (this.props.questions.length > 0) {
          return (
              <div>
                {this.showTab()}
              </div>
         );
      } 
      else {
         return(<QuizError page='Questions' items={this.props.questions}
                       loading={this.props.loading}
                       errors={this.props.errors}
          />);
      }
   }

}

// Make questions  array available in  props
function mapStateToProps(state) {
  return {
      questions: state.quizStore.questions,
      loading: state.quizStore.loading,
      errors: state.quizStore.errors
  }
}

export default connect(mapStateToProps, {fetchQuestions})(QuestionListPage);
