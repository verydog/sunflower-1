<template>
  <div class="home">
    <h1 align="center">Welcome</h1>
    <ul>
      <li>
        <router-link to="components">组件</router-link>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'home'
}
</script>

<style lang="scss">
  .home {
    padding-top: 120px;
    max-width: 1000px;
    margin: 0 auto;
  }
</style>