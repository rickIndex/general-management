/**
 * 环境配置
 */
const env = import.meta.env.MODE || "prod";
const EnvConfig = {
  dev: {
    baseApi: "/",
    mockApi:
      "https://www.fastmock.site/mock/6e7dca8b62d05cc7e6805fef2684b9f4/api",
  },
  test: {
    baseApi: "/",
    mockApi:
      "https://www.fastmock.site/mock/6e7dca8b62d05cc7e6805fef2684b9f4/api",
  },
  prod: {
    baseApi: "/",
    mockApi:
      "https://www.fastmock.site/mock/6e7dca8b62d05cc7e6805fef2684b9f4/api",
  },
};
export default {
  env,
  mock: true,
  namespace: "manager",
  ...EnvConfig[env],
};
