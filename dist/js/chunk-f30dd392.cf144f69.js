(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f30dd392"],{"1d6b":function(t,n,e){},"43e0":function(t,n,e){"use strict";var s=e("1d6b"),i=e.n(s);i.a},"9efa":function(t,n,e){"use strict";e.r(n);var s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"page-swiper-layout"},[e("sun-markdown",[e("script",{attrs:{type:"text/html"}},[t._v("\n      # SwiperLayout 滑块布局\n      ### 示例\n    ")])]),e("div",{staticClass:"demo-box demo1"},[e("div",{staticClass:"view-box nui-scroll"},[e("sun-swiper-layout",t._l(t.list,function(n,s){return e("sun-swiper-layout-item",{key:n.id,attrs:{open:n.open,"menu-width":n.menuWidth,type:n.type,"menu-color":n.menuColor||"#FE3C32"},on:{"update:open":function(e){t.$set(n,"open",e)},offset:function(n){t.demoOneOffset(s)}}},[e("template",{slot:"content"},[e("div",{staticClass:"content"},[e("div",{staticClass:"face-wrap"},[e("div",{staticClass:"face",style:{backgroundImage:"url("+n.face+")"}})]),e("div",{staticClass:"des-wrap"},[e("p",{staticClass:"de-name"},[t._v(t._s(n.name))]),e("p",{staticClass:"des"},[t._v(t._s(n.msg))])])])]),e("template",{slot:"menu"},[e("div",{staticClass:"menu-box"},[e("div",{staticClass:"menu-item ding-tick",on:{click:function(e){t.close(n)}}},[t._v("\n                关闭\n              ")]),e("div",{staticClass:"menu-item delete",on:{click:function(e){t.remove(n,s)}}},[t._v("\n                删除\n              ")])])])],2)}))],1),e("div",{staticClass:"controller-box"},[e("div",{staticClass:"item"},[e("p",{staticClass:"alert"},[t._v("闭合控制")]),e("div",{staticClass:"plan"},[e("button",{staticClass:"margin",on:{click:t.demoOneOpen}},[t._v("打开第一个")]),e("button",{staticClass:"margin",on:{click:t.demoOneClose}},[t._v("关闭第一个")])])]),e("div",{staticClass:"item"},[e("p",{staticClass:"alert"},[t._v("增删")]),e("div",{staticClass:"plan"},[e("button",{staticClass:"margin",on:{click:t.demoOneAppend}},[t._v("增加一个")]),e("button",{staticClass:"margin",on:{click:t.demoOneRemove}},[t._v("删除一个")])])]),e("div",{staticClass:"item"},[e("p",{staticClass:"alert"},[t._v("自定义")]),e("div",{staticClass:"form"},[e("div",{staticClass:"form-item"},[e("label",{staticClass:"label"},[t._v("菜单长度")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.demo1.form.menuWidth,expression:"demo1.form.menuWidth"}],staticClass:"form-controller",attrs:{type:"text"},domProps:{value:t.demo1.form.menuWidth},on:{input:function(n){n.target.composing||t.$set(t.demo1.form,"menuWidth",n.target.value)}}})]),e("div",{staticClass:"form-item"},[e("label",[t._v("菜单位置")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.demo1.form.type,expression:"demo1.form.type"}],staticClass:"form-controller",on:{change:function(n){var e=Array.prototype.filter.call(n.target.options,function(t){return t.selected}).map(function(t){var n="_value"in t?t._value:t.value;return n});t.$set(t.demo1.form,"type",n.target.multiple?e:e[0])}}},[e("option",{attrs:{value:"left"}},[t._v("left")]),e("option",{attrs:{value:"right"}},[t._v("right")])])]),e("div",{staticClass:"form-item"},[e("button",{on:{click:t.demoOneDiy}},[t._v("添加")])])])]),e("div",{staticClass:"item"},[e("p",{staticClass:"alert"},[t._v("扫码体验")]),e("sun-qrcode",{attrs:{text:t.demo1.qrText}})],1)])]),e("sun-markdown",[e("script",{attrs:{type:"text/html"}},[t._v('\n      ### 使用\n\n      ```html\n      <sun-swiper-layout>\n        <sun-swiper-layout-item>\n          <template slot="content">\n            自定义内容\n          </template>\n          <template slot="menu">\n            菜单\n          </template>\n        </sun-swiper-layout-item>\n      </sun-swiper-layout>\n      ```\n\n      ```js\n      import { SunSwiperLayout, SunSwiperLayoutItem } from \'sunflower-ui\'\n\n      export default {\n        components: {\n          SunSwiperLayout,\n          SunSwiperLayoutItem\n        }\n      }\n      ```\n\n      ### 注意\n      * 使用 `v-for` 渲染的时候请确保 `key` 的唯一性\n      * `<sun-swiper-layout></sun-swiper-layout>` 仅是一个包裹容器\n    ')])]),e("sun-markdown",[e("script",{attrs:{type:"text/html"}},[t._v("\n      ### 属性\n    ")])]),t._m(0),e("sun-markdown",[e("script",{attrs:{type:"text/html"}},[t._v("\n      ### 事件\n    ")])]),t._m(1),e("sun-markdown",[e("script",{attrs:{type:"text/html"}},[t._v("\n      ### 插槽\n    ")])]),t._m(2),e("sun-footer")],1)},i=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("table",{staticClass:"mytable"},[e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")]),e("th",[t._v("版本")])])]),e("tbody",[e("tr",[e("td",[t._v("type")]),e("td",[t._v("菜单位置")]),e("td",[e("code",[t._v("String")])]),e("td",[t._v("left / right")]),e("td",[t._v("left")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("\n          menu-width\n        ")]),e("td",[t._v("\n          菜单长度\n        ")]),e("td",[e("code",[t._v("String")])]),e("td",[t._v("\n          /\n        ")]),e("td",[t._v("\n          40%\n        ")]),e("td",[t._v("\n          -\n        ")])]),e("tr",[e("td",[t._v("\n          open\n        ")]),e("td",[t._v("\n          菜单闭合状态 [required]\n        ")]),e("td",[e("code",[t._v("Boolean")])]),e("td",[t._v("\n          true / false\n        ")]),e("td",[t._v("\n          false\n        ")]),e("td",[t._v("\n          -\n        ")])]),e("tr",[e("td",[t._v("\n          offset-number\n        ")]),e("td",[t._v("\n          触发偏移事件值(px)\n        ")]),e("td",[e("code",[t._v("Number")])]),e("td",[t._v("\n          /\n        ")]),e("td",[t._v("\n          120\n        ")]),e("td",[t._v("\n          -\n        ")])]),e("tr",[e("td",[t._v("\n          speed\n        ")]),e("td",[t._v("\n          动画速度(ms)\n        ")]),e("td",[e("code",[t._v("Number")])]),e("td",[t._v("\n          /\n        ")]),e("td",[t._v("\n          300\n        ")]),e("td",[t._v("\n          -\n        ")])]),e("tr",[e("td",[t._v("\n          menu-color\n        ")]),e("td",[t._v("\n          打开菜单后继续滑动的背景颜色\n        ")]),e("td",[e("code",[t._v("String")])]),e("td",[t._v("\n          /\n        ")]),e("td",[t._v("\n          #FFFFFF\n        ")]),e("td",[t._v("\n          -\n        ")])])])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("table",{staticClass:"mytable"},[e("thead",[e("tr",[e("th",[t._v("事件名称")]),e("th",[t._v("说明")]),e("th",[t._v("回调参数")])])]),e("tbody",[e("tr",[e("td",[t._v("\n          toggle\n        ")]),e("td",[t._v("\n          打开/关闭菜单之后触发\n        ")]),e("td",[e("code",[t._v("Boolean")]),t._v("当前菜单闭合状态\n        ")])]),e("tr",[e("td",[t._v("\n          offset\n        ")]),e("td",[t._v("\n          打开菜单之后继续滑动会触发，滑动的偏移量设置见-属性\n        ")]),e("td",[e("code",[t._v("Object")]),t._v("当前菜单滑动状态详情\n        ")])])])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("table",{staticClass:"mytable"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("说明")])])]),e("tbody",[e("tr",[e("td",[t._v("content")]),e("td",[t._v("内容")])]),e("tr",[e("td",[t._v("menu")]),e("td",[t._v("菜单")])])])])}],a={name:"swiper-layout",data:function(){return{list:[{face:"http://wx3.sinaimg.cn/mw690/005v5x0Lly1fwtiyb37tfj30jg0jg75r.jpg",name:"子非粥",msg:"黄粱一梦二十年",open:!1,id:0},{face:"http://wx1.sinaimg.cn/mw690/005v5x0Lly1fwtiybdg5bj30jg0jgmzj.jpg",name:"SGR",msg:"依旧是不懂爱也不懂情",open:!1,id:1},{face:"http://wx2.sinaimg.cn/mw690/005v5x0Lly1fwtiyatnjsj30jg0jgjts.jpg",name:"小林家的女仆",msg:"写歌的人假正经阿",open:!1,id:2},{face:"http://wx2.sinaimg.cn/mw690/005v5x0Lly1fwtiyajyrpj30jg0jf75f.jpg",name:"你为啥不理我",msg:"听歌的人最无情",open:!1,id:3},{face:"http://wx4.sinaimg.cn/mw690/005v5x0Lly1fwtiy9tmftj30jg0jgdic.jpg",name:"二哈",msg:"于是歌手从吉林到北京",open:!1,id:4},{face:"http://wx2.sinaimg.cn/mw690/005v5x0Lly1fwtiya7tyuj30jg0jggmq.jpg",name:"巫妖王",msg:"从台北到上海",id:5,open:!1},{face:"http://wx3.sinaimg.cn/mw690/005v5x0Lly1fwtiy9iszdj30jg0jgq3p.jpg",name:"有一梦",msg:"伦敦到马德里",id:6,open:!1},{face:"http://wx2.sinaimg.cn/mw690/005v5x0Lly1fwtiy94y2mj30jg0jgt9b.jpg",name:"夺情",msg:"去寻找他梦中的青鸟",id:7,open:!1},{face:"http://wx4.sinaimg.cn/mw690/005v5x0Lly1fwtiy8f0d7j30jg0je0uh.jpg",name:"男高~",msg:"郎对花 姐对花 是一段不知道是怎么开始",id:8,open:!1},{face:"http://wx2.sinaimg.cn/mw690/005v5x0Lly1fwtiy82a8aj30jg0jgwg4.jpg",name:"有没有人",msg:"也不知道要怎么样结束的旅程 一对对到人间",id:9,open:!1},{face:"http://wx4.sinaimg.cn/mw690/005v5x0Lly1fwtiy7p5u6j30jg0jgabq.jpg",name:"Love~",msg:"他发觉…这世间…有点假 这个人间有点假",id:10,open:!1},{face:"http://wx4.sinaimg.cn/mw690/005v5x0Lly1fwtiy70xkbj30jg0jgmy8.jpg",name:"可怕",msg:"可我莫名的 爱上了她… 可我莫名爱上了她",id:11,open:!1}],demo1:{form:{menuWidth:"40%",type:"right"},qrText:this.domain+"#/view/swiper-layout-view"}}},computed:{},mounted:function(){},methods:{close:function(t){t.open=!1},remove:function(t,n){this.list.splice(n,1)},demoOneOpen:function(){this.list[0]&&(this.list[0].open=!0)},demoOneClose:function(){this.list[0]&&(this.list[0].open=!1)},demoOneAppend:function(){this.list.push({face:"http://wx2.sinaimg.cn/mw690/005v5x0Lly1fwtiyajyrpj30jg0jf75f.jpg",name:"你为啥不理我",msg:"听歌的人最无情",open:!1,id:Math.random()})},demoOneRemove:function(){this.list.pop()},demoOneDiy:function(){this.list.push({face:"http://wx3.sinaimg.cn/mw690/005v5x0Lly1fwtiyb37tfj30jg0jg75r.jpg",name:"子非粥",msg:"黄粱一梦二十年",open:!1,menuWidth:this.demo1.form.menuWidth,type:this.demo1.form.type,id:Math.random(),menuColor:"right"===this.demo1.form.type?"#FE3C32":"#C8C7CF"})},demoOneOffset:function(t){this.list.splice(t,1)}}},o=a,m=(e("43e0"),e("2877")),l=Object(m["a"])(o,s,i,!1,null,null,null);l.options.__file="swiper-layout.vue";n["default"]=l.exports}}]);