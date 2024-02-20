/* eslint-disable no-unused-vars */
import { call, delay, put, takeLatest } from 'redux-saga/effects';

import { error, loading, success } from '../../actions/common';

import {
  GET_ALL_SHORTCUT_LIST_LOADING,
  GET_ALL_SHORTCUT_LIST_ERROR,
  GET_ALL_SHORTCUT_LIST_RESET,
  GET_ALL_SHORTCUT_LIST_REQUEST,
  GET_ALL_SHORTCUT_LIST_SUCCESS
} from '../../reducers/shorcuts/constant';
import { shortcutApi } from '../../api/shortcut';

export function* listShortCutsRequestSaga(action) {
  try {
    yield put(loading(GET_ALL_SHORTCUT_LIST_LOADING, { loading: true }));
    const { payload } = action;
    const response = yield call(shortcutApi.shortcut.get);
    if (response && response) {
      yield put(success(GET_ALL_SHORTCUT_LIST_SUCCESS, response));
    } else {
      yield put(error(GET_ALL_SHORTCUT_LIST_ERROR, response));
      yield delay(2000);
      yield put({ type: GET_ALL_SHORTCUT_LIST_RESET });
    }
  } catch (err) {
    yield put(error(GET_ALL_SHORTCUT_LIST_ERROR, err));
    yield delay(2000);
    yield put({ type: GET_ALL_SHORTCUT_LIST_RESET });
  }
}

export function* watchShortCutListData() {
  yield takeLatest(GET_ALL_SHORTCUT_LIST_REQUEST, listShortCutsRequestSaga);
}