<template>
  <div class="page-sun-markdown">

    <sun-markdown>
      <script type="text/x-template">
        # SunMarkdown 文档

        ## 使用
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
        ### 指令方式
        ```html
        <sun-markdown :mark="html"></sun-markdown>
        ```
      </script>
    </sun-markdown>


    <div class="demo1">
      <div class="show">
        <div class="left">
          <textarea v-model="mark" placeholder="请输入markdown...😘"></textarea>
        </div>
        <div class="right">
          <sun-markdown :mark="mark"></sun-markdown>
        </div>
      </div>
    </div>


    <sun-markdown>
      <script type="text/x-template">
        ### 嵌套方式
        ```html
        <sun-markdown>
          (script type="text/x-template")
            markdown code
          (/script)
        </sun-markdown>
        ```
        ### 注意
        以嵌套方式使用会有一些限制
        * 只能渲染一次
        * 使用script标签的时候需要用下面格式替代
      </script>
    </sun-markdown>
    <div class="cmd">
      (script) (/script)
    </div>

    <sun-markdown>
      <script type="text/html">
        ### 属性
      </script>
    </sun-markdown>

    <table class="mytable">
      <thead>
        <tr>
          <th>参数</th>
          <th>说明</th>
          <th>类型</th>
          <th>可选值</th>
          <th>默认值</th>
          <th>版本</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            mark
          </td>
          <td>
            文档内容
          </td>
          <td>
            <code>String</code>
          </td>
          <td>
            /
          </td>
          <td>
            '# hello world'
          </td>
          <td>
            -
          </td>
        </tr>
        <tr>
          <td>
            space
          </td>
          <td>
            在嵌套方式使用的时候由于传递过来的文字<br>
            每行会有空格，这里要去处理空格的长度
          </td>
          <td>
            <code>Number</code>
          </td>
          <td>
            /
          </td>
          <td>
            6
          </td>
          <td>
            -
          </td>
        </tr>
      </tbody>
    </table>

    <sun-footer></sun-footer>
  </div>
</template>

<script>

  export default {
    name: "markdown",
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

<style lang="scss">
  .page-sun-markdown {
    .demo1 .show {
      display: flex;

      .left {
        flex: 0 0 300px;
        textarea {
          width: 100%;
          height: 100%;
          margin: 0;
          border-radius: 6px;
          box-sizing: border-box;
          padding: 6px;
        }
        min-height: 100px;
      }
      .right {
        flex: 1;
        padding: 0 10px;
        box-sizing: border-box;
      }
    }
  }
</style>