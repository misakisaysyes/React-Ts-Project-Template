# React Ts Project Template

## 模版使用

```
npm i
npm start
```

## 模版开发记录 📝

### webpack

|         描述          |                                      插件                                      |
| :-------------------: | :----------------------------------------------------------------------------: |
|        脚手架         | webpack（核心）<br/> webpack-cli（命令行）<br/> webpack-dev-server（调试必备） |
| 合并 webpack 配置文件 |                                 webpack-merge                                  |

```
npm i -D webpack webpack-cli webpack-dev-server webpack-merge
```

### react 全家桶 🪣

|     描述     |                        插件                         |
| :----------: | :-------------------------------------------------: |
|   前端框架   | react（核心）<br/> react-dom <br/> react-router-dom |
| 框架配套存储 |               react-redux（内存存储）               |

```
npm i -S react react-dom react-router-dom react-redux
```

### typescript 配置

|       描述        |    插件    |
| :---------------: | :--------: |
| typescirpt 编译器 | typescript |

```
npm i -D typescript
```

typescript 在项目中有两种使用方式：

`ts-loader + babel-loader`

打包项目时，ts-loader 调用 typescript 编译器将 ts 转化为 js，然后再用 babel-loader 根据.babelrc 配置处理 js 文件。

`@babel/preset-typescript`

打包项目时，直接用 babel 插件将 ts 转化为 js，不用调用 typescirpt，这样编译速度会更快。此时 typescript 在此主要用来做语法检查。

### babel

[babel 文档](https://www.babeljs.cn/)

|            描述            |                                                                                                            插件                                                                                                             |
| :------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|       babel 基本配置       |            [@babel/core](https://babel.dev/docs/en/babel-core#default_extensions) babel 核心 <br/> [@babel/preset-env](https://www.babeljs.cn/docs/babel-preset-env) ES(x)转化成 ES(y)，其中 x>y。js 浏览器兼容             |
|          polyfill          | [@babel/plugin-transform-runtime](https://babeljs.io/docs/en/babel-plugin-transform-runtime) 去掉重复引用声明 <br/> [@babel/runtime](https://babeljs.io/docs/en/babel-runtime) plugin-transform-runtime 依赖的常见 polyfill |
|  webpack 相关 babel 配置   |             [babel-loader](https://github.com/babel/babel-loader) 通过 babel-loader 在 webpack 中加载其他 babel 插件，其配置可以写在 webpack 配置文件中，但一般会单独在项目根目录下放一个`.babelrc`文件去配置。             |
| typescript 相关 babel 配置 |                                                     [@babel/preset-typescript](https://babeljs.io/docs/en/babel-preset-typescript#docsNav) 将 typescript 转化成 js 语法                                                     |
|   react 相关 babel 配置    |                                                            [@babel/preset-react](https://babeljs.io/docs/en/babel-preset-react#docsNav) 将 react 转化成 js 语法                                                             |
|    antd 相关 babel 配置    |                                                                          [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)                                                                           |

```
npm i -D @babel/core @babel/preset-env
npm i -D @babel/plugin-transform-runtime @babel/runtime
npm i -D babel-loader
npm i -D @babel/preset-react
npm i -D @babel/preset-typescript
npm i -D babel-plugin-import
```

### loader

|        描述        |                      插件                       |
| :----------------: | :---------------------------------------------: |
|   处理 html 文件   |                   html-loader                   |
| 处理图片、字体文件 |                   url-loader                    |
|      样式转化      | css-loader <br/> style-loader <br/> less-loader |
|   css 浏览器兼容   |        postcss-loader <br/> autoprefixer        |

```
npm i -D style-loader css-loader less-loader
npm i -D postcss-loader autoprefixer
npm i -D html-loader url-loader
```

### plugin

|                  描述                   |             插件              |
| :-------------------------------------: | :---------------------------: |
|              html 文件打包              |      html-webpack-plugin      |
| tsconfig.json 路径别名映射到 webpack 中 | tsconfig-paths-webpack-plugin |

```
npm i -D html-webpack-plugin tsconfig-paths-webpack-plugin
```

### 开发过程中使用的包

|     描述     | 插件  |
| :----------: | :---: |
| 前端 UI 框架 | antd  |
|     请求     | axios |
|  日期处理库  | dayjs |

```
npm i -S antd axios dayjs
```

### 代码质量

#### 代码格式化

|         描述         |                                                                                                      插件                                                                                                      |
| :------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| Prettier 结合 ESLint |                     prettier 核心 <br/> eslint-config-prettier 解决 ESLint 和 Prettier 的样式规范冲突，以 Prettier 为准 <br/> eslint-plugin-prettier 将 Prettier 作为 ESLint 来使用 <br/>                      |
|   ESLint 规范代码    | eslint 核心<br/> @typescript-eslint/parser Eslint 解析器，用于解析 typescript，从而进行规范和检查<br/> @typescript-eslint/eslint-plugin 定义好的 typescript 规范 <br/> eslint-plugin-react 定义好的 react 规范 |
|   less 代码格式化    |                                                                                       stylelint <br/> stylelint-prettier                                                                                       |

Prettier 用来格式化项目代码，ESLint 专治 Js 等、StyleList 专治 Css 等。
Prettier 借由 ESLint 和 StyleLint 的规则格式化代码。

```
npm i -D prettier eslint-config-prettier eslint-plugin-prettier
npm i -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react
npm i -D stylelint stylelint-prettier
```

#### 提交处理

|             描述             |                      插件                       |
| :--------------------------: | :---------------------------------------------: |
|       git gommit hook        |                      husky                      |
|     对所有文件做格式检查     |                   lint-staged                   |
| 对 commit message 格式做规定 | @commitlint/config-conventional @commitlint/cli |

```
npm i -D husky lint-staged @commitlint/config-conventional @commitlint/cli
```
