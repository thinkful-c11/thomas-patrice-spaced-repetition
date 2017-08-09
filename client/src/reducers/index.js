import * as actions from '../actions';

const initialState = {
  loading: false,
  error: null,

  dbQuestions: [{question: 'something', answer: 'something'}], // a fixed array of questions from the DB.
  userQuestions: [], // this list of questions to be asked. Out from the spacedRep.
  currentQuestion: null, // current question displayed. { _id: 234234, question: 'something', answer: 'something'},
  currentAnswer: null,
  totalCorrect: 0,
  totalAnswered: 0,

  currentUser: null,
  accessToken: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case actions.FETCH_USER_REQUEST:
    return Object.assign({}, state, {
      loading: true,
    });

  case actions.FETCH_USER_SUCCESS:
    return Object.assign({}, state, {
      currentUser: action.currentUser,
      loading: false,
      error: null
    });

  case actions.FETCH_USER_ERROR:
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });

  case actions.SET_ACCESS_TOKEN:
    return Object.assign({}, state, {
      accessToken: action.accessToken
    });

  case actions.REMOVE_ACCESS_TOKEN:
    return Object.assign({}, state, {
      accessToken: null
    });

  case actions.FETCH_QUESTIONS_REQUEST:
    return Object.assign({}, state, {
      loading: true
    });

  case actions.FETCH_QUESTIONS_SUCCESS:
    return Object.assign({}, state, {
      dbQuestions: action.dbQuestions,
      loading: false,
      error: null
    });

  case actions.FETCH_QUESTIONS_ERROR:
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });

  case actions.SET_USER_QUESTIONS:
    return Object.assign({}, state, {
      userQuestions: action.userQuestions
    });

  case actions.SET_CURRENT_QUESTION:
    return Object.assign({}, state, {
      currentQuestion: action.currentQuestion
    });

  case actions.SET_CURRENT_ANSWER:
    return Object.assign({}, state, {
      currentAnswer: action.currentAnswer
    });

  case actions.INCREMENT_TOTAL_CORRECT:
    return Object.assign({}, state, {
      totalCorrect: (state.totalCorrect++)
    });

  case actions.INCREMENT_TOTAL_ANSWERED:
    return Object.assign({}, state, {
      totalAnswered: (state.totalAnswered++)
    });

  default:
    return state;
  }
};

export default reducer;
