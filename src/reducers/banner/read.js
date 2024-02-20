import { GET_ALL_BANNER_LIST_ERROR, GET_ALL_BANNER_LIST_LOADING, GET_ALL_BANNER_LIST_SUCCESS, GET_ALL_BANNER_LIST_RESET } from './constant';

const initialState = {
  loading: false,
  success: false,
  data: null,

};

const getAllBannerListReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_BANNER_LIST_LOADING:
      return { ...state, loading: payload.loading };
    case GET_ALL_BANNER_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        data: payload,
      
      };
    case GET_ALL_BANNER_LIST_ERROR:
      return { ...state, loading: false, error: '', };
    case GET_ALL_BANNER_LIST_RESET:
      return initialState;
    default:
      return state;
  }
};

export default getAllBannerListReducer;