import React, { Component } from 'react';
import './Stock.css';
import { getStockHistory } from '../../api/api';

import Navbar from '../../components/Navigation/Navbar';
import Graph from '../../components/Graph/Graph';
import Article from '../../components/Article/Article';
import Trade from '../../components/Trade/Trade';

class Stock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "About",
      content: "Advanced Micro Devices, Inc. engages in the provision of semiconductor businesses. It operates through the Computing and Graphics and Enterprise, Embedded and Semi-Custom segments.",
      graphLabels: [],
      graphData: []
    };
  }

  componentDidMount() {
    // API team is changing the api endpoint for getStockHistory
    // Hardcoding values for now
    const response = [{
      "time": "2018-08-13 00:00:00",
      "price": 19.16,
      "epochTime": 1534143600.0
    },
    {
      "time": "2018-08-14 00:00:00",
      "price": 19.97,
      "epochTime": 1534230000.0
    }
    ];
    // const response = getStockHistory('amd', 'day');
  }

  processStockHistory = (response) => {
    var graphData = [];
    var graphLabels = [];

    response.forEach(point => {
      graphData.push(point.price);
      graphLabels.push(point.time);
    });

    this.setState({
      graphData,
      graphLabels
    });
  }

  render() {
    return (
      <div className="Stock">
        <Navbar />
        <Graph data={this.state.graphData}
          labels={this.state.graphLabels}
        />
        <div className="stock-content">
          <Article title={this.state.title} content={this.state.content} />
        </div>
        <Trade quantity={13} price={20.15} volume={'12M'} />
      </div>
    );
  }
}

export default Stock;
