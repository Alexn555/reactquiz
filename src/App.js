import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import ChooseQuizPage from './pages/choose-quiz';
import QuestionListPage from './pages/question-list';

class App extends Component {
    render() {
      return (
          <Container>
            <div className="ui two item menu">
			  <NavLink className="item" activeClassName="active" exact to="/">Quiz</NavLink>
            </div>
			<Route exact path="/" component={ChooseQuizPage}/>
            <Route exact path="/questions" component={QuestionListPage}/>
          </Container>
      );
   }
}

export default App;
