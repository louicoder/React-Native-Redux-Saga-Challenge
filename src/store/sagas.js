import { put, call, fork, takeLatest, all } from 'redux-saga/effects';
import * as api from './api';
import * as constants from './actions';

function* getBooks() {
  try {
    const response = yield call(api.getBooks);
    yield put(constants.GET_BOOKS_SUCCESS(response));
  } catch (error) {
    yield put(constants.GET_BOOKS_FAILURE(error));
  }
}

function* watchGetBooks() {
  yield takeLatest(constants.GET_BOOKS_ACTION, getBooks);
}

function* getBook() {
  try {
    const response = yield call(api.getBook);
    yield put(constants.GET_BOOK_SUCCESS(response));
  } catch (error) {
    yield put(constants.GET_BOOK_FAILURE(error));
  }
}

function* watchGetBook() {
  yield takeLatest(constants.GET_BOOK_ACTION, getBook);
}

export default function* rootSaga() {
  yield all([fork(watchGetBooks),fork(watchGetBook)]);
}
