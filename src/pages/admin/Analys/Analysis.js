import React, { Component } from 'react';
import echarts from 'echarts'
import CostChart from './CostChart'
import NutritionChart from './NutritionChart'

class Analysis extends Component {
  componentDidMount() {
    
  }

  render() {
    return (
      <div className="App">
        <CostChart id="charts1"/>
        <NutritionChart id="charts2"/>
      </div>
    );
  }

}

export default Analysis;
