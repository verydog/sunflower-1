<template>
  <div class="sun-swiper-layout-item">
    <div class="swiper-container" ref="mySwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide sun-menu sun-left-menu" :style="{ width: getMenuWidth }" v-if="type === 'left'">
          <slot name="menu"></slot>
          <div class="sun-menu-bg" :style="{ backgroundColor: menuColor }"></div>
        </div>
        <div class="swiper-slide sun-content">
          <slot name="content"></slot>
        </div>
        <div class="swiper-slide sun-menu sun-right-menu" :style="{ width: getMenuWidth }" v-if="type === 'right'">
          <slot name="menu"></slot>
          <div class="sun-menu-bg" :style="{ backgroundColor: menuColor }"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import Swiper from '../../plugin/swiper/swiper-3.4.2.min'

  export default {
    name: "sun-swiper-layout-item",
    props: {
      type: {
        type: String,
        default: 'right'
      },
      menuWidth: {
        type: String,
        default: '40%'
      },
      open: {
        type: Boolean,
        default: false,
        required: true
      },
      offsetNumber: {
        type: Number,
        default: 120
      },
      speed: {
        type: Number,
        default: 120
      },
      menuColor: {
        type: String,
        default: '#ffffff'
      }
    },
    data() {
      return {
        swiper: null,
        swiperOption: {
          slidesPerView: 'auto',
          initialSlide: (this.type === 'left' || this.type === 'top') ? 1 : 0,
          init: false,
          onTransitionStart: this.slideChange,
          onTouchEnd: this.touchEnd,
          onInit: this.afterInit,
          speed: this.speed,
          onTouchMove: this.touchMove,
          onTransitionEnd: this.transitionEnd
        },
        progress: 0,
        istouch: false,
        ismove: false
      }
    },
    methods: {
      afterInit(){
        this.isInit = true
      },

      touchMove(){
        this.ismove = true
      },

      transitionEnd(){
        this.ismove = false
      },

      slideChange() {

        if(this.swiper && this.isInit && this.ismove) {

          this.ismove = false
          // # hack for swiper right bug
          if(this.type === 'right'){

            if(this.progress > 0.35 && this.istouch && !this.open) {
              this.$emit('update:open', this.swiper.isEnd = true)
              this.$emit('toggle', this.swiper.isEnd = true)

              this.istouch = false
            } else {
              this.$emit('update:open', this.swiper.isEnd)
              this.$emit('toggle', this.swiper.isEnd)
            }

          } else if (this.type === 'left') {

            this.$emit('update:open', this.swiper.activeIndex === 0)
            this.$emit('toggle', !this.swiper.isEnd)
          }

        }
      },

      touchEnd(){


        this.progress = this.swiper.progress
        this.istouch = true


        if(this.open) {

          let offset = this.swiper.touches.startX - this.swiper.touches.currentX

          if(this.type === 'right' && offset > this.offsetNumber) {
            this.$emit('offset', {
              type: this.type,
              offset
            })
          } else if(this.type === 'left' && -offset > this.offsetNumber) {
            this.$emit('offset', {
              type: this.type,
              offset
            })
          }

        }
      }
    },
    computed: {
      getMenuWidth() {
        return (this.type === 'left' || this.type === 'right') ? this.menuWidth : '100%'
      },
    },
    mounted() {

      this.swiper = new Swiper (this.$refs.mySwiper, this.swiperOption)

    },


    watch: {
      open(newValue){
        // 动态根据值关闭

        if(!newValue){
          // 关闭

          if(this.type === 'left') {
            this.swiper.slideTo(1)
          } else if(this.type === 'right') {
            this.swiper.slideTo(0)
          }

        }else{
          // 打开

          if(this.type === 'left') {
            this.swiper.slideTo(0)
          } else if(this.type === 'right') {
            this.swiper.slideTo(1)
          }

        }
      }
    },


    beforeDestroy(){
      this.swiper.destroy(true);
    }

  }
</script>

<style lang="scss">
  @import "../../plugin/swiper/swiper-3.4.2.min.css";
  .sun-swiper-layout-item {
    min-height: 50px;
    .sun-menu {
      position: relative;
      .sun-menu-bg {
        content: '';
        position: absolute;
        width: 400%;
        height: 100%;
        background-color: #fff;
        top: 0;
      }

      &.sun-left-menu .sun-menu-bg {
        left: -400%;
        transform: translateX(1px);
      }

      &.sun-right-menu .sun-menu-bg {
        right: -400%;
        transform: translateX(-1px);
      }
    }
  }
</style>