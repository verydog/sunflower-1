<template>
  <div id="app">
    <div class="loading-bar" :class="nowStatus">
      <span class="press"></span>
    </div>
    <router-view/>
  </div>
</template>

<script>

  import { mapGetters } from 'vuex'

  export default {
    name: 'app',
    data(){
      return {
        transitionName : 'slide-go',
      }
    },
    watch: {
      '$route' (to, from) {
        if (from.query.time) {
          if (to.query.time > from.query.time) {
            this.transitionName = 'slide-go'
          } else {
            this.transitionName = 'slide-back'
          }
        } else {
          this.transitionName = 'slide-go'
        }
        this.nowUrl = to.fullPath
      }
    },
    computed: {
      ...mapGetters([
        'nowStatus'
      ]),
    }
  }
</script>

<style lang="scss">
  @import "assets/scss/reset";
  @import "assets/scss/base";
</style>
