<template>
  <div class="sun-header">
    <div class="header-content">
      <div class="fl log-wrap">
        <a href="#/">
          <div class="logo fl">
            <img src="../assets/img/logo.png" alt="">
          </div>
          <div class="logo-text fl">
            Sunflower
          </div>
        </a>
      </div>


      <div class="fr right-box">
        <div class="item">
          1.0.0
        </div>
        <div class="item">
          <a href="https://github.com/sunflower-ui/sunflower" target="_blank">
            <img src="../assets/img/github.png" alt="">
          </a>
        </div>
      </div>


      <ul class="fr nav">
        <li class="item">
          <router-link to="/components">组件</router-link>
        </li>
      </ul>


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
    border-bottom: 1px solid #f8f8f8;

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

    .logo img {
      width: 70px;
      height: 70px;
      padding-top: 5px;
    }
    .logo-text {
      line-height: 80px;
      padding-left: 10px;
      font-size: 30px;
      color: #814336;
    }

    .nav {
      line-height: 80px;
      padding-right: 50px;
      .item {
        float: left;
      }
      a {
        font-size: 16px;
        color: #814336;
      }
    }

    .right-box {
      .item {
        float: left;
        img {
          width: 40px;
          padding-top: 20px;
        }
        margin-right: 10px;
      }
    }

  }
</style>
