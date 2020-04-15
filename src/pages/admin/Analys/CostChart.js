import React, { Component } from 'react';
import echarts from 'echarts'

class CostCharts extends Component {
  componentDidMount() {
    let myCharts = echarts.init(document.getElementById("mycharts"));
    myCharts.setOption({
      title: {
        text: 'Daily cost',
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [10.7, 12.9, 7.2, 9.8, 17.1, 10.0, 12.9],
        type: 'line'
      }]
    });
  }

  render() {
    return (
      <div className="App">
        <div id="mycharts" style= {{width:'50%', height:500}}>
        </div>
      </div>
    );
  }

}

export default CostCharts;
