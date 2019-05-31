import * as actions from './actions';

const initialState = {
  books: [],
  book: {},
  error: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_BOOKS_SUCCESS:
      return {
        ...state,
        books: action.payload
      };
    case actions.GET_BOOKS_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case actions.GET_BOOK_SUCCESS:
      return {
        ...state,
        books: action.payload
      };
    case actions.GET_BOOK_FAILURE:
      return {
        ...state,
        error: action.error
      };
    default: return state;
  }
};
