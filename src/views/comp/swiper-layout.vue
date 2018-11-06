<template>
  <div class="page-swiper-layout">

    <sun-markdown>
      <script type="text/html">
        # SwiperLayout 滑块布局
        ### 示例
      </script>
    </sun-markdown>

    <div class="demo-box demo1">

      <div class="view-box nui-scroll">

        <sun-swiper-layout>
          <sun-swiper-layout-item
            v-for="(target, index) in list"
            :open.sync="target.open"
            :menu-width="target.menuWidth"
            :type="target.type"
            :key="target.id"
            :menu-color="target.menuColor || '#FE3C32'"
            @offset="demoOneOffset(index)">
            <template slot="content">
              <div class="content">
                <div class="face-wrap">
                  <div class="face" :style="{ backgroundImage: `url(${target.face})` }"></div>
                </div>
                <div class="des-wrap">
                  <p class="de-name">{{target.name}}</p>
                  <p class="des">{{target.msg}}</p>
                </div>
              </div>
            </template>

            <template slot="menu">
              <div class="menu-box">
                <div class="menu-item ding-tick" @click="close(target)">
                  关闭
                </div>
                <div class="menu-item delete" @click="remove(target, index)">
                  删除
                </div>
              </div>
            </template>
          </sun-swiper-layout-item>
        </sun-swiper-layout>
      </div>

      <div class="controller-box">

        <div class="item">
          <p class="alert">闭合控制</p>
          <div class="plan">
            <button class="margin" @click="demoOneOpen">打开第一个</button>
            <button class="margin" @click="demoOneClose">关闭第一个</button>
          </div>
        </div>

        <div class="item">
          <p class="alert">增删</p>
          <div class="plan">
            <button class="margin" @click="demoOneAppend">增加一个</button>
            <button class="margin" @click="demoOneRemove">删除一个</button>
          </div>
        </div>

        <div class="item">
         <p class="alert">自定义</p>

         <div class="form">
           <div class="form-item">
             <label class="label">菜单长度</label>
             <input type="text" class="form-controller" v-model="demo1.form.menuWidth">
           </div>

           <div class="form-item">
             <label>菜单位置</label>
             <select class="form-controller" v-model="demo1.form.type">
               <option value="left">left</option>
               <option value="right">right</option>
             </select>
           </div>

           <div class="form-item">
             <button @click="demoOneDiy">添加</button>
           </div>

         </div>
        </div>

        <div class="item">
          <p class="alert">扫码体验</p>
          <sun-qrcode :text="demo1.qrText"></sun-qrcode>
        </div>

      </div>

    </div>

    <sun-markdown>
      <script type="text/html">
        ### 使用

        ```html
        <sun-swiper-layout>
          <sun-swiper-layout-item>
            <template slot="content">
              自定义内容
            </template>
            <template slot="menu">
              菜单
            </template>
          </sun-swiper-layout-item>
        </sun-swiper-layout>
        ```

        ```js
        import { SunSwiperLayout, SunSwiperLayoutItem } from 'sunflower-ui'

        export default {
          components: {
            SunSwiperLayout,
            SunSwiperLayoutItem
          }
        }
        ```

        ### 注意
        使用 `v-for` 渲染的时候请确保 `key` 的唯一性
      </script>
    </sun-markdown>

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
          <td>type</td>
          <td>菜单位置</td>
          <td>
            <code>String</code>
          </td>
          <td>left / right</td>
          <td>left</td>
          <td>-</td>
        </tr>
        <tr>
          <td>
            menu-width
          </td>
          <td>
            菜单长度
          </td>
          <td>
            <code>String</code>
          </td>
          <td>
            /
          </td>
          <td>
            40%
          </td>
          <td>
            -
          </td>
        </tr>
        <tr>
          <td>
            open
          </td>
          <td>
            菜单闭合状态 [required]
          </td>
          <td>
            <code>Boolean</code>
          </td>
          <td>
            true / false
          </td>
          <td>
            false
          </td>
          <td>
            -
          </td>
        </tr>
        <tr>
          <td>
            offset-number
          </td>
          <td>
            触发偏移事件值(px)
          </td>
          <td>
            <code>Number</code>
          </td>
          <td>
            /
          </td>
          <td>
            120
          </td>
          <td>
            -
          </td>
        </tr>
        <tr>
          <td>
            speed
          </td>
          <td>
            动画速度(ms)
          </td>
          <td>
            <code>Number</code>
          </td>
          <td>
            /
          </td>
          <td>
            300
          </td>
          <td>
            -
          </td>
        </tr>
        <tr>
          <td>
            menu-color
          </td>
          <td>
            打开菜单后继续滑动的背景颜色
          </td>
          <td>
            <code>String</code>
          </td>
          <td>
            /
          </td>
          <td>
            #FFFFFF
          </td>
          <td>
            -
          </td>
        </tr>
      </tbody>
    </table>

    <sun-markdown>
      <script type="text/html">
        ### 事件
      </script>
    </sun-markdown>

    <table class="mytable">
      <thead>
        <tr>
          <th>事件名称</th>
          <th>说明</th>
          <th>回调参数</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            toggle
          </td>
          <td>
            打开/关闭菜单之后触发
          </td>
          <td>
            <code>Boolean</code>当前菜单闭合状态
          </td>
        </tr>
        <tr>
          <td>
            offset
          </td>
          <td>
            打开菜单之后继续滑动会触发，滑动的偏移量设置见-属性
          </td>
          <td>
            <code>Object</code>当前菜单滑动状态详情
          </td>
        </tr>
      </tbody>
    </table>

    <sun-markdown>
      <script type="text/html">
        ### 插槽
      </script>
    </sun-markdown>

    <table class="mytable">
      <thead>
        <tr>
          <th>Name</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>content</td>
          <td>内容</td>
        </tr>
        <tr>
          <td>menu</td>
          <td>菜单</td>
        </tr>
      </tbody>
    </table>


    <sun-footer></sun-footer>
  </div>
</template>

<script>

  export default {
    name: "swiper-layout",
    data(){
      return {
        list: [
          {
            face: 'http://wx3.sinaimg.cn/mw690/005v5x0Lly1fwtiyb37tfj30jg0jg75r.jpg',
            name: '子非粥',
            msg: '黄粱一梦二十年',
            open: false,
            id: 0
          },
          {
            face: 'http://wx1.sinaimg.cn/mw690/005v5x0Lly1fwtiybdg5bj30jg0jgmzj.jpg',
            name: 'SGR',
            msg: '依旧是不懂爱也不懂情',
            open: false,
            id: 1
          },
          {
            face: 'http://wx2.sinaimg.cn/mw690/005v5x0Lly1fwtiyatnjsj30jg0jgjts.jpg',
            name: '小林家的女仆',
            msg: '写歌的人假正经阿',
            open: false,
            id: 2
          },
          {
            face: 'http://wx2.sinaimg.cn/mw690/005v5x0Lly1fwtiyajyrpj30jg0jf75f.jpg',
            name: '你为啥不理我',
            msg: '听歌的人最无情',
            open: false,
            id: 3
          },
          {
            face: 'http://wx4.sinaimg.cn/mw690/005v5x0Lly1fwtiy9tmftj30jg0jgdic.jpg',
            name: '二哈',
            msg: '于是歌手从吉林到北京',
            open: false,
            id: 4
          },
          {
            face: 'http://wx2.sinaimg.cn/mw690/005v5x0Lly1fwtiya7tyuj30jg0jggmq.jpg',
            name: '巫妖王',
            msg: '从台北到上海',
            id: 5,
            open: false
          },
          {
            face: 'http://wx3.sinaimg.cn/mw690/005v5x0Lly1fwtiy9iszdj30jg0jgq3p.jpg',
            name: '有一梦',
            msg: '伦敦到马德里',
            id: 6,
            open: false
          },
          {
            face: 'http://wx2.sinaimg.cn/mw690/005v5x0Lly1fwtiy94y2mj30jg0jgt9b.jpg',
            name: '夺情',
            msg: '去寻找他梦中的青鸟',
            id: 7,
            open: false
          },
          {
            face: 'http://wx4.sinaimg.cn/mw690/005v5x0Lly1fwtiy8f0d7j30jg0je0uh.jpg',
            name: '男高~',
            msg: '郎对花 姐对花 是一段不知道是怎么开始',
            id: 8,
            open: false
          },
          {
            face: 'http://wx2.sinaimg.cn/mw690/005v5x0Lly1fwtiy82a8aj30jg0jgwg4.jpg',
            name: '有没有人',
            msg: '也不知道要怎么样结束的旅程 一对对到人间',
            id: 9,
            open: false
          },
          {
            face: 'http://wx4.sinaimg.cn/mw690/005v5x0Lly1fwtiy7p5u6j30jg0jgabq.jpg',
            name: 'Love~',
            msg: '他发觉…这世间…有点假 这个人间有点假',
            id: 10,
            open: false
          },
          {
            face: 'http://wx4.sinaimg.cn/mw690/005v5x0Lly1fwtiy70xkbj30jg0jgmy8.jpg',
            name: '可怕',
            msg: '可我莫名的 爱上了她… 可我莫名爱上了她',
            id: 11,
            open: false
          }
        ],
        demo1: {
          form: {
            menuWidth: '40%',
            type: 'right'
          },
          qrText: this.domain + '#/view/swiper-layout-view'
        }
      }
    },
    computed: {

    },

    mounted(){

    },


    methods: {
      close(target){
        target.open = false
      },
      remove(target, index){
        this.list.splice(index, 1)
      },

      demoOneOpen(){
        if(this.list[0]) {
          this.list[0].open = true
        }
      },
      demoOneClose(){
        if(this.list[0]) {
          this.list[0].open = false
        }
      },
      demoOneAppend(){
        this.list.push({
          face: 'http://wx2.sinaimg.cn/mw690/005v5x0Lly1fwtiyajyrpj30jg0jf75f.jpg',
          name: '你为啥不理我',
          msg: '听歌的人最无情',
          open: false,
          id: Math.random()
        })
      },
      demoOneRemove(){
        this.list.pop()
      },
      demoOneDiy(){
        this.list.push({
          face: 'http://wx3.sinaimg.cn/mw690/005v5x0Lly1fwtiyb37tfj30jg0jg75r.jpg',
          name: '子非粥',
          msg: '黄粱一梦二十年',
          open: false,
          menuWidth: this.demo1.form.menuWidth,
          type: this.demo1.form.type,
          id: Math.random(),
          menuColor: this.demo1.form.type === 'right' ? '#FE3C32' : '#C8C7CF'
        })
      },
      demoOneOffset(index){
        this.list.splice(index, 1)
      }
    }
  }
</script>

<style lang="scss">
  .page-swiper-layout {

    .demo1 {

      display: flex;

      .view-box {
        width: 375px;
        height: 667px;
        border: 1px solid #ccc;
        overflow-y: auto;
        border-radius: 4px;
      }

      .controller-box {
        flex: 1;
        margin-left: 20px;
      }

      .sun-content {
        &:after {
          content: '';
          display: block;
          width: 100%;
          position: absolute;
          left: 70px;
          bottom: 0;
          border-bottom: 1px solid #ccc;
        }
      }
      .content {
        display: flex;
        padding: 6px 0;
        .face-wrap {
          padding-left: 10px;
          .face {
            height: 50px;
            width: 50px;
            border-radius: 50%;
            background-color: #ccc;
            background-size: cover;
            background-position: top center;
            background-repeat: no-repeat;
          }
        }
        .des-wrap {
          flex: 1;
          margin-left: 10px;
          .des {
            color: #787C7B;
            font-size: 14px;
            margin-top: 4px;
          }
          .de-name {
            margin-top: 2px;
          }
        }

      }
      .menu-box {
        display: flex;
        .menu-item {
          flex: 1;
          height: 62px;
          line-height: 62px;
          text-align: center;
          &.ding-tick {
            background-color: #C8C7CF;
            color: #fff;
          }
          &.delete {
            background-color: #FE3C32;
            color: #fff;
          }
        }
      }
    }
  }
</style>