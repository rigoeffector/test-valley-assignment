import request from '../request';

export const restApi = {
  rest: {
    get: (data) => request('GET', `collections?prearrangedDiscount`, data, false, false)
  }
};