import React, { Component } from 'react';
import './Stock.css';
import { getStockHistory } from '../../api/api';

import Navbar from '../../components/Navigation/Navbar/Navbar';
import Graph from '../../components/Graph/Graph';
import Article from '../../components/Article/Article';
import Trade from '../../components/Trade/Trade';
import Transaction from '../../components/Trade/Transaction/Transaction';

class Stock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "About",
      content: "Advanced Micro Devices, Inc. engages in the provision of semiconductor businesses. It operates through the Computing and Graphics and Enterprise, Embedded and Semi-Custom segments.",
      ticker: this.props.match.params.ticker.toUpperCase(),
      graphLabels: [],
      graphData: [],
      transactionIsOpen: false
    };
  }

  componentDidMount() {
    getStockHistory({
      ticker: this.state.ticker, 
      length: 'day'
    }).then((res) => {
      this.processStockHistory(res.data);
    }).catch(err => {
      console.log(err)
    });

    
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

  activateTransactionModal = () => {
    this.setState({ transactionIsOpen: true });
  };

  deactivateTransactionModal = () => {
    this.setState({ transactionIsOpen: false });
  };

  render() {
    const price = Math.ceil(
      this.state.graphData[this.state.graphData.length - 1] * 100) / 100;

    return (
      <div className="Stock">
        <Navbar />
        <h1 id="stock-title">{this.state.ticker}</h1>
        <Graph data={this.state.graphData}
          labels={this.state.graphLabels}
        />
        {/* <div className="stock-content">
          <Article title={this.state.title} content={this.state.content} />
        </div>
        <Trade quantity={13} price={price} volume={'12M'}
          onClickBtn={this.activateTransactionModal}
        />
        <Transaction isOpen={this.state.transactionIsOpen}
          onClose={this.deactivateTransactionModal}
          price={price}
          ticker={this.state.ticker}
          buyingPower={10000} // Hard coded buypower
        /> */}
      </div>
    );
  }
}

export default Stock;