#### 搭建Vue项目环境

本地建一个`Environment`文件夹

1、安装`Node.js`

官网下载安装包，安装到`Enviroment/node.js`下

2、更换`npm`镜像源

```
npm config set registry https://registry.npm.taobao.org // 推荐
npm install -g cnpm –registry=https://registry.npm.taobao.org // 不推荐,cnpm可能有bug
```

3、安装全局`webpack`

```
npm install webpack
```

4、安装`Vue Cli`脚手架

```
npm install -g vue-cli
```

5、管理员身份运行`VS Code`，打开终端

```
npm install
npm run serve
```

注：`npm run serve`可能报错需要安装`node-sass`

```
npm i node-sass --sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
```

也可以不用`node-sass`安装成`dart-sass`

```
npm uninstall node-sass
npm install --dev sass
```

