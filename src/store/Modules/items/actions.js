import * as types from './types';
import HTTPMethods from '@/network/ajax';

export default {
  async getItem({
    commit
  }) {
    const result = await new HTTPMethods(types.API_PARAMS).getAjax();
    if (result.data.RSuccess) {
      commit(types.INIT_ITEM, result.data.RData);
    }
  },
  async addItem({
    commit
  }, payload) {
    const result = await new HTTPMethods(types.API_PARAMS).postAjax({
      item: payload
    });
    if (result.data.RSuccess) {
      commit(types.ADD_ITEM, payload);
    }
  },
};
