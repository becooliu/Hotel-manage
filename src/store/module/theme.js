//可以从http://zhongguose.com/ 中国色这个网站上选色
export default {
  //设置为私有命名空间
  namespaced: true,
  state: {
    theme: [
      {
        name: "蓝色主题",
        themeName: "blueTheme",
        value: "#3170a7"
      },
      {
        name: "绿色主题",
        themeName: "greenTheme",
        value: "#6e8b74"
      }
    ]
  }
}
