
import axios from "axios";
import store from "@/utils/store";
import { Toast } from 'vant';
import 'vant/es/toast/style';
// import VuexStore from "../store/index";

// 默认配置
const defaultConfig = {
  baseURL: process.env.VUE_APP_API_BASE_URL,
  // baseURL: 'https://smart-cooker-qa.geebento.com/',
  headers: {},
  timeout: 120000,
};

const SUCCESS_CODE = new Set([undefined, 0, 200]);

// 合并默认参数
axios.defaults = Object.assign(axios.defaults, defaultConfig);

axios.interceptors.request.use(
  function(config) {
    console.log('process.env', process.env)
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function(response) {
    const { data } = response;
    const { code, msg } = data;
    if (SUCCESS_CODE.has(code)) {
      return response.data;
    } else if(code === 100000) {//token 错误、过期
      const { host, href } = window.location;
      return (window.location.href = `http://${host}/index.html#/login?redirect=${encodeURIComponent(href)}`);
    } else {
      console.log('error', msg)
      Toast.fail(msg || data.message);
      return Promise.reject(response.data);
    }
  },
  function(error) {
    console.log('error', error)
  }
);

function addToken(headers) {
  const token = store.local.get("tally_token");
  // const lang = VuexStore.getters.getLang || 'zh-CN'
  const lang = 'zh-CN'
  if (!token) return headers;
  return {
    ...headers,
    Authorization: token,
    'accept-language': lang
  };
}

export default {
  defaultConfig,
  upload(link, userdata = {}) {
    if (!link) return false;

    let headers = { "Content-Type": "multipart/form-data" };
    headers = addToken(headers);

    return axios({
      method: "post",
      url: link,
      data: userdata,
      headers: headers,
    });
  },
  get(link, userdata = {}) {
    if (!link) return false;

    let headers = {
      "Content-Type": "application/json",
    };
    headers = addToken(headers);
    return axios({
      method: "get",
      url: link,
      params: {
        ...userdata,
      },
      headers: headers,
    });
  },
  post(link, userdata = {}) {
    if (!link) return false;

    let headers = {
      "Content-Type": "application/json",
    };
    headers = addToken(headers);
    return axios({
      method: "post",
      url: link,
      data: {
        ...userdata,
      },
      headers: headers,
    });
  },
  uploadImage(link, userdata = {}) {
    if (!link) return false;

    let headers = {
      "Content-Type": "multipart/form-data",
    };
    headers = addToken(headers);
    return axios({
      method: "post",
      url: link,
      data: userdata,
      headers: headers,
    });
  },
};
