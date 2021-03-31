<template>
  <div>
    <p>{{dataname}}</p>
  </div>
</template>
<script>
  import axios from 'axios'

  export default {
    name: 'AxiosTest',
    data() {
      return {
        dataname: "你号"
      }
    },
    created() {
      //axios.get('../static/db.json').then((res) => {
      //  console.log(res)
      //})

     //----------------------------------------------/

      //axios并发接口
      //axios.all(
      //  [
      //    axios.get('../static/db.json'),
      //    axios.get('../static/ab.json'),
      //  ]
      //).then(
      //  axios.spread((dbres, abres) => {
      //  console.log(dbres);
      //  console.log(abres)
      //    })
      //  )

      //----------------------------------------------/
      //创建实例
      //let instance = axios.create({
      //  baseURL: 'http://localhost:8080',
      //  timeout: 1000,
      //  url: '/static/db.json',//请求路径
      //  method: 'get,put,post,delete,patch',//请求方法
      //  header: {
      //    token: ''
      //  },//请求头
      //  params: {
      //    id: ''
      //  },//请求参数放在url
      //  data: {
      //    id: ''
      //  },//请求参数放在请求体

      //})
      
      //instance.get('/static/db.json').then(res => {
      //  console.log(res)
      //})

      //this.$http.get('./static/db.json').then(res => {
      //  console.log(res)
      //})


      //实际开发  有两种请求接口
      //let instance = axios.create({
      //  baseURL: 'http://localhost:8080',
      //  timeout:1000

      //})

      //instance.get('/static/db.json').then(res => {
      //  console.log(res);
      //})


      //-----------------------------------------------------------/
      //拦截器
      //请求拦截器、
      //axios.instercepteors.request.use(config => {
      //  return config
      //}, err => {
      //  return Promise.reject(err)
      //})
      ////响应拦截器
      //axios.intercepteors.response.use(res => {
      //  //请求成功，对相应数据处理
      //  return res
      //}, err => {
      //  //响应错误
      //  return Promise.reject(err)
      //})
      ////取消拦截器
      //let interceptors = axios.instercepteors.use(config => {
      //  config.headers = {
      //    auth: true
      //  }
      //  return config
      //})
      //axios.intercepteors.request.dject(interceptors)
      //例子：登录状态（token：''）,登录接口
      //let instance = axios.create({})
      //instance.interceptors.request.use(config => {
      //  config.headers.token = ''
      //  return config
      //})
      ////不需要登录的接口
      //let newInstance = axios.create({})
      //let instance_phone.interceptors.request.use(config => {
      //  //$('#model').show();
      //  //return config
      //})
      //instance_phone.interceptors.response.use(res => {
      //  $('#model').hide()

      //})

    }
  }
</script>
