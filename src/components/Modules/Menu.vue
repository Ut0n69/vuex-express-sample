<template>
  <div class="Menu">
    <router-link to="/list" tag="a">List</router-link>
    <router-link to="/input" tag="a">Input</router-link>
  </div>
</template>

<style scoped lang="scss">
.Menu {
  padding-top: 30px;
  text-align: center;
  border-bottom: 3px solid #000;
  margin: 0 15px;
  & a {
    margin: 10px;
    font-size: 20px;
  }
}
</style>
