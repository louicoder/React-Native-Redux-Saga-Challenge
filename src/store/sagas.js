import { put, call, fork, takeLatest, all } from 'redux-saga/effects';
import * as api from './requests';
import * as constants from './actions';

function* getBooks() {
  try {
    const response = yield call(api.getBooks);
    yield put(constants.getBooksSuccess(response));
  } catch (error) {
    yield put(constants.getBooksFailed(error));
  }
}

function* getBookDetails(book) {
  try {
    const response = yield call(api.getBookDetails(book));
    yield put(constants.getBookDetailsSuccess(response));
  } catch (error) {
    yield put(constants.getBookDetailsFailed(error));
  }
}

function* watchGetBooks() {
  yield takeLatest(constants.getBooksAction, getBooks);
}

function* watchGetBook() {
  yield takeLatest(constants.getBookDetailsAction, getBookDetails);
}

export default function* rootSaga() {
  yield all([fork(watchGetBooks),fork(watchGetBook)]);
}
