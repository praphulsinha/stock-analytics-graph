import React, { Component } from 'react';
import './App.css';
import Configuration from './chart/Config';
import Chart from './chart/Chart';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: []
    };
  }

  componentDidMount = () => {
    axios({
      method: 'get',
      url: 'http://localhost:8080/api/stocks/data',
      config: { headers: { 'Content-Type': 'application/json' } }
    })
      .then((response) => {
        if (response) {
          const stockData = [...response.data];
          this.setState({ chartData: stockData });
        }
      })
      .catch((response) => {
        console.log(response, "ERROR");
      });
  }

  render = () => {
    const config = {
      ...Configuration,
      "dataProvider": this.state.chartData
    };
    return (
      <div className="App">
        <span>
          <h1>Stock Analytics Graph</h1>
        </span>
        <Chart>{config}</Chart>
      </div>
    );
  }
}

export default App;
