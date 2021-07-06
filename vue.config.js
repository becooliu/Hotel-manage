var path = require("path");

module.exports = {
  //关闭esLint语法检查功能
  lintOnSave: false,
  //开发服务器相关配置
  devServer: {
    contentBase: path.join(__dirname, "public"),
    //设置开发服务器的端口号
    port: 8848,
  },
  //配置webpack 相关
  configureWebpack: {
    resolve: {
      //配置路径别名
      alias: {
        "@v": path.join(__dirname, "src/views"),
        "@c": path.join(__dirname, "src/components"),
      },
    },
  },
};
