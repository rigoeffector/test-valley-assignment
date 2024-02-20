import request from '../request';

export const bannerApi = {
  banner: {
    get: (data) => request('GET', `main-banner/all`, data, false, false)
  }
};