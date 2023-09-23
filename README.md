## vue-fabric-editor

基于 fabric.js 和 Vue 开发的插件化图片编辑器，可自定义字体、素材、设计模板、右键菜单、快捷键。

![image](https://github.com/susudmn/vue-su-fabric-editor/assets/125255256/3ee98e08-532f-43ec-89a8-aa900fb06cfb)

![image](https://github.com/susudmn/vue-su-fabric-editor/assets/125255256/860c39a5-6cf9-44cf-87e0-8b005cb88ecb)

![image](https://github.com/susudmn/vue-su-fabric-editor/assets/125255256/789e4321-4255-480a-9003-c555475317ea)

![image](https://github.com/susudmn/vue-su-fabric-editor/assets/125255256/860e87f2-4850-4584-9e81-33f47705ea09)

![image](https://github.com/susudmn/vue-su-fabric-editor/assets/125255256/14002e5e-607f-4259-a20f-4d56da95037d)

![image](https://github.com/susudmn/vue-su-fabric-editor/assets/125255256/db599dfb-93b6-4436-9a68-67723e7c9cc5)

![image](https://github.com/susudmn/vue-su-fabric-editor/assets/125255256/9276ab95-c7f4-4509-ac6d-356b3663277d)

## 特点

1. 插件化架构：可自定义素材、右键菜单、快捷键等功能，易扩展。
2. 简洁易用：以轻量、简洁为主的图形编辑器，而非大而全的在线PS类的重行设计工具。
3. 功能齐全：自定义模板、渐变、自定义字体等功能，满足轻量图片编辑场景。

## 已有功能

- 导入 JSON 文件
- 保存为 PNG、SVG、JSON 文件
- 插入 SVG、图片文件
- 多元素水平、垂直对齐方式
- 字体模板
- 组合/拆分组合
- 图层及顺序调整
- 撤销/重做
- 背景属性设置
- 外观属性/字体属性/描边/阴影
- 自定义字体
- 自定义模板素材
- 快捷键
- 右键菜单
- 辅助线
- 标尺
- 图片替换
- 图片滤镜
- 国际化

## 使用

### 启动项目

请先安装node.js v16，然后执行以下命令：

```
yarn install
yarn serve
```

为非web前端开发人员准备了[部署教程](https://t.zsxq.com/0drqSuyjY)，快速解决你的部署需求，你可以联系我进行**有偿的部署、定制开发**。

### 自定义素材

可自定义字体、设计模板、标题模板等。


## 规划

### 可能新增功能

第一阶段

- [X] 缩放
- [X] 三角形、箭头、线条
- [X] 复制 粘贴 快捷键
- [X] 拖动模式，放大缩小
- [X] 画布大小保存
- [X] 绘制线条
- [ ] svgIcon 汇总
- [X] 标题样式列表模板
- [X] 预览

第二阶段

- [X] 图片替换
- [X] 渐变配置
- [ ] 平铺背景、等比例背景
- [ ] 图片裁剪
- [X] 滤镜
- [X] 描边 strokeDashArray

第三阶段

- [ ] monorepo升级 进行中
- [X] 插件化
- [X] 标尺插件
- [ ] 截图插件
- [ ] 滤镜插件
- [X] 画布插件
- [X] 其他工具函数
- [ ] @fabricEditor SDK封装
- [ ] 基于插件开发移动端
- [ ] 基于插件开发其他图片应用
- [ ] 文档建设(中英文)

## License

Licensed under the MIT License.
