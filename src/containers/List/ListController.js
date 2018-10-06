import store from '@/store';

export default class ListController {
  constructor() {}

  async getItem() {
    await store.dispatch('items/getItem');
  }
}
