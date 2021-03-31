<template>
  <div>
    <h3>双括号表达式</h3>
    <div>{{msg}}</div>
    <div>{{msg.toUpperCase()}}</div>
    <a :href="site">content</a>
    <button @click="study">点一下</button>
  </div>
</template>
<script>
  export default {
  name: 'testSubmit',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      site: 'https://smartbox.wetech-ecology.com/1/index.html'
      }
    },
  //方法属性，专属于方法的属性
  methods: {
    study(){
      console.log("点你妹");
    }
    },
  //计算属性，如果需要数据的计算处理，可以使用该属性定义计算方法
  computed: {

  }
}
  </script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    font-size:16px;
  }
  div {
    font-size:16px;
  }
</style>
