<template>
  <div class="content">
    <h1>您好！</h1>
    <p>尊敬的<b>{{this.$store.getters.memberInfo}}</b> , 欢迎来到LD测试DEMO</p>
    <div class="IndexItem" >
      <div class="IndexPart" v-for="(List,index) in ListCount" :key="index">
        <div class="IndexImg">
          <img src="../assets/Img/VuexIndex.png" alt="Alternate Text" />
        </div>
        <div class="IndexMessage">
          <div class="Title">{{List.coursesName}}</div>
          <div class="number">{{List.coursesNumber}}</div>
          <div class="State">{{List.coursesLevel}}</div>
        </div>
      </div>
    </div>
    <button @click="Go">充值</button>
  </div>
</template>
<script>
  import { Toast } from 'vant'
  import store from '../vuex'
  export default {
    name: 'VuexIndex',
    data() {
      return {
        page: 'VuexIndex',
        VIP: '普通会员',
        ListCount: [],
        testList: {
          name: '利好',
          id: 15,
          account:'1562184'

        }
      }
    },
    created() {
      this.getCount()
    },
    methods: {
      async getCount() {
        let res = await this.$Http.GetList(this.testList);
        this.ListCount = res.data.courses;
        console.log(res);
      },
      Go() {
        this.$router.push('./VuexHome')
      }
    }
  }

</script>
<style scoped>
  .content {
    padding: 15px;
    box-sizing:content-box;
  }
  h1 {
    text-align: left;
    line-height:30px;
  }
  p {
    text-align:left;
  }
  b {
    color:red;
    padding-left: 5px;
  }
  button {
    font-size: 16px;
    line-height: 45px;
    width: 100%;
    background: #000;
    border: 0;
    color: #fff;
    margin: 50px auto;
    border-radius: 5px;
  }
  .IndexItem {
  }
    .IndexItem .IndexPart {
      display:table;
      font-size:0;
      margin-bottom:15px;

    }
      .IndexItem .IndexPart .IndexImg {
        width: 35%;
        display: table-cell;
        vertical-align: middle;
      }
        .IndexItem .IndexPart .IndexImg img {
            width:100%;
            border-radius:8px;
        }
      .IndexItem .IndexPart .IndexMessage {
        display: table-cell;
        width: 65%;
        text-align: left;
        font-size: 16px;
        vertical-align: top;
        position:relative;
      }
        .IndexItem .IndexPart .IndexMessage .Title {
          line-height:25px;
          padding-left:15px;
        }
        .IndexItem .IndexPart .IndexMessage .number {
          line-height: 15px;
          font-size: 10px;
          color: rgb(156,156,156);
          padding-left: 15px;
        }
        .IndexItem .IndexPart .IndexMessage .State {
          line-height: 15px;
          padding-left: 15px;
          font-size: 12px;
          color:gold;
          position:absolute;
          left:0;
          bottom:0;
        }
</style>
