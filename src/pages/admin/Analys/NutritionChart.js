import React, { Component } from 'react';
import echarts from 'echarts'

class NutritionChart extends Component {
  componentDidMount() {
    let myCharts = echarts.init(document.getElementById(this.props.id));
    myCharts.setOption({
      title: {
        text: 'Nutrition'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['Fat', 'Protein', 'Vitamin', 'Calorie', 'Carbohydrate']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: 'Fat',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: 'Protein',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: 'Vitamin',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: 'Calorie',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: 'Carbohydrate',
            type: 'line',
            stack: '总量',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
    });
  }

  render() {
    return (
      <div className="App">
        <div id={this.props.id} style= {{width:'50%', height:500}}>
        </div>
      </div>
    );
  }

}

export default NutritionChart;
