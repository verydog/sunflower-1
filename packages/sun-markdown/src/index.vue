<template>
  <div class="sun-markdown">
    <div v-html="getMarkdown" v-if="mode === 'vue'"></div>
    <div v-if="mode === 'dom'" ref="dom">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import marked from 'marked'
  export default {
    name: "sun-markdown",
    props: {
      mark: {
        type: String,
        default: '# hello world'
      }
    },
    data(){
      return {
        mode: 'dom'
      }
    },
    computed: {
      getMarkdown(){
        if(this.mode === 'vue') {
          return marked(this.mark)
        } else {
          return ''
        }
      }
    },
    mounted(){
      let dom = this.$refs.dom.innerHTML

      if(!dom) {
        this.mode = 'vue'
      } else {
        this.$refs.dom.innerHTML = marked(dom)
      }
    }
  }
</script>

<style lang="scss">

</style>