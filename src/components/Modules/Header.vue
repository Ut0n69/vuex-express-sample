<template>
  <div class="Header">
    <header>
      <h1 class="Header__title">
        <a href="/">vuejs-template</a>
      </h1>
    </header>
  </div>
</template>

<style scoped lang="scss">
.Header {
  width: 100%;
  height: 50px;
  &__title {
    margin: 15px;
    line-height: 50px;
    font-size: 35px;
    & a {
      text-decoration: none;
      color: #000;
    }
  }
}
</style>
