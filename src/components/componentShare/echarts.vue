<template>

    <div id="Chart" :style='{width:"500px",height:"500px",margin:"auto"}'></div>

</template>
<script>
  export default {
    props: {
      propsText: {
        type: Object,
        default: () => []
      }
    },
    name: 'echarts',
    data() {
      return {
        pro: this.propsText
      }
    },
    mounted() {
      this.drawLine();
    },
    methods: {
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('Chart'))
        // 绘制图表
        var that = this;
        myChart.setOption({
          title: { text: that.propsText.title },
          tooltip: {},
          xAxis: {
            data: that.propsText.data
          },
          yAxis: {},
          series: [{
            name: that.propsText.name,
            type: that.propsText.type,
            data: that.propsText.showdata
          }]
        });
      }
    }
  
  }
</script>
