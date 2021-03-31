<template>
  <div class="page">
    <div class="content">
      <img src="../assets/Img/VuexLOGO.png" alt="Alternate Text" @click="onGoutUserInfo" />
      <div class="inputName">
        <input type="text" name="name" value="" placeholder="请输入账号、邮箱" v-model="message.isName"/>
      </div>
      <div class="inputPassword">
        <input type="password" name="name" value="" placeholder="请输入密码" v-model="message.isPassword"/>
      </div>
      <button @click="Login">登录</button>
    </div>
  </div>
</template>
<script>
  import { Toast } from 'vant'
  import store from '../vuex'
  export default {
    name: 'VuexLogin',
    data() {
      return {
        page: 'VuexLogin',
        message: {
          isName: '',
          isPassword: ''
        }
      }
    },
    methods: {
      onGoutUserInfo() {
        this.$router.push({ path: './VuexIndex' })
      },
      getRegister() { },
      checkLogin() { },
      Login() {
        if (!this.message.isName || !this.message.isPassword) {
          Toast('请填写账号密码')
          return false;
        } else {
          const that = this;
          setTimeout(() => {
            store.commit('login', {
              account: that.message.isName,
              password: that.message.isPassword,
            });
            store.commit('setMemberInfo', {
              userStatus: 1,
              vipLevel:0
            })
            store.state.token = true;
            localStorage.setItem('UserToken', true)
            localStorage.setItem('UserInfoAccount', that.message.isName)
            localStorage.setItem('UserInfopPssword', that.message.isPassword)
            localStorage.setItem('UserMemberuserStatus', 1)
            localStorage.setItem('UserMembervipLevel', 0)
            that.$router.push('./VuexIndex')
          },500)
        }
      }
    }
  }
  </script>
<style scoped>
  .page {
    position: relative;
  }
  .content {
    position:absolute;
    left:0;
    top:0;
    right:0;
    bottom:0;
    margin:auto;
    display:block;
    padding:0 30px;
  }
    .content img {
        width:100%;
        margin-bottom:50px;
    }
    .content .inputName,
    .content .inputPassword {
      display: block;
      line-height: 35px;
      border-bottom: 2px solid #000;
      width: 90%;
      margin: auto;
      margin-bottom: 15px;
    }
    .content input {
      width:100%;
      border:0;
      text-align:left;
      font-size:14px;
    }
  .content button{
    font-size:16px;
    line-height:45px;
    width:90%;
    background:#000;
    border:0;
    color:#fff;
    margin:50px auto;
    border-radius:5px;
  }

</style>
