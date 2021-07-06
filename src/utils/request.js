/**
 * 请求相关的方法
 */

import axios from "axios";

//导入并引用nprogress 进度条
import NProgress from "nprogress";
import "nprogress/nprogress.css";

//初始化一个axios 对象
const instance = axios.create({
  baseURL: "http://bingjs.com:83",
  timeout: 20000,
});

// 添加请求拦截器
instance.interceptors.request.use(
  function(config) {
    // 在发送请求之前做些什么
    NProgress.start();
    return config;
  },
  function(error) {
    NProgress.done();
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  function(response) {
    // 对响应数据做点什么
    NProgress.done();
    return response;
  },
  function(error) {
    // 对响应错误做点什么
    NProgress.done();
    return Promise.reject(error);
  }
);

let setToken = function() {
  instance.defaults.headers.common["token"] = sessionStorage.getItem("token");
};

//创建get 请求方法
let get = async function(url, params) {
  //get 请求，params 需要使用花括号包裹，post 不需要
  let { data } = await instance.get(url, { params });
  return data;
};

//创建post 请求方法
let post = async function(url, params) {
  let { data } = await instance.post(url, params);
  return data;
};

//导出get 和post 方法
export { get, post, setToken };
