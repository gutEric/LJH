<template>
  <div>
    <h3>学习Vuex</h3>
    <!--<video controls="controls" width="90%" preload="auto">
      <source src=""  type="video/mp4" />
    </video>-->
    <h4>简介</h4>
    <p class="message">此版本为老戏骨主演，讲的是红楼梦，刘姥姥走进大观园，讲述了刘姥姥，贾宝玉，林黛玉及家人发生的一系列事情。。。</p>
    <p>注：分享即可获得免费的一个月VIP权益</p>
    <button>分享</button>
  </div>
</template>
<script>
export default {
    name: 'VuexVidio',
    data() {
      return {
        page: 'VuexVidio',
      }
    }
  }
</script>
<style scoped>
  h4 {
    font-size:20px;
    text-align:left;
    padding: 0 5%;
    margin-bottom:10px;
  }
  p.message {
    font-weight:bold;
  }
  p {
    font-size: 14px;
    text-align: left;
    padding: 0 5%;
  }
  button {
    font-size: 16px;
    line-height: 45px;
    width: 90%;
    background: #000;
    border: 0;
    color: #fff;
    margin: 50px auto;
    border-radius: 5px;
  }  
</style>
