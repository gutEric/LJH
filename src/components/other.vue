<template>
  <div>
    <p v-cloak>{{message}}</p>
    <p v-once>{{content}}</p>
    <p>{{content}}</p>
    <input type="text" name="name" value="" v-model="content"/>
    <p>---------------------------------------</p>
    <p>自定义指令</p>
    <p v></p>
  </div>
</template>
<script>
  export default {
    name: 'other',
    data() {
      return {
        message: "半个小时就十点半了",
        content:'nihao'
      }
    }
  }
</script>
