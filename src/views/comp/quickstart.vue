<template>
  <div>



    <sun-markdown>
      <script type="text/html">
        # 快速上手
        `sunflower` 是一个面向于高阶需求的ui组件库，用来满足一些平常的ui组件库
        不会提供的功能。
        # 安装
        ```cmd
        npm install sunflower-ui --save
        ```
        # 使用

        按需引入（推荐）
        ```js
        import { SunMarkdown } from 'sunflower-ui'

        export default {
          data(){
            return {
              html: '<h1>你好鸭！</h1>'
            }
          },
          components: {
            SunMarkdown
          }
        }
        ```

        全局引入（不推荐）
        ```js
        import Sunflower from 'sunflower-ui'

        Vue.use(Sunflower)
        ```

        已经实现的组件列表

        * `SunSwiperLayout`
        * `SunSwiperLayoutItem`
        * `SunMarkdown`
        * `SunQrcode`

      </script>
    </sun-markdown>

    <sun-footer></sun-footer>
  </div>
</template>

<script>

  export default {
    name: "quickstart",
    data(){
      return {
        mark: ''
      }
    },
    computed: {

    },

    mounted(){

    }
  }
</script>

<style scoped>

</style>