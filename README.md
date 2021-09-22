### 每日学习记录

### 每日知识点学习

[表情地址](https://juejin.cn/post/6983870478674821128#heading-4)

2021年8月11日

- async await
- 文章发布
- [vuedraggable]()
- [Sortable](https://github.com/SortableJS/Sortable)
- 自定义事件
- [js设计模式](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)
- ❌对象原型
- ❌编码解码

2021年8月12日

- 分支不及时更新 需要 git fetch

- 如果想为输入的变量重新取一个名字，`import`命令要使用`as`关键字，将输入的变量重命名。

  ```javascript
  import { lastName as surname } from './profile.js';
  ```

- eventbus

- 组件改变之后需要重新拉取一下

2021年8月13日

- computed样式
- cursor: not-allowed; // 鼠标禁用样式

2021年8月14日

- ```javascript
  const escapeRegexpString = (value = '') => 
  String(value).replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');  正则匹配进行 转义
  ```

- element 里面 select 组件 搜索 键入值时候进行 搜索 ；分别进行判断当前的类别 跳转到 option内部的组件里面的方法进行 进行正则判断。

- forEach跳出本次循环 return; 结束循环 throw一个错误

- vant  电脑端有问题 //  字符串输入加判断

2021年8月15日

- 休息

2021年8月16日

- 本地开发中 `.editor-container-wrapper` 蒙层问题

- sourcetree 查看

- json.schema 中 `resizeable--可调整大小` 

  ```javascript
    // 如果是仅可调整宽度高度自适应的
    if (option === 'width' || option === 'none') {
      shapStyle.height = undefined
      shapStyle.minHeight = style.height + 'px'
    }
  ```

- ```css
  // css hover  时候显示编辑 Nice
  .shape{
     &:hover {
      border: 1px dotted $--color-primary;
      .shape-tool-bar-wrapper {
        display: flex;
      }
    }
  }
  ```
  
- cross-env 跨环境

2021年8月17日

- ```javascript
  npm init vite@latest my-vue-app --template vue-ts 
  $ npm init vite@latest 一样
  ```
  
- ![image-20210817110421179](C:\Users\Dell\AppData\Roaming\Typora\typora-user-images\image-20210817110421179.png)

- `vite` 以当前工作目录作为根目录启动开发服务器。你也可以通过 `vite serve some/sub/dir` 来指定一个替代的根目录。

-  shims-vue.d.ts 的作用是帮助ts识别vue文件

-  [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) 非常的Nice  对于vue3来说 

  ![image-20210817134226063](C:\Users\Dell\AppData\Roaming\Typora\typora-user-images\image-20210817134226063.png)

  ![image-20210817134420182](C:\Users\Dell\AppData\Roaming\Typora\typora-user-images\image-20210817134420182.png)

- TypeScript 使用 tsconfig.json 文件作为其配置文件

- [dotenv](https://www.npmjs.com/package/dotenv)  `Dotenv 是一个零依赖模块，它将环境变量从 .env 文件加载到 process.env 中。 在与代码分开的环境中存储配置基于十二因素应用程序方法。`

- [Failed to load config "@vue/typescript/recommended" to extend from.](https://www.jianshu.com/p/35eab26d7db0)

- 配置ts、ts保存 prettier格式化、初始化项目、vite配置、vue3配置

- vue sugar 里面需要eslint忽略一些组件申明。

- [mock数据](https://www.fastmock.site/)

2021年8月18日

- 路由安装、scss安装、ant-design-vue 搭建、x6搭建
- 环境变量搭建 dev、fat、production

2021年8月19日

- ```typescript
  interface LabelledValue {
    label: string;
  }
  
  function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
  }
  
  let myObj = {size: 10, label: "Size 10 Object"};
  printLabel(myObj);
  
  //
  LabelledValue接口就好比一个名字，用来描述上面例子里的要求。 它代表了有一个 label属性且类型为string的对象。 需要注意的是，我们在这里并不能像在其它语言里一样，说传给 printLabel的对象实现了这个接口。我们只会去关注值的外形。 只要传入的对象满足上面提到的必要条件，那么它就是被允许的。
  ```


2021年8月20日

- ts学习

- x6代码源码

- Umi，中文可发音为**乌米**，是可扩展的企业级前端应用框架。

- X6代码阅读 

  ![image-20210820150337367](C:\Users\Dell\AppData\Roaming\Typora\typora-user-images\image-20210820150337367.png)

  几个例子

  er图：

  ![image-20210820150520630](C:\Users\Dell\AppData\Roaming\Typora\typora-user-images\image-20210820150520630.png)

  画图（流程图）：

  ![image-20210820150606023](C:\Users\Dell\AppData\Roaming\Typora\typora-user-images\image-20210820150606023.png)

  ![image-20210820142114827](C:\Users\Dell\AppData\Roaming\Typora\typora-user-images\image-20210820142114827.png)

  初始化时侯将graph 实例初始化部分参数

  `this.initStencil()` 初始化左侧流程图里面 小图标

  `this.initEvent()` 初始化画板里面的时间

  `this.initKeyboard()` 键盘注册事件

2021年8月21日

2021年8月22日

2021年8月23日

- js import ？

- npm run  npm 脚本的原理非常简单。每当执行`npm run`，就会自动新建一个 Shell，在这个 Shell 里面执行指定的脚本命令。因此，只要是 Shell（一般是 Bash）可以运行的命令，就可以写在 npm 脚本里面。

  比较特别的是，`npm run`新建的这个 Shell，会将当前目录的`node_modules/.bin`子目录加入`PATH`变量，执行结束后，再将`PATH`变量恢复原样。这意味着，当前目录的`node_modules/.bin`子目录里面的所有脚本，都可以直接用脚本名调用，而不必加上路径

 - [SVG](https://developer.mozilla.org/zh-CN/docs/Web/SVG)中的**`<foreignObject>`**元素允许包含来自不同的XML命名空间的元素。在浏览器的上下文中，很可能是XHTML / HTML。

 - 配置项 可以先从图表示例中看。

 - `git clone https://shenwenwu@gitlab.enncloud.cn/FNInfraFront/platform/lowcode/component-develop-platform.git`

2021年8月24日

- nuxt.js 服务端渲染 客户端请求资源 -> 服务端进行响应（一般在 asyncData 会对主要页面数据进行预先请求，获取到的数据会交由服务端拼接成 html 返回前端渲染，以此提高首屏加载速度和进行 seo 优化。）进行ssr合并处理 -> 返回html 进行渲染 
- 组件开发平台调试
- 可视化搭建的过程
- json-schema  **JSON 模式（JSON Schema）是一种基于 JSON 格式定义 JSON 数据结构的规范**。

2021年8月25日

- 基础知识学习
- 准备造轮子
- React hooks  React 有**类组件**和**函数组件**两种写法。在没有Hooks以前，需要State的组件只能通过类组件实现
- Math.ceil(3.45) /4 

2021年8月26日

- **脚本生成本地测试文件**
- 你不知道的Js 
- process.stdin.on 控制
- 一个shim是一个库,它将一个新的API引入到一个旧的环境中,而且仅靠旧环境中已有的手段实现
  一个polyfill就是一个用在浏览器API上的shim.我们通常的做法是先检查当前浏览器是否支持某个API,如果不支持的话就加载对应的polyfill.然后新旧浏览器就都可以使用这个API了

2021年8月27日

- 滚动条的样式

- js执行机制

  ```javascript
   async function async1() {
        console.log('async1 start')
        await async2()
        console.log('async1 end')
      }
  
      async function async2() {
        console.log('async2')
      }
   
      console.log('script start')
     
      setTimeout(function () {
        console.log('setTimeout')
      }, 0)
      
      async1()
  
      new Promise((resolve) => {
        console.log('promise1')
        resolve()
      }).then(function () {
        console.log('promise2')
      })
  
      console.log('script end')
  
  //输出
  ```

- 关于样式的修改的话，找不到具体的值 时候 可以查看是否有伪元素

2021年8月29日

- element 表格  `this.$refs.experienceInfoTable.clearSort();`
- element 表格排序逻辑编写 可以通过数据来

2021年8月30日

- webpack 打包后为什么多了这么多注释符、为了方便在 `development` 阅读，在 `production` 模式下会被移除

- [自定义分析webpack打包过程分析](https://github.com/youngwind/blog/issues/99)

- 创建新的分支并且切换到 `git checkout -b`

- ❓ 父元素设置min-height子元素设置height100%继承不了 

- background-color: revert;  可以进行覆盖之前的样式

- `git branch -m oldName newName`修改分支名称

-  *编译器的工作可以被分解为三个主要阶段* *解析（Parsing），转化（Transformation）以及* ** 代码生成（Code Generation）*

- ###### assert.deepStrictEqual(actual, expected[, message]) 断言 断言出错时会输出

- ✊**单行文本手机端开发**

2021年8月31日

- **原型链：**JavaScript 规定，所有对象都有自己的原型对象（prototype）。一方面，任何一个对象，都可以充当其他对象的原型；另一方面，由于原型对象也是对象，所以它也有自己的原型。因此，就会形成一个“原型链”（prototype chain）：对象到原型，再到原型的原型
- 调用栈 是 解析器追踪函数执行流的一种机制。当执行环境中调用了多个函数时候，通过这种机制，能够追踪到哪个函数正在执行。
- <img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2017/11/11/ceb8f35afdeaee60e60053fa73a5cc01~tplv-t2oaga2asx-watermark.awebp" alt="img" style="zoom:25%;" />
-  JavaScript 引擎除了在任何给定时刻执行单个程序块外，从未做过任何其他事情。所有环境的共同特点是一个称为事件循环的内置机制，它处理程序的多个块在一段时间内的执行，每次都调用 JS 引擎。
- ✊**单选组件手机端开发**

2021年9月1日

- Event Loop 是一个很重要的概念，指的是计算机系统的一种运行机制。

- [《什么是 Event Loop？》](https://www.ruanyifeng.com/blog/2013/10/event_loop.html)

- ###### ❗[How JavaScript works: Event loop and the rise of Async programming + 5 ways to better coding with async/await](https://blog.sessionstack.com/how-javascript-works-event-loop-and-the-rise-of-async-programming-5-ways-to-better-coding-with-2f077c4438b5)

- `#!/usr/bin/env node`需要来指定这个脚本的解释程序是node

- nuxt.js的调试

- async-validator 代码调试

- ✊**数值组件开发**

2021年9月2日

- vue use()  检查插件是否安装、没有安装时候，那么调用插件的install方法，并传入Vue实例
- 微信读书里面还不错  能看到很多书

2021年9月3日

- rem -> root em

- css 优先级

- initial和inherit 是全局都会有的

- 一切要从我们熟悉的display属性开始。给元素添加display: flex，该元素变成了一个弹性容器（flexcontainer），它的直接子元素变成了弹性子元素（flex item）。弹性子元素默认是在同一行按照从左到右的顺序并排排列。弹性容器像块元素一样填满可用宽度，但是弹性子元素不一定填满其弹性容器的宽度。弹性子元素高度相等，该高度由它们的内容决定。

- [npm link](https://javascript.ruanyifeng.com/nodejs/npm.html#toc18) 开发NPM模块的时候，有时我们会希望，边开发边试用

  例子：项目中npm link 之后 会将bin 目录里面指令注册到全局里面，直接执行。

- husky  husky 是一个Git Hook 工具。 husky 其实就是一个为git 客户端增加hook 的工具。 将其安装到所在仓库的过程中它会自动在 .git/ 目录下增加相应的钩子实现在 pre-commit 阶段就执行一系列流程保证每一个 commit 的正确性。

- 纯函数 - 好读、代码调试比较好、几乎没有副作用

- 脚手架实现

- [commander - 完整的 node.js命令行解决方案。](https://github.com/tj/commander.js/blob/HEAD/Readme_zh-CN.md)

 2021年9月15日

- feature/sww_
- 伪类是选择器的一种，它用于选择处于特定状态的元素，比如当它们是这一类型的第一个元素时，或者是当鼠标指针悬浮在元素上面的时候。它们表现得会像是你向你的文档的某个部分应用了一个类一样，帮你在你的标记文本中减少多余的类，让你的代码更灵活、更易于维护。
- flex 1
- history 和  hash 区别

 2021年9月16日

- 准备研究一下 拖拽

- edge左右页面滑动禁止 'about:flags' -> ' scrolling personality' 禁用

- ![image-20210916161404604](C:\Users\Dell\AppData\Roaming\Typora\typora-user-images\image-20210916161404604.png)

- draggable 本质上是基于group来进行分组的 group相等的话 可以进行拖拽，clone的本质是 拖拽时候进行对目标容器进行复制一个组件、并不改变clone的拖拽的那个容器，动画Transition用于拖拽开始结束进行的动画。

  <img src="C:\Users\Dell\AppData\Roaming\Typora\typora-user-images\image-20210916163043636.png" alt="image-20210916163043636" style="zoom:25%;" />

- 拖拽前后都会触发重新渲染，包括位置的变化。拖拽时候 增加了class 

  ![image-20210916233303646](C:\Users\Dell\AppData\Roaming\Typora\typora-user-images\image-20210916233303646.png)

- 搞了一下性能监视器 标签页切换比较会提前进行内存回收、每次点击一个操作 基本都会触发 cpu 的运算

 2021年9月17日

- pc-plateform-editor ->  draggable-> render触发 -> 用html写vue
- 分支提交规范 先与 Master 合并(git pull ) 然后进行 push  到自己分支  最后gitlab上进行合并请求
- 原生html 加 render 进行对页面的修改
- Move 传入到dragger然后进行触发

 2021年9月18日

- element 表格 fixed之后 其实它是脱离了容器本身，然后需要对fixed之后的模块添加Mousewheel处理。所以会有卡顿，其实并不是卡顿

  ```js
        handleFixedMousewheel(event, data) {
          const bodyWrapper = this.bodyWrapper;
          if (Math.abs(data.spinY) > 0) {
            const currentScrollTop = bodyWrapper.scrollTop;
            if (data.pixelY < 0 && currentScrollTop !== 0) {
              event.preventDefault();
            }
            if (data.pixelY > 0 && bodyWrapper.scrollHeight - bodyWrapper.clientHeight > currentScrollTop) {
              event.preventDefault();
            }
            bodyWrapper.scrollTop += Math.ceil(data.pixelY / 5);
          } else {
            bodyWrapper.scrollLeft += Math.ceil(data.pixelX / 5);
          }/*  */
        },
  ```

- 继续研究拖拽 dragger本质是把封装了一层节点对象 塞给 sortable 进行原生操作

- **`nodeType`** 属性可用来区分不同类型的节点，比如 [`元素`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element), [`文本`](https://developer.mozilla.org/zh-CN/docs/Web/API/Text) 和 [`注释`](https://developer.mozilla.org/zh-CN/docs/Web/API/Comment)。

- 研究Sortable ；

  整个还是 创建实例（传入元素，选项），实例的原型函数初始化了很多方法。

  ```javascript
  1.  on -> 注册事件
    function on(el, event, fn) {
      el.addEventListener(event, fn, !IE11OrLess && captureMode);
    }
  ```


 2021年9月19日

- 放假

 2021年9月20日

- 放假

 2021年9月21日

- 放假

 2021年9月22日

- 自定义组件 v-model
- max-width 覆盖 width
- codesandbox 使用 要多刷新
- 

 2021年9月23日

 2021年9月24日

 2021年9月25日

 2021年9月26日
