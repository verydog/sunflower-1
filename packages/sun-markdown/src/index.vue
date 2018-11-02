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
  import 'highlight.js/styles/idea.css'


  export default {
    name: "sun-markdown",
    props: {
      mark: {
        type: String,
        default: '# hello world'
      },
      space: {
        type: Number,
        default: 6
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

    methods: {
      renderMarkdown(){

        let dom = this.$refs.dom
        let script = dom.getElementsByTagName('script')

        let markDownHTML = ''

        if(script.length !== 0) {
          script = script[0]
          markDownHTML = script.innerHTML
        }

        let replaceSpaceRule = new RegExp( `^\\s{${this.space},${this.space}}`, 'g' )


        let reSearchArr = markDownHTML.split('\n')


        let searchedArr = reSearchArr.map((val)=>{

          if(val.replace(/\s/g, '') !== '') {
            val = val.replace(replaceSpaceRule, '')
          }

          return val
        })


        return searchedArr.join('\n')
      }
    },

    updated(){
      if(this.mode === 'vue' && this.$refs.vdom) {
        hljs.highlightBlock(this.$refs.vdom)
      }
    },
    mounted(){

      let markDownHTML = this.renderMarkdown()

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