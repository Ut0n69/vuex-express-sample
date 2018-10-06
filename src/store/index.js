import Vue from 'vue';
import Vuex from 'vuex';
import items from './Modules/items/index';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    items,
  }
});
