<template>
  <div class="page-component">
    <div class="view">
      <div class="view-box">
        <div class="left-nav nui-scroll small">

          <div class="sponsors">
            <img src="../assets/img/37d3d539b6003af38ef741d4352ac65c1038b631.jpg" alt="">
            <p class="ver">v1.0.0</p>
          </div>

          <div class="nav-controller">
            <div class="nav-list-title">
              开发指南
            </div>
            <div class="nav-list-content">
              <ul>
                <li class="item">
                  <router-link to="/components/quickstart">快速上手</router-link>
                </li>
              </ul>
            </div>
          </div>

          <div class="nav-controller">
            <div class="nav-list-title">
              组件
            </div>
            <div class="nav-list-content">
              <ul>

                <li class="item">
                  <router-link to="/components/swiper-layout">SwiperLayout 滑块布局</router-link>
                </li>

                <li class="item">
                  <router-link to="/components/swiper">Swiper 轮播</router-link>
                </li>

                <li class="item">
                  <router-link to="/components/markdown">Markdown 文档</router-link>
                </li>

                <li class="item">
                  <router-link to="/components/qrcode">Qrcode 二维码</router-link>
                </li>

              </ul>
            </div>
          </div>

        </div>

        <div class="content-box nui-scroll">
          <router-view/>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'components'
}
</script>

<style lang="scss">

  $leftPadding: 240px;
  $topPadding: 80px;

  .page-component {
    .ver {
      color: #666;
      margin-top: 6px;
    }

    .nav-controller {
      .nav-list-title {
        font-size: 16px;
        color: #333;
        line-height: 40px;
        height: 40px;
        margin: 0;
        padding: 0;
        text-decoration: none;
        display: block;
        position: relative;
        transition: .15s ease-out;
        font-weight: 700;
      }
      .nav-list-content .item a{
        height: 30px;
        color: #444;
        line-height: 30px;
        font-size: 14px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-weight: 400;
        transition: .15s ease-out;
        &:hover {
          color: orange;
        }
      }
      margin-bottom: 10px;
    }

    .content-box {
      padding-left: $leftPadding + 20px;
    }
    .left-nav {
      width: $leftPadding;
      position: fixed;
      top: 0;
      bottom: 0;
      margin-top: $topPadding;
      transition: padding-top .3s;
    }

    .content-box {
      padding-top: $topPadding + 20px;
    }

    .sponsors {
      padding: 10px 0;
      img {
        width: 80%;
      }
    }
  }

</style>
