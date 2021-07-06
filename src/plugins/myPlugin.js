//声明自己的插件
import { get, post, setToken } from "../utils/request";

export default {
  install: function(Vue) {
    Vue.mixin({
      methods: {
        $get(url, params) {
          return get(url, params);
        },
        $post(url, params) {
          return post(url, params);
        },
        $setToken() {
          setToken();
        },
      },
    });
  },
};
