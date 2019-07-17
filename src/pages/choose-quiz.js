import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

import QuizError from '../components/quiz-error/quiz-error';
import { fetchQuizzes } from '../actions/quiz-actions';
import QuestionListPage from '../pages/question-list';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/question-list/question-list.scss';
import { Form, InputGroup, Row, Col, Dropdown, DropdownButton, Button } from 'react-bootstrap';


class ChoozeQuizPage extends Component {

   state = {
 	  screenWidth: 0,
	  isQuizChoosen: false
   }
 
   componentDidMount() {	 
	  this.setState({ isQuizChoosen: false });
	  console.log(' ---> choose quiz ', this.state.isQuizChoosen);
      this.props.fetchQuizzes();
   }
  
   showTab() {
	   const quizzes = this.props.quizzes;
	   
	   if (!this.state.isQuizChoosen) {
         return (
           <div>
			<Row>
				<Col md='12'> Good day, please choose username and quiz </Col>
			</Row>
			<Row>
				<Col md='6'> 
					 <Form>
						  <Form.Group controlId="formUsername">
							<Form.Label>Username</Form.Label>
							<Form.Control type="text" placeholder="Username" />
							<Form.Text className="text-muted">
							  Minimum 3 symbols
							</Form.Text>
						  </Form.Group>

						  <Form.Group controlId="formSelectQuiz">
							<DropdownButton
							  as={InputGroup.Append}
							  variant="outline-secondary"
							  title="Dropdown"
							  id="input-quizzes"
							>
							  <Dropdown.Item href="#">Quiz 141 | Games </Dropdown.Item>
							  <Dropdown.Item href="#">Quiz 169 | Numbers </Dropdown.Item>
							</DropdownButton>
						  </Form.Group>
	
						   <Button variant="primary" type="submit">
							 Submit
						  </Button>
						</Form>
				</Col>
			</Row>
			<Row>
				<Col md='12'>
					<Button variant="outline-info" className='start-quiz' value="full-list"
						onClick={(e) => { 
						   this.startQuiz();
						}}>Start</Button>
				</Col>
			</Row>
           </div> );
	  } else {
		  return this.renderRedirect();
	  }
   }
   
   startQuiz() {
	   console.log(' start ');
	   this.setState({ isQuizChoosen: true });
   }
   
   renderRedirect() {
	 if (this.state.isQuizChoosen) { //refresh to select row
		/*return <Redirect to={
			pathname: '/questions',
	        state: { username: 'Alex', quizId: 141 }} /> */
		//return <Redirect to='/questions' />
		return <QuestionListPage username='Alex' quizId='141' />
	 }
   }

   render() {
      if (this.props.quizzes.length > 0) {
          return (
              <div>
                {this.showTab()}
              </div>
         );
      } 
      else {
         return(<QuizError page='Choose quiz' items={this.props.quizzes}
                       loading={this.props.loading}
                       errors={this.props.errors}
          />);
      }
   }

}

// Make quizzes  array available in  props
function mapStateToProps(state) {
  return {
      quizzes: state.quizStore.quizzes,
      loading: state.quizStore.loading,
      errors: state.quizStore.errors
  }
}

export default connect(mapStateToProps, {fetchQuizzes})(ChoozeQuizPage);
