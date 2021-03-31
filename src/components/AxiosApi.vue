<template>
  <div>
    <p @click="get">{{dataname}}</p>
  </div>
</template>
<script>

  export default {
    name: 'AxiosTest',
    data() {
      return {
        dataname: "你号",
        list: [],
        parm: {
          'id': 1,
          'name': '唠叨',
          'cart':213541231
        }
      }
    },
    created() {
      this.get();
    },
    methods: {
      async get() {
        let res = await this.$Http.GetList(this.parm);
        this.list = res;
        console.log(this.list)
      }
    }
  }
</script>
