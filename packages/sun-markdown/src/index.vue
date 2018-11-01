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
    beforeCreate(){
      let a = document.getElementById('kkk')

      console.log(a)
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
      let dom = this.$refs.dom
      let script = dom.getElementsByTagName('script')

      let markDownHTML = ''

      if(script.length !== 0) {
        script = script[0]
        markDownHTML = script.innerHTML
      }


      let reSearchArr = markDownHTML.split('\n')

      let searchedArr = reSearchArr.map((val)=>{

        if(val.replace(/\s/g, '') !== '') {
          val = val.replace(/^\s{4,4}/g, '')
        }

        return val
      })

      markDownHTML = searchedArr.join('\n')

      if(!markDownHTML) {
        this.mode = 'vue'
      } else {

        this.$refs.dom.innerHTML = marked(markDownHTML)
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
  .sun-markdown {
    script{
      display: none !important;
    }
  }
</style>