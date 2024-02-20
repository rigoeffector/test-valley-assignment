/* eslint-disable no-unused-vars */
import { call, delay, put, takeLatest } from 'redux-saga/effects';

import { error, loading, success } from '../../actions/common';

import {
  GET_ALL_PRODUCTS_LIST_LOADING,
  GET_ALL_PRODUCTS_LIST_ERROR,
  GET_ALL_PRODUCTS_LIST_RESET,
  GET_ALL_PRODUCTS_LIST_REQUEST,
  GET_ALL_PRODUCTS_LIST_SUCCESS
} from '../../reducers/all-products/constant';
import { restApi } from '../../api/all-products';

export function* listAllProductsRequestSaga(action) {
  try {
    yield put(loading(GET_ALL_PRODUCTS_LIST_LOADING, { loading: true }));
    const { payload } = action;
    const response = yield call(restApi.rest.get);
    if (response && response) {
      yield put(success(GET_ALL_PRODUCTS_LIST_SUCCESS, response));
    } else {
      yield put(error(GET_ALL_PRODUCTS_LIST_ERROR, response));
      yield delay(2000);
      yield put({ type: GET_ALL_PRODUCTS_LIST_RESET });
    }
  } catch (err) {
    yield put(error(GET_ALL_PRODUCTS_LIST_ERROR, err));
    yield delay(2000);
    yield put({ type: GET_ALL_PRODUCTS_LIST_RESET });
  }
}

export function* watchProductsListData() {
  yield takeLatest(GET_ALL_PRODUCTS_LIST_REQUEST, listAllProductsRequestSaga);
}