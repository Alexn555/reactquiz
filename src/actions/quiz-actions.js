import { client } from './';

// for now this is required as without it will add slash (/) which result to CORS problem
const url = 'https://printful.com/test-quiz.php'; 

export function fetchQuizzes() {
  return dispatch => {
    dispatch({
      type: 'FETCH_QUIZZES',
      payload: client.get(url+'?action=quizzes')
    })
  }
};

export function fetchQuestions(quizId = 141) {
  return dispatch => {
    dispatch({
      type: 'FETCH_QUESTIONS',
      payload: client.get(url+'?action=questions&quizId='+quizId)
    })
  }
};

export function fetchAnswers(quizId = 141, questionId = 1) {
  return dispatch => {
    dispatch({
      type: 'FETCH_ANSWERS',
      payload: client.get(url+'?action=answers&quizId='+quizId+'&questionId='+questionId)
    })
  }
};

export function fetchResult(quizId = 141, answers) {
   let answerList = '';
   for (let answer of answers) {
	  answerList += '&answers[]='+answer.id;	
   }
   return dispatch => {
     dispatch({
       type: 'FETCH_RESULT',
       payload: client.get(url+'?action=submit&quizId='+quizId+answerList)
     })
   }
};




