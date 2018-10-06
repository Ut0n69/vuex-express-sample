<template>
  <div class="Input">
    <input class="Input__input" type="text" v-model="item" /><br>
    <ButtonSubmit class="Input__button" :onclick="addItem" text="ADD ITEM" />
    <transition mode="out-in" name="slideIn">
      <p v-if="isAdded">"{{ item }}" has been added.</p>
    </transition>
  </div>
</template>

<script>
import ButtonSubmit from '@/components/Base/ButtonSubmit.vue';
import ItemController from './ItemController';

export default {
  data() {
    return {
      item: '',
      isAdded: false
    };
  },
  components: {
    ButtonSubmit
  },
  methods: {
    async addItem() {
      await new ItemController(this.item).addItem();
      this.isAdded = !this.isAdded;
      return new Promise((resolve) => {
        setTimeout(() => {
          this.item = '';
          this.isAdded = !this.isAdded;
          resolve();
        }, 1500);
      });
    }
  }
};
</script>

<style lang="scss">
.Input {
  padding-top: 30px;
  text-align: center;
  &__input {
    text-align: center;
    width: 300px;
    height: 30px;
    border: 2px solid #000;
  }
  &__button {
    margin: 30px;
    width: 100px;
    height: 30px;
    border: 2px solid #000;
    background: #fff;
    color: #000;
    transition: 0.3s;
  }
  &__button:hover {
    background: #000;
    color: #fff;
  }
}
</style>
