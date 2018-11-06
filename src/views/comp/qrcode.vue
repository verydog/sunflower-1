<template>
  <div class="page-sun-qrcode">

    <sun-markdown>
      <script type="text/x-template">
        # SunQrcode 二维码

        ## 使用
        ```js
        import { SunQrcode } from 'sunflower-ui'

        export default {
          data(){
            return {
              text: '你好鸭，小姐姐！'
            }
          },
          components: {
            SunQrcode
          }
        }
        ```

        ```html
        <sun-qrcode :text="text"></sun-qrcode>
        ```

      </script>
    </sun-markdown>

    <div class="demo1">
      <div class="show">
        <div class="left">
          <textarea v-model="text" placeholder="请输入...😘"></textarea>
        </div>
        <div class="right">
          <sun-qrcode :text="text" :width="200" :margin="0"></sun-qrcode>
        </div>
      </div>
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
          <td>text</td>
          <td>二维码内容</td>
          <td><code>String</code></td>
          <td>/</td>
          <td>Hello world</td>
          <td>-</td>
        </tr>
        <tr>
          <td>width</td>
          <td>二维码宽度</td>
          <td><code>Number</code></td>
          <td>/</td>
          <td>200</td>
          <td>-</td>
        </tr>
        <tr>
          <td>level</td>
          <td>二维码容错等级</td>
          <td><code>String</code></td>
          <td>L / M / Q / H</td>
          <td>M</td>
          <td>-</td>
        </tr>
        <tr>
          <td>dark</td>
          <td>二维码颜色</td>
          <td><code>String</code></td>
          <td>/</td>
          <td>#000000</td>
          <td>-</td>
        </tr>
        <tr>
          <td>light</td>
          <td>二维码背景颜色</td>
          <td><code>String</code></td>
          <td>/</td>
          <td>#FFFFFF</td>
          <td>-</td>
        </tr>
      </tbody>

    </table>


    <sun-footer></sun-footer>
  </div>
</template>

<script>

  export default {
    name: "qrcode",
    data(){
      return {
        text: ''
      }
    },
    computed: {

    },

    mounted(){

    }
  }
</script>

<style lang="scss">
  .page-sun-qrcode {
    .demo1 .show {
      display: flex;

      .left {
        flex: 0 0 300px;
        textarea {
          width: 100%;
          height: 100%;
          padding: 0;
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