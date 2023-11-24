import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import * as ELIconModules from "@element-plus/icons";
import "element-plus/theme-chalk/index.css";
import request from "./utils/request";
import storage from "./utils/storage";
import api from "./api";
import store from "./store";
// console.log("环境变量=>", import.meta.env);

const app = createApp(App);
for (let iconName in ELIconModules) {
  app.component(iconName, ELIconModules[iconName]);
}
app.config.globalProperties.$request = request;
app.config.globalProperties.$storage = storage;
app.config.globalProperties.$api = api;

app.use(router).use(store).use(ElementPlus).mount("#app");
