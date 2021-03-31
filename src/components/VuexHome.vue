<template>
  <div>
    <h1>用户中心</h1>
    <div class="header">
      <div class="name">
        <div class="left">账号</div>
        <div class="right">{{this.$store.state.userInfo.account}}</div>
      </div>
      <div class="vip">
        <div class="left">会员等级</div>
        <div class="right">{{this.$store.getters.memberInfo}}</div>
      </div>
    </div>
    <div class="content">
      <div class="HomeItem">
        <div class="HomePart" v-for="(item,index) in Item" :key="index">
          <div class="VIPName">{{item.LevelBuyName}}</div>
          <div class="VIPNumber"><b>{{item.LevelBuyMoney}}元</b> / {{item.LevelBuyDay}}天</div>
          <div class="VIPButton"><button @click="Buy(item)">购买</button></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import store from '../vuex'
export default {
    name: 'VuexHome',
    data() {
      return {
        page: 'VuexHome',
        Item:[]
      }
    },
    created() {
      this.getBuy();
    }
    ,
    methods: {
      async getBuy() {
        let res = await this.$Http.GetList();
        this.Item = res.data.LevelBug;
      },
      Buy(e) {
        store.dispatch('buyVIP',e)
      }
    }
  }</script>
<style scoped>
  .header {
    width: 90%;
    margin: auto;
    padding-bottom: 10px;
    border-bottom: 1px solid rgb(206,206,206);
    box-sizing:content-box
  }
    .header .name,
    .header .vip {
      font-size:0;
      padding:0 15px;
    }
  .left {
    display:inline-block;
    text-align:left;
    font-size:14px;
    width:50%;
    line-height:30px;    
  }
  .right {
    font-size: 14px;
    display: inline-block;
    text-align: right;
    width: 50%;
    line-height: 30px;
  }
  .content {
    width:100%;
  }
  .HomeItem {
    padding:0 5%;
    padding-top:15px;
  }
    .HomeItem .HomePart {
      display: block;
      background-image: linear-gradient(rgb(174,45,111), rgb(222,108,64));
      border-radius:5px;
      padding:10px 15px;
      margin-bottom:15px;
    }
      .HomeItem .HomePart .VIPName {
        font-size:16px;
        text-align:left;
        line-height:30px;
        color:#fff;
      }
      .HomeItem .HomePart .VIPNumber {
        width:48%;
        text-align:left;
        font-size:14px;
        color:#fff;
        display:inline-block;
        line-height:40px;
      }
        .HomeItem .HomePart .VIPNumber b {
          font-size:20px;
          color:goldenrod;
        }
      .HomeItem .HomePart .VIPButton {
        width:48%;
        text-align:right;
        display:inline-block;
      }
        .HomeItem .HomePart .VIPButton button {
            background:rgba(255,255,255,0);
            border:1px solid #fff;
            font-size:14px;
            color:#fff;
            padding:0 15px;
            line-height:35px;
        }
</style>
