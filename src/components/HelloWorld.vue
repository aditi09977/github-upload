<template>
    <div class="chart-wrapper">
    <h4 style='text-align:center'>Charts</h4>
      <chart :options="changeChart"></chart>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props:{
    chartType:{
    type:String,
    required:true
  },
  chartColor:{
    type:String,
    required:false
  }
  
  },
  computed:{
    changeChart(){
      if(this.chartType=='Bar Chart'){
        return {
          xAxis: {
            data: ["Q1", "Q2", "Q3", "Q4"]
          },
          yAxis: {
            type: "value"
          },
          series: [
            {
              itemStyle: {normal: {color: this.chartColor}},
              type: "bar",
              data: [63, 75, 24, 92]
            }
          ],
          title: {
            text: "Quarterly Sales Results",
            x: "center",
            textStyle: {
              fontSize: 24
            }
          },
          color: ["#127ac2"]
        }
      }else if (this.chartType=='Line Chart'){
        return {
            xAxis: {
              data: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec"
              ]
            },
            yAxis: {
              type: "value"
            },
            series: [
              {
                itemStyle: {normal: {color: this.chartColor}},
                type: "line",
                data: [55, 72, 84, 48, 59, 62, 87, 75, 94, 101, 127, 118]
              }
            ],
            title: {
              text: "Monthly Stock Prices",
              x: "center",
              textStyle: {
                fontSize: 24
              }
            },
            color: ["#127ac2"]
          }

      }else if(this.chartType=='Piece Wise Chart'){
       return{
           xAxis: {
            type: 'category',
            boundaryGap: false
        },
        yAxis: {
            type: 'value',
            boundaryGap: [0, '30%']
        },
        visualMap: {
            type: 'piecewise',
            show: false,
            dimension: 0,
            seriesIndex: 0,
            pieces: [{
                gt: 1,
                lt: 3,
                color: 'rgba(0, 180, 0, 0.5)'
            }, {
                gt: 5,
                lt: 7,
                color: 'rgba(0, 180, 0, 0.5)'
            }]
        },
        series: [
            {
                type: 'line',
                smooth: 0.6,
                symbol: 'none',
                lineStyle: {
                    color: 'green',
                    width: 5
                },
                markLine: {
                    symbol: ['none', 'none'],
                    label: {show: false},
                    data: [
                        {xAxis: 1},
                        {xAxis: 3},
                        {xAxis: 5},
                        {xAxis: 7}
                    ]
                },
                areaStyle: {},
                data: [
                    ['2019-10-10', 200],
                    ['2019-10-11', 400],
                    ['2019-10-12', 650],
                    ['2019-10-13', 500],
                    ['2019-10-14', 250],
                    ['2019-10-15', 300],
                    ['2019-10-16', 450],
                    ['2019-10-17', 300],
                    ['2019-10-18', 100]
                ]
            }
        ]
          
        }
      }else if(this.chartType=='Pie Chart'){
        return{
            title: {
            text: '某站点用户访问来源',
            subtext: '纯属虚构',
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: [
                    {value: 335, name: '直接访问'},
                    {value: 310, name: '邮件营销'},
                    {value: 234, name: '联盟广告'},
                    {value: 135, name: '视频广告'},
                    {value: 1548, name: '搜索引擎'}
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
          
        }
      }else{
        return 0;
      }

    }
              

  },
  // data: () => ({
  // })
};
</script>

<style scoped>
.chart-wrapper {
  width: 70%;
  height: 500px;
}
.echarts {
  width: 100%;
  height: 100%;
}
</style>
