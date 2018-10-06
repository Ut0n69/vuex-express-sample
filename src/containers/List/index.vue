<template>
  <div class="List">
    <ul>
      <li v-for="items in list" :key="items.item">{{ items.item }}</li>
    </ul>
  </div>
</template>

<script>
import ListController from './ListController';
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      list(state) {
        return state.items.data.list;
      }
    })
  },
  mounted() {
    new ListController().getItem();
  }
};
</script>

<style lang="scss">
.List {
  padding-top: 30px;
  text-align: center;
}
</style>
