/**
 * axios二次封装
 */
import axios from "axios";
import config from "./../config";
import { ElMessage } from "element-plus";
import router from "../router";
const TOKEN_INVALID = "Token认证失败, 请重新登录";
const NETWORK_ERROR = "网络请求异常, 请稍后重试";

//创建axios实例对象，添加全局配置
const instance = axios.create({
  baseURL: config.baseApi,
  timeout: 8000,
});

//请求拦截
instance.interceptors.request.use((req) => {
  const headers = req.headers;
  if (!headers.Authorization) {
    headers.Authorization = "Bear Jack";
  }
  return req;
});

//响应拦截
instance.interceptors.response.use((res) => {
  const { code, data, msg } = res.data;
  if (code === 200) {
    return data;
  } else if (code === 40001) {
    ElMessage.error(TOKEN_INVALID);
    setTimeout(() => {
      router.push("/login");
    }, 3000);
    return Promise.reject(TOKEN_INVALID);
  } else {
    ElMessage.error(msg || NETWORK_ERROR);
    return Promise.reject(msg || NETWORK_ERROR);
  }
});

/**
 * 请求核心参数
 */
function request(options) {
  options.method = options.method || "get";
  if (options.method.toLowerCase() === "get") {
    options.params = options.data;
  }
  if (typeof options.mock != "undefined") {
    config.mock = options.mock;
  }
  if (config.env === "prod") {
    instance.defaults.baseURL = config.baseApi;
  } else {
    instance.defaults.baseURL = config.mock ? config.mockApi : config.baseApi;
  }
  return instance(options);
}

//请求方法快捷封装
["get", "post", "put", "delect", "patch"].forEach((item) => {
  request[item] = (url, data, options) => {
    return request({
      method: item,
      url,
      data,
      ...options,
    });
  };
});

export default request;
