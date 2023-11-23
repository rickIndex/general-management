/**
 * Storage二次封装
 */
import config from "../config";

export default {
  setItem(key, val) {
    let storage = this.getStorage();
    //方括号语法，添加属性
    storage[key] = val;
    //JSON.stringify()反序列化
    window.localStorage.setItem(config.namespace, JSON.stringify(storage));
  },
  getItem(key) {
    return this.getStorage()[key];
  },
  getStorage() {
    return JSON.parse(window.localStorage.getItem(config.namespace) || "{}");
  },
  clearItem(key) {
    let storage = this.getStorage();
    delete storage[key];
    window.localStorage.setItem(config.namespace, JSON.stringify(storage));
  },
  clearAll() {
    window.localStorage.clear();
  },
};
