<template>
  <div class="swiper-layout-view">

    <sun-swiper-layout>
      <sun-swiper-layout-item
        v-for="(target, index) in list"
        :open.sync="target.open"
        :key="index"
        @offset="demoOneOffset(index)">
        <template slot="content">
          <div class="content">
            <div class="face-wrap">
              <div class="face" :style="{ backgroundImage: `url(${target.face})` }"></div>
            </div>
            <div class="des-wrap">
              <p class="de-name">{{target.name}}</p>
              <p class="des">{{target.msg}}</p>
            </div>
          </div>
        </template>

        <template slot="menu">
          <div class="menu-box">
            <div class="menu-item ding-tick" @click="close(target)">
              关闭
            </div>
            <div class="menu-item delete" @click="remove(target, index)">
              删除
            </div>
          </div>
        </template>
      </sun-swiper-layout-item>
    </sun-swiper-layout>

  </div>
</template>

<script>

  export default {
    name: "swiper-layout-view",
    data(){
      return {
        list: [
          {
            face: 'http://wx3.sinaimg.cn/mw690/005v5x0Lly1fwtiyb37tfj30jg0jg75r.jpg',
            name: '子非粥',
            msg: '黄粱一梦二十年',
            open: false
          },
          {
            face: 'http://wx1.sinaimg.cn/mw690/005v5x0Lly1fwtiybdg5bj30jg0jgmzj.jpg',
            name: 'SGR',
            msg: '依旧是不懂爱也不懂情',
            open: false
          },
          {
            face: 'http://wx2.sinaimg.cn/mw690/005v5x0Lly1fwtiyatnjsj30jg0jgjts.jpg',
            name: '小林家的女仆',
            msg: '写歌的人假正经阿',
            open: false
          },
          {
            face: 'http://wx2.sinaimg.cn/mw690/005v5x0Lly1fwtiyajyrpj30jg0jf75f.jpg',
            name: '你为啥不理我',
            msg: '听歌的人最无情',
            open: false
          },
          {
            face: 'http://wx4.sinaimg.cn/mw690/005v5x0Lly1fwtiy9tmftj30jg0jgdic.jpg',
            name: '二哈',
            msg: '于是歌手从吉林到北京',
            open: false
          },
          {
            face: 'http://wx2.sinaimg.cn/mw690/005v5x0Lly1fwtiya7tyuj30jg0jggmq.jpg',
            name: '巫妖王',
            msg: '从台北到上海',
            id: 0,
            open: false
          },
          {
            face: 'http://wx3.sinaimg.cn/mw690/005v5x0Lly1fwtiy9iszdj30jg0jgq3p.jpg',
            name: '有一梦',
            msg: '伦敦到马德里',
            id: 0,
            open: false
          },
          {
            face: 'http://wx2.sinaimg.cn/mw690/005v5x0Lly1fwtiy94y2mj30jg0jgt9b.jpg',
            name: '夺情',
            msg: '去寻找他梦中的青鸟',
            id: 0,
            open: false
          },
          {
            face: 'http://wx4.sinaimg.cn/mw690/005v5x0Lly1fwtiy8f0d7j30jg0je0uh.jpg',
            name: '男高~',
            msg: '郎对花 姐对花 是一段不知道是怎么...',
            id: 0,
            open: false
          },
          {
            face: 'http://wx2.sinaimg.cn/mw690/005v5x0Lly1fwtiy82a8aj30jg0jgwg4.jpg',
            name: '有没有人',
            msg: '也不知道要怎么样结束的旅程 一对...',
            id: 0,
            open: false
          },
          {
            face: 'http://wx4.sinaimg.cn/mw690/005v5x0Lly1fwtiy7p5u6j30jg0jgabq.jpg',
            name: 'Love~',
            msg: '他发觉…这世间…有点假 这个人间有...',
            id: 0,
            open: false
          },
          {
            face: 'http://wx4.sinaimg.cn/mw690/005v5x0Lly1fwtiy70xkbj30jg0jgmy8.jpg',
            name: '可怕',
            msg: '可我莫名的 爱上了她… 可我莫名爱...',
            id: 0,
            open: false
          }
        ],
        demo1: {
          form: {
            menuWidth: '40%',
            type: 'right'
          }
        }
      }
    },
    computed: {

    },

    mounted(){

    },

    methods: {
      close(target){
        target.open = false
      },
      remove(target, index){
        this.list.splice(index, 1)
      },
      demoOneOffset(index){
        console.log('wsssssssssssss')

        this.list.splice(index, 1)
      }
    }
  }
</script>

<style lang="scss">
  .swiper-layout-view {


    .sun-swiper-layout-item {
      background-color: #FE3C32;
    }
    .sun-content {
      background-color: #fff;
    }

    .sun-content {
      &:after {
        content: '';
        display: block;
        width: 100%;
        position: absolute;
        left: 70px;
        bottom: 0;
        border-bottom: 1px solid #ccc;
      }
    }
    .content {
      display: flex;
      padding: 6px 0;
      .face-wrap {
        padding-left: 10px;
        .face {
          height: 50px;
          width: 50px;
          border-radius: 50%;
          background-color: #ccc;
          background-size: cover;
          background-position: top center;
          background-repeat: no-repeat;
        }
      }
      .des-wrap {
        flex: 1;
        margin-left: 10px;
        .des {
          color: #787C7B;
          font-size: 14px;
          margin-top: 4px;
        }
        .de-name {
          margin-top: 2px;
        }
      }

    }
    .menu-box {
      display: flex;
      .menu-item {
        flex: 1;
        height: 62px;
        line-height: 62px;
        text-align: center;
        &.ding-tick {
          background-color: #C8C7CF;
          color: #fff;
        }
        &.delete {
          background-color: #FE3C32;
          color: #fff;
        }
      }
    }
  }
</style>