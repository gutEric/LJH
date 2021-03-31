<template>
  <div>
    <!--<Button-icon title="1" @clickNow="clickNow"></Button-icon>
  <Button-icon title="2"></Button-icon>
  <VuexTest title="搜索"><h1>slkdjlajdlkajsldk</h1></VuexTest>-->
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-radio-group v-model="radio">
      <el-radio :label="3">3</el-radio>
      <el-radio :label="6">6</el-radio>
      <el-radio :label="9">9</el-radio>
    </el-radio-group>
    <input type="text" name="name" v-model="lastradio" value="" />
    <button class="name" @click="show">kankan </button>
    <el-select v-model="value" placeholder="请选择">
      <el-option v-for="item in options"
                 :key="item.value"
                 :label="item.label"
                 :value="item.value">
      </el-option>
    </el-select>
  </div>
</template>
<script>
  import Vue from 'vue'
  import 'element-ui/lib/theme-chalk/index.css'
  //Vue.component('Button-icon', {
  // props:['title'],
  //  data: function () {
  //    return {
  //      count: 0,
  //      radio:'3'
  //    }
  //  },
  //  template: '<button @click="clickFun">{{title}}请点击我{{count}}</button>',
  //  methods: {
  //    clickFun() {
  //      this.count++;
  //      this.$emit('clickNow', this.count);
  //    }
  //  }
  //})
  export default {
    name: 'components',
    data() {
      return {
        radio: '3',
        lastradio: '',
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    },
    methods: {
      clickNow(e) {
        console.log(e)
      },
      show() {
        console.log(this.radio)
      }
    },
    watch: {
      radio() {
        console.log(this.radio)
      },
      value() {
        console.log(this.value)
      }
    }
  }
</script>
<style lang="less" scoped>
  @color:#fff;
  .name {

    background:@color;
  }

</style>
