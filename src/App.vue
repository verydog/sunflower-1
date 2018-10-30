<template>
  <div id="app">
    <sun-header></sun-header>
    <router-view/>
  </div>
</template>

<script>

  import SunHeader from './components/sun-header'

  export default {
    components: {
      SunHeader
    }
  }
</script>

<style lang="scss">
  @import "assets/scss/reset";
  @import "assets/scss/base";
</style>
