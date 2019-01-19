
<p align="center">
    <img src="https://i.loli.net/2018/11/07/5be2a200f393a.png" alt="banner.png" width="200" title="banner.png" />
</p>  




# 快速上手
`sunflower` 是一个基于`Vue`面向于高阶需求的ui组件库的解决方案，用来满足一些平常的ui组件库
不会提供的高阶功能。    

* 例swiper-layout组件 

![](https://user-gold-cdn.xitu.io/2019/1/19/168640915b8f450a?w=600&h=402&f=gif&s=283811)

# 安装
```cmd
npm install sunflower-ui --save
```
你还需要安装 `sass-loader` & `node-sass`

```cmd
npm install --save-dev sass-loader
npm install --save-dev node-sass
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
按需全局引入（推荐）


```js
import { SunMarkdown } from 'sunflower-ui'

Vue.use(SunMarkdown)
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


计划实现的
* json展示
* ...

# 未来规划
现在的`sunflower-ui`组件数量还不多，以后会慢慢拓展，如果你有需求或者想吐槽或者想一块开发，欢迎提`issues` 和 `pr`。

# 文档

https://verydog.cn/

# LICENSE
<a href="https://github.com/sunflower-ui/sunflower/blob/master/LICENSE">MIT</a>

