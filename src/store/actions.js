export const GET_BOOKS_ACTION = 'GET_BOOKS_ACTION';
export const GET_BOOKS_SUCCESS = 'GET_BOOKS_SUCCESS';
export const GET_BOOKS_FAILURE = 'GET_BOOKS_FAILURE';
export const GET_BOOK_ACTION = 'GET_BOOK_ACTION';
export const GET_BOOK_SUCCESS = 'GET_BOOK_SUCCESS';
export const GET_BOOK_FAILURE = 'GET_BOOK_FAILURE';

export const getBooksAction = () => ({
  type: GET_BOOKS_ACTION
});

export const getBookDetailsAction = () => ({
  type: GET_BOOKS_ACTION
});

export const getBooksSuccess = payload => ({
  type: GET_BOOKS_SUCCESS,
  payload
});

export const getBooksFailed = error => ({
  type: GET_BOOKS_ACTION,
  error
});

export const getBookDetailsSuccess = payload => ({
  type: GET_BOOKS_ACTION,
  payload
});

export const getBookDetailsFailed = error => ({
  type: GET_BOOKS_ACTION,
  error
});
