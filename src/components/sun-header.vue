<template>
  <div class="sun-header">
    <div class="header-content">
      <h1>header</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style lang="scss">
  .sun-header {
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 1500;
    border-bottom: 1px solid #ccc;

    .header-content {
      position: relative;
      height: 80px;
      background-color: #fff;
      color: #333;
      top: 0;
      left: 0;
      width: 1100px;
      margin: 0 auto;
      line-height: 80px;
      z-index: 100;

    }

  }
</style>
