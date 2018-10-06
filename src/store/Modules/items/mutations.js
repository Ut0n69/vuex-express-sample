import {
  INIT_ITEM,
  ADD_ITEM
} from './types';

export default {
  [INIT_ITEM](state, payload) {
    state.data.list = payload;
  },
  [ADD_ITEM](state, payload) {
    state.data.list.push(payload);
  }
};
