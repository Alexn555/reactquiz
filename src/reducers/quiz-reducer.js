const defaultState = {
  quizzes: [],	
  questions: [],
  answers: [],
  result: {},
  loading: false,
  errors:{}
};

export default (state=defaultState, action={}) => {
  switch (action.type) {
	case 'FETCH_QUIZZES_PENDING': {
      return {
        ...state,
        loading: true,
        quizzes: []
      }
    }

    case 'FETCH_QUIZZES_FULFILLED': {
      return {
        ...state,
        quizzes: action.payload.data,
        errors: {},
        loading: false
      }
    }  
	
	case 'FETCH_QUIZZE_REJECTED': {
      return {
        ...state,
        loading: false,
        errors: { global: 'Quizzes Nothing found' }
      }
    }
	  
	  
    case 'FETCH_QUESTIONS_FULFILLED': {
      return {
        ...state,
        questions: action.payload.data,
        loading: false,
        errors: {}
      }
    }

    case 'FETCH_QUESTIONS_PENDING': {
      return {
        ...state,
        loading: true,
        errors: {}
      }
    }

    case 'FETCH_QUESTIONS_REJECTED': {
      return {
        ...state,
        loading: false,
        errors: { global: 'Questions Nothing found' }
      }
    }
	
	
	case 'FETCH_ANSWERS_PENDING': {
      return {
        ...state,
        loading: true,
        answers: []
      }
    }

    case 'FETCH_ANSWERS_FULFILLED': {
      return {
        ...state,
        answers: action.payload.data,
        errors: {},
        loading: false
      }
    }
	
	case 'FETCH_ANSWERS_REJECTED': {
      return {
        ...state,
        loading: false,
        errors: { global: 'Answers Nothing found' }
      }
    }
	
	
	case 'FETCH_RESULT_PENDING': {
      return {
        ...state,
        loading: true,
        result: {}
      }
    }

    case 'FETCH_RESULT_FULFILLED': {
      return {
        ...state,
        result: action.payload.data,
        errors: {},
        loading: false
      }
    }
	
	case 'FETCH_RESULT_REJECTED': {
      return {
        ...state,
        loading: false,
        errors: { global: 'Result Not found' }
      }
    }

    default:
      return state;
  }
}
