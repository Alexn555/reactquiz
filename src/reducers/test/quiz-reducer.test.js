import reducer from '../quiz-reducer';

describe('quiz reducer', () => {
  const initState = {
	 quizzes: [],	
	  questions: [],
	  answers: [],
	  result: {},
	  loading: false,
	  errors:{}
  };
   
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
         quizzes: [],	
		 questions: [],
		 answers: [],
		 result: {},
		 loading: false,
		 errors:{}
      }
    )
  });
  
  it('returns the correct state on success', () => {
    const action = { type: 'FETCH_QUIZZES', payload: 1 };
    const expectedRes = initState;

    expect(reducer(undefined, action)).toEqual(expectedRes);
  });
  
  it('handles FETCH_QUIZZES PENDING', () => {
	  const action = { type: 'FETCH_MOVIES_PENDING', payload: 1 };	  
	  const expectedRes = initState;
	  
      expect(reducer(initState, action)).toEqual(expectedRes);
  });
  
  it('returns the correct state on error', () => {
    const action = { type: 'FETCH', payload: 1 };
    const expectedRes = initState;

    expect(reducer(undefined, action)).toEqual(expectedRes);
  });
 
  
})