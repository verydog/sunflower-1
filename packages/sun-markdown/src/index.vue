<template>
  <div class="sun-markdown markdown-body">
    <div v-html="getMarkdown" v-if="mode === 'vue'" ref="vdom"></div>
    <div v-if="mode === 'dom'" ref="dom">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import marked from 'marked'
  import hljs from 'highlight.js';
  import 'highlight.js/styles/github.css'


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
          return marked(this.mark, { sanitize: true })
        } else {
          return ''
        }

      }
    },

    updated(){
      if(this.mode === 'vue' && this.$refs.vdom) {
        hljs.highlightBlock(this.$refs.vdom)
      }
    },
    mounted(){
      let dom = this.$refs.dom.innerHTML

      if(!dom) {
        this.mode = 'vue'
      } else {

        this.$refs.dom.innerHTML = marked(dom, { sanitize: true })
        try{
          hljs.highlightBlock(this.$refs.dom)
        }catch (e) {
          //
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "../../theme/markdown";
</style>