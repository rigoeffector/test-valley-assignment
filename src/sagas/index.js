import { all, fork } from 'redux-saga/effects';
import { watchBannerListData } from './banner/read';
import { watchShortCutListData } from './shortcut/read';
import { watchProductsListData } from './all-products/read';



export default function* rootSaga() {
  yield all([
    fork(watchBannerListData),
    fork(watchShortCutListData),
    fork(watchProductsListData)
  ]);
}