<template>
  <div>
    <div class="home">
      <div class="lr-box">
        <div class="banner">
          <img src="../assets/img/banner.png" alt="">
        </div>
        <div class="con-text">
          <h2>Sunflower</h2>
          <p class="des">
            sunflower 是一个基于Vue面向于高阶需求的ui组件库，用来满足一些平常的ui组件库不会提供的功能。
          </p>
          <div class="btn-box">
            <a href="#/components" class="btn item">Getting Started</a>

            <a href="https://github.com/sunflower-ui/sunflower" target="_blank" class="item github-link">
              <img src="../assets/img/github.png" alt="">
            </a>

            <iframe class="github-icon item" src="https://ghbtns.com/github-btn.html?user=sunflower-ui&repo=sunflower&type=star&count=true&size=large"></iframe>
          </div>

          <div class="benan">
            <a href="http://www.miitbeian.gov.cn" target="_blank">豫ICP备18041590号-1</a>
          </div>
          <div class="benan">
            <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=41010202002697">豫公网安备 41010202002697号</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "welcome"
  }
</script>

<style lang="scss">
  .home {
    .lr-box {
      padding-top: 50px;
      display: flex;
      .banner {
        width: 300px;
        img {
          width: 100%;
        }
      }
      .con-text {
        flex: 1;
        padding-left: 80px;
        padding-top: 30px;
        h2 {
          font-weight: 100;
          font-size: 100px;
          color: #814336;
        }
        .des {
          font-size: 18px;
          padding-top: 20px;
          line-height: 30px;
        }
        .btn-box {
          padding-top: 120px;
          .btn {
            display: inline-block;
            padding: 0 30px;
            height: 60px;
            line-height: 60px;
            border: 1px solid #41B883;
            color: #41B883;
            font-size: 30px;
            border-radius: 30px;
          }
          .item {
            margin-right: 20px;
          }
          .github-link img {
            width: 60px;
          }
          .btn.item {
            margin-right: 60px;
          }
        }
        .benan {
          margin-top: 20px;
          text-align: right;
          a {
            color: #666;
            text-decoration: underline;
          }
        }
      }

      .github-icon {
        width: 130px;
        height: 37px;
        vertical-align: -16px;
        margin-left: 3px;
        border: none;
      }
    }
  }
</style>