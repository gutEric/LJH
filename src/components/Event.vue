<template>
  <div>
    <button @click="Event('点我啊')">点我</button>
    <a href="https://smartbox.wetech-ecology.com/1/AddShip.html" @click.stop="Event('冒泡')">content</a>
    <a href="https://smartbox.wetech-ecology.com/1/AddShip.html" @click.prevent="Event('阻止默认事件')">content</a>
  </div>
</template>
<script>
  export default {
    name: '',
    data() {
      return {
        content:''
      }
    },
    methods: {
      Event(p) {
        console.log(p);
      }
    }
  }
</script>
