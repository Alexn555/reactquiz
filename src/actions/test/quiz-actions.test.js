import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const fetchQuizzes = () => ({
  type: 'FETCH_QUIZZES'
});

describe('quiz async actions', () => {
  afterEach(() => {
    fetchMock.restore()
  });
  
  it('should send FETCH_QUIZZES action and get correct snapshot', () => {
	const store = mockStore({ quizzes: [], loading: [], errors: [] });
    store.dispatch(fetchQuizzes());
    expect(store.getActions()).toMatchSnapshot();
  });
  
  it('should send FETCH_QUIZZES action and get right actions', () => {
    fetchMock.getOnce('/quizzes', {
      body: { payload: ['something'] },
      headers: { 'content-type': 'application/json' }
    });

    const expectedActions = [
      { type: 'FETCH_QUIZZES' } 
    ];
	
    const store = mockStore({ quizzes: [], loading: [], errors: [] });
	store.dispatch(fetchQuizzes());
    expect(store.getActions()).toEqual(expectedActions);
  });
  
  
})




