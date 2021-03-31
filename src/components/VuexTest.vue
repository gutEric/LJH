<template>
  <div>
    <!--<h1>{{count}}</h1>
  <button @click="countIncrease">点击</button>-->
    <button>{{title}} </button>
    <slot></slot>
  </div>
</template>
<script>
  export default {
    props:['title'],
    name: 'VuexTest',
    data() {
      return {

      }
    },
    computed: {
      count() {
        return this.$store.state.count
      }
    },
    methods: {
      countIncrease() {
        let number = 100
        this.$store.commit('countIncrease',number)
      }
    }
  }
</script>
