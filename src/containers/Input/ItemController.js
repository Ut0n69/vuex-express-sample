import store from '@/store';

export default class ItemController {
  constructor(item) {
    this.item = item;
  }

  async addItem() {
    await store.dispatch('items/addItem', this.item);
  }
}
