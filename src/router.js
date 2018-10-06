import Vue from 'vue';
import Router from 'vue-router';
import List from './pages/List.vue';
import Input from './pages/Input.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/list',
      name: 'list',
      component: List,
    },
    {
      path: '/input',
      name: 'input',
      component: Input,
    },
  ],
});
