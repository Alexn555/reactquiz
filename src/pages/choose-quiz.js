import React, { Component } from 'react';
import { connect } from 'react-redux';

import QuizError from '../components/quiz-error/quiz-error';
import { fetchQuizzes } from '../actions/quiz-actions';
import QuestionListPage from '../pages/question-list';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/question-list/question-list.scss';
import { Form, FormGroup, FormControl, FormLabel, InputGroup, Row, Col,
  DropdownButton, DropdownItem, Button } from 'react-bootstrap';


class ChoozeQuizPage extends Component {

    state = {
 	   screenWidth: 0,
	   isQuizChoosen: false,
	   username: '',
	   quizId: 0
    }
 
    componentDidMount() {	 
	    this.setState({ isQuizChoosen: false });
        this.props.fetchQuizzes();
    }
   
    handleChange = event => {
        this.setState({ [event.target.id]: event.target.value });
    }
	
	handleSelect = (evtKey, evt) => {
		this.setState({ quizId: evtKey });
	}
	
	validateForm() {
        return this.state.username.length > 0 && this.state.quizId > 0;
    }
  
    showTab() {
	   const quizzes = this.props.quizzes;
	   const quizTitle = this.state.quizId > 0 ? 'Quiz ' + this.state.quizId : 'Select quiz';
	   
	   if (!this.state.isQuizChoosen) {
         return (
           <div>
			<Row>
				<Col md='12'> Good day, please choose username and quiz </Col>
			</Row>
			<Row>
				<Col md='6'> 
					 <Form>
						  <FormGroup controlId="username">
							<FormLabel>Username</FormLabel>
							<FormControl
								autoFocus
								type="text"
								value={this.state.username}
								onChange={this.handleChange}
							/>
						  </FormGroup>

						  <FormGroup controlId="formSelectQuiz">
							<DropdownButton
							  as={InputGroup.Append}
							  onSelect={this.handleSelect}
							  variant="outline-secondary"
							  title={quizTitle}
							  id="input-quizzes"
							>
							  {quizzes.map(function(item, index){
								return  <DropdownItem key={item.id} eventKey={item.id} href="#">Quiz {item.id} | {item.title}
									</DropdownItem>;
						      })}
							</DropdownButton>
						  </FormGroup>
						</Form>
				</Col>
			</Row>
			<Row>
				<Col md='12'>
					<Button variant="outline-info" className='start-quiz' value="full-list" disabled={!this.validateForm()}
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
	   this.setState({ isQuizChoosen: true });
   }
   
   renderRedirect() {
	 if (this.state.isQuizChoosen) { //refresh to select row
		return <QuestionListPage username={this.state.username} quizId={this.state.quizId} />
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
