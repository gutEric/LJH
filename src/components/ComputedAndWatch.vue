<template>
  <div>
    <h3>姓名</h3>
    <input type="text" name="name" value="" placeholder="请输入姓" v-model="firstName" />
    <br />
    <p></p>
    <input type="text" name="name" value="" placeholder="请输入名" v-model="lastName" />
    <p>-----------------------------------</p>
    <input type="text" name="name" value="" v-model="fullName" placeholder="这是单向的" />
    <p></p>
    <input type="text" name="name" value="" v-model="fullNameLast" placeholder="这是双向的" />
    <p></p>
    <input type="text" name="name" value="" v-model="fullNameWatch" placeholder="这是双向的" />

  </div>
</template>
<script>
  export default {
    name: 'ComputedAndWatch',
  data () {
    return {
      firstName: '',
      lastName: '',
      fullNameWatch:''
      }
    },
  //方法属性，专属于方法的属性
  methods: {

  },
  //计算属性，如果需要数据的计算处理，可以使用该属性定义计算方法
  computed: {
    fullName: {
      get() {
        return this.firstName +'*'+ this.lastName;
      }
    },
    fullNameLast: {
      get() {
        console.log('调用了get方法');
        return this.firstName + '*' + this.lastName;
      },
      set(value) {
        console.log('调用了set方法:' + value);
        let name = value.split('*');
        this.firstName = name[0];
        this.lastName = name[1];
      }
    }
    },
    watch: {
      firstName(value) {
       // console.log('watch监视到firstName发生改变' + value)
        this.fullNameWatch = value + '*' + this.lastName;
      },
      lastName(value) {
        //console.log('watch监视到lastName发生改变' + value);
        this.fullNameWatch = this.firstName + '*' + value;
      }
    }
  
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    font-size: 16px;
  }

  div {
    font-size: 16px;
  }
</style>
