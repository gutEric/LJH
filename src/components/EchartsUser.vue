<template>
  <div>
    <div id="myChart" :style="{width:'500px',height:'500px',margin:'auto'}"></div>
    <echarts :propsText="{...show}"></echarts>
    <div id="OHLC" :style="{width:'500px',height:'500px',margin:'auto'}"></div>
    <div id="Pie" :style="{width:'500px',height:'500px',margin:'auto'}"></div>
    <div id="funnel" :style="{width:'500px',height:'500px',margin:'auto'}"></div>
    <!--<div id="Sun" :style="{width:'500px',height:'500px',margin:'auto'}"></div>-->
    <div id="map" :style="{width:'700px',height:'700px',margin:'auto'}"></div>
  </div>
</template>
<script>

  import option from '../assets/JS/map'
  export default {
    name: 'echart',
    data() {
      return {
        show: {
          title: '封装echarts子组件',
          data: ["衬1衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
          name: '销量',
          type: 'bar',
          showdata:[10, 30, 40, 50, 10, 30]
        },
        chart: null,
      }
    },
    mounted() {
      this.drawLine();
      this.drawOHLC();
      this.drawPie();
      this.drawfunnel();
      this.drawMap();
    },
    methods: {
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
          title: { text: '在Vue中使用echarts' },
          tooltip: {},
          xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        });
      },
      drawOHLC() {

        let myChart = this.$echarts.init(document.getElementById('OHLC'));
        myChart.setOption({
          title: { text: '在Vue中使用echarts折线图' },
          xAxis: {
            type: '',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          tooltip: {},
          yAxis: {
            type: 'value'
          },
          series: [{
            name:'报告',
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line',
            smooth:true
          }]
      })

      },
      drawPie() {

        let myChart = this.$echarts.init(document.getElementById('Pie'));
        myChart.setOption({
          title: {
            text: '在Vue中使用echarts饼图',
            subtext: '纯属虚构',
            left: 'center'
          },
          tooltip: {
            trigger: 'item'
          },
          legend: {
            orient: 'vertical',
            left: 'left',
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: '50%',
              data: [
                { value: 1048, name: '搜索引擎' },
                { value: 735, name: '直接访问' },
                { value: 580, name: '邮件营销' },
                { value: 484, name: '联盟广告' },
                { value: 300, name: '视频广告' }
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        })

      },
      drawfunnel() {

        let myChart = this.$echarts.init(document.getElementById('funnel'));
        myChart.setOption({
          title: {
            text: '漏斗图',
            subtext: '纯属虚构'
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}%"
          },
          toolbox: {
            feature: {
              dataView: { readOnly: false },
              restore: {},
              saveAsImage: {}
            }
          },
          legend: {
            data: ['展现', '点击', '访问', '咨询', '订单']
          },

          series: [
            {
              name: '漏斗图',
              type: 'funnel',
              left: '10%',
              top: 60,
              //x2: 80,
              bottom: 60,
              width: '80%',
              // height: {totalHeight} - y - y2,
              min: 0,
              max: 100,
              minSize: '0%',
              maxSize: '100%',
              sort: 'descending',
              gap: 2,
              label: {
                show: true,
                position: 'inside'
              },
              labelLine: {
                length: 10,
                lineStyle: {
                  width: 1,
                  type: 'solid'
                }
              },
              itemStyle: {
                borderColor: '#fff',
                borderWidth: 1
              },
              emphasis: {
                label: {
                  fontSize: 20
                }
              },
              data: [
                { value: 60, name: '访问' },
                { value: 40, name: '咨询' },
                { value: 20, name: '订单' },
                { value: 80, name: '点击' },
                { value: 100, name: '展现' }
              ]
            }
          ]
        })
      },
      drawMap() {

        this.chart = this.$echarts.init(document.getElementById('map'));
        this.chart.setOption(option);
      }
    },
    updated() {
      if (!this.chart) {
        this.initChart()
      }
    }
  }
</script>
