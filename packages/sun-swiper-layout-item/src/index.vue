<template>
    <div class="sun-swiper-layout-item">
        <swiper :options="swiperOption" ref="mySwiper">

            <swiper-slide class="sun-menu sun-left-menu" :style="{ width: getMenuWidth }" v-if="type === 'left' || type === 'top'">
                <slot name="menu"></slot>
            </swiper-slide>
            <swiper-slide class="sun-content">
                <slot name="content"></slot>
            </swiper-slide>
            <swiper-slide class="sun-menu sun-right-menu" :style="{ width: getMenuWidth }" v-if="type === 'right' || type === 'bottom'">
                <slot name="menu"></slot>
            </swiper-slide>

        </swiper>
    </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    name: "sun-swiper-layout-item",
    components: {
      swiper,
      swiperSlide
    },
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
        default: false
      },
      offsetNumber: {
        type: Number,
        default: 120
      },
      speed:{
        type: Number,
        default: 300
      }
    },
    data() {
      return {
        swiperOption: {
          slidesPerView: 'auto',
          initialSlide: (this.type === 'left' || this.type === 'top') ? 1 : 0,
          init: false,
          on: {
            transitionStart: this.slideChange,
            touchEnd: this.touchEnd,
            init: this.afterInit
          },
          speed: this.speed
        },

        isInit: false
      }
    },
    methods: {
      afterInit(){
        this.isInit = true
      },

      slideChange() {
        if(this.swiper && this.isInit) {

          // # hack for swiper right bug
          if(this.type === 'right'){

            this.$emit('update:open', this.swiper.isEnd)
            this.$emit('toggle', this.swiper.isEnd)

          } else if (this.type === 'left') {

            this.$emit('update:open', this.swiper.activeIndex === 0)
            this.$emit('toggle', !this.swiper.isEnd)
          }

        }
      },

      touchEnd(){

        if(this.open) {
          let offset = Math.abs(this.swiper.touches.startX - this.swiper.touches.currentX)

          if(offset > this.offsetNumber ) {
            this.$emit('offset', {
              type: this.type,
              offset
            })
          }

        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      },
      getMenuWidth() {
        return (this.type === 'left' || this.type === 'right') ? this.menuWidth : '100%'
      },

    },
    mounted() {
      this.swiper.init()
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
    }
  }
</script>

<style lang="scss">
    .sun-swiper-layout-item {
        border-bottom: 1px solid #ccc;
        height: 50px;
        line-height: 50px;

        .sun-menu {

        }
    }
</style>