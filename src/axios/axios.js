import axios from 'axios'
import service from './Api'
import { Toast } from 'vant'
import 'vant/lib/index.css'


const instance = axios.create({
  baseURL: 'https://smartbox.wetech-ecology.com/',
  timeout:3000
})

const Http = {};

for (let key in service) {
  let api = service[key]; //url method


  //async作用，：避免进入回调地狱

  Http[key] = async function (param, isFormData = false, config = {}) {
    console.log(param);
    let newParams = {}
    if (param && isFormData) {
      newParams = new FormData()
      for (let i in param) {
        newParams.append(i, params[i])
      }
    } else {
      newParams = param
    }
    let response = {};
    if (api.method === 'put' || api.method === 'post' || api.method === 'patch') {
      try {
        response = await instance[api.method](api.url, newParams, config)
      } catch (err) {
        response = err
      }
    } else if (api.method === 'get' || api.method === 'delete') {
      config.param = newParams;
      try {
        response = await instance[api.method](api.url, config)
      } catch (err) {
        response = err
      }
    }
    return response;

  }
}


//拦截器
//请求拦截器
instance.interceptors.request.use(config => {
  Toast.loading({
    mask: false,
    duration: 0,//一直存在，即为存在时间
    forbidClick: true,//禁止点击
    message:'加载中'
  })
  return config
}, err => {
  Toast.clear();
  Toast('被拦截了')

  })
//响应拦截器
instance.interceptors.response.use(config => {
  Toast.clear();
  return config
}, () => {
  Toast.clear();
  Toast('请求错误，清稍后重试2')
})

export default Http
