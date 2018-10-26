<template>
  <div id="app">

    <sun-swiper-layout>
      <sun-swiper-layout-item
        v-for="(target, index) in swiperList"
        :open.sync="target.isOpen"
        :type="target.type"
        @offset="offset"
        @toggle="toggle"
        :menuWidth="target.width"
        :key="index">

        <template slot="content">
          {{target.isOpen}}
        </template>

        <template slot="menu">
          {{target.width}}
        </template>

      </sun-swiper-layout-item>
    </sun-swiper-layout>

    <button @click="click">append</button>
    <button @click="shift">shift</button>
    <button @click="seter">set 1 open</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data(){
    return {
      swiperList: [
        {
          isOpen: false,
          type: 'left',
          width: '10%'
        },
        {
          isOpen: false,
          type: 'right',
          width: '40%'
        },
        {
          isOpen: false,
          type: 'left',
          width: '60%'
        },
        {
          isOpen: false,
          type: 'left',
          width: '100%'
        }
      ]
    }
  },
  methods: {
    click(){
      this.swiperList.push({
        isOpen: false
      })
    },
    shift(){
      this.swiperList.pop()
    },
    seter(){
      this.swiperList[0].isOpen = !this.swiperList[0].isOpen
    },
    offset(res){
      console.log(res)
    },
    toggle(val){
      console.log(val)
    }
  }
}
</script>

<style lang="scss">
  html, body {
    padding: 0;
    margin: 0;
  }
</style>
