import request from '../request';

export const shortcutApi = {
  shortcut: {
    get: (data) => request('GET', `main-shortcut/all`, data, false, false)
  }
};