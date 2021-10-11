# React Ts Project Template

## 安装

### webpack

|描述|插件|
|:-:|:-:|
|脚手架| webpack（核心）<br/> webpack-cli（命令行）<br/> webpack-dev-server（调试必备）|
|合并webpack配置文件|webpack-merge|

```
npm i -D webpack webpack-cli webpack-dev-server webpack-merge
```

### react全家桶🪣

|描述|插件|
|:-:|:-:|
|前端框架| react（核心）<br/> react-dom <br/> react-router-dom |
|框架配套存储|react-redux（内存存储）|

```
npm i -S react react-dom react-router-dom react-redux
```

### typescript配置

|描述|插件|
|:-:|:-:|
|typescirpt编译器| typescript |

```
npm i -D typescript
```

typescript在项目中有两种使用方式：

`ts-loader + babel-loader`

打包项目时，ts-loader调用typescript编译器将ts转化为js，然后再用babel-loader根据.babelrc配置处理js文件。

`@babel/preset-typescript`

打包项目时，直接用babel插件将ts转化为js，不用调用typescirpt，这样编译速度会更快。此时typescript在此主要用来做语法检查。


### babel

[babel文档](https://www.babeljs.cn/)

|描述|插件|
|:-:|:-:|
|babel基本配置| [@babel/core](https://babel.dev/docs/en/babel-core#default_extensions) babel核心 <br/> [@babel/preset-env](https://www.babeljs.cn/docs/babel-preset-env)  ES(x)转化成ES(y)，其中x>y。js浏览器兼容|
|polyfill|[@babel/plugin-transform-runtime](https://babeljs.io/docs/en/babel-plugin-transform-runtime) 去掉重复引用声明 <br/> [@babel/runtime](https://babeljs.io/docs/en/babel-runtime) plugin-transform-runtime依赖的常见polyfill |
|webpack相关babel配置|[babel-loader](https://github.com/babel/babel-loader) 通过babel-loader在webpack中加载其他babel插件，其配置可以写在webpack配置文件中，但一般会单独在项目根目录下放一个`.babelrc`文件去配置。｜
|typescript相关babel配置|[@babel/preset-typescript](https://babeljs.io/docs/en/babel-preset-typescript#docsNav) 将typescript转化成js语法|
|react相关babel配置|[@babel/preset-react](https://babeljs.io/docs/en/babel-preset-react#docsNav) 将react转化成js语法|
|antd相关babel配置|[babel-plugin-import](https://github.com/ant-design/babel-plugin-import)|

```
npm i -D @babel/core @babel/preset-env 
npm i -D @babel/plugin-transform-runtime @babel/runtime
npm i -D babel-loader 
npm i -D @babel/preset-react 
npm i -D @babel/preset-typescript
npm i -D babel-plugin-import
```

### loader

|描述|插件|
|:-:|:-:|
|处理html文件|html-loader|
|处理图片、字体文件|url-loader|
|样式转化| css-loader <br/> style-loader <br/> less-loader|
|css浏览器兼容|postcss-loader <br/> autoprefixer|

```
npm i -D style-loader css-loader less-loader
npm i -D postcss-loader autoprefixer
npm i -D html-loader url-loader
```

### plugin

|描述|插件|
|:-:|:-:|
|html文件打包|html-webpack-plugin|
|tsconfig.json路径别名映射到webpack中|tsconfig-paths-webpack-plugin|

```
npm i -D html-webpack-plugin tsconfig-paths-webpack-plugin
```

### 开发过程中使用的包

```
npm i -S antd axios dayjs
```