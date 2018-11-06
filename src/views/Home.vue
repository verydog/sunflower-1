<template>
  <div>
    <sun-header></sun-header>
    <router-view/>
  </div>
</template>

<script>
  import SunHeader from '../components/sun-header'

  export default {
    name: 'home',
    components: {
      SunHeader
    }
  }
</script>

<style lang="scss">
  .home {
    padding-top: 120px;
    max-width: 1000px;
    margin: 0 auto;
  }
</style>