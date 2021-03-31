<template>
  <div>
    <div :class="oneClass">样式类可以使用字符串</div>
    <div :class="{classTwo : oneClass}">样式类可以使用字符串</div>
  </div>
</template>
<script>
  export default {
    name: 'ClassAndStyle',
  data () {
    return {
           oneClass:true,
      }
    },
  //方法属性，专属于方法的属性
  methods: {

  },


}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .classOne {
    font-size: 32px;
    color: red;
  }
  .classTwo {
    font-size:16px;
    color:#000;
  }
</style>
