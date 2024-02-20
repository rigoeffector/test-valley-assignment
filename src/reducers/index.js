import { combineReducers } from 'redux';
import getAllBannerListReducer from './banner/read';
import getAllShortcutListReducer from './shorcuts/read';
import getAllProductsListReducer from './all-products/read';
const rootReducer = combineReducers({
    getBannersList : getAllBannerListReducer,
    getShortCutsList: getAllShortcutListReducer,
    getAllProducts: getAllProductsListReducer
});
export default rootReducer;