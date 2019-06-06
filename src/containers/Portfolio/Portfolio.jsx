import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Navbar from '../../components/Navigation/Navbar/Navbar';
import Graph from '../../components/Graph/Graph';
import Listing from '../../components/Listing/Listing';
import News from '../../components/News/News';
import { setPortfolios, setCurrentPortfolio } from './state/portfolioActions';
import './Portfolio.css';
import { getPortfoliosForUser } from '../../api/api';

class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      portfolioItems: [],
      portfolioValue: '',
      navbarLinks: [],
      currentPortfolioName: ''
    }
  }

  componentDidMount() {
    this.getAllPortfolios().then(() => this.getCurrentPortfolio());
  }

  componentDidUpdate(prevProps) {
    if (prevProps.portfolios !== this.props.portfolios) {
      const navbarLinks = this.props.portfolios.map(portfolio => {return {title: portfolio.name}});
      this.setState({navbarLinks});
    }

    if (prevProps.currentPortfolioId !== this.props.currentPortfolioId) {
      const currentPortfolio = this.getPortfolioById(this.props.portfolios, this.props.currentPortfolioId);
      this.setState({currentPortfolioName: currentPortfolio.name});
    }
  }

  getAllPortfolios = async () => {
    try {
      const response = await getPortfoliosForUser();
      const portfolios = response.data;
      this.props.setPortfolios(portfolios);
      // Make sure the user has portfolios and hasn't set the currentPortfolioId
      if (portfolios.length > 0 && this.props.currentPortfolioId === -1) {
        this.props.setCurrentPortfolio(portfolios[0].id);
      }
    }
    catch (e) {
      alert('Failed to gather portfolios.');
    }
  }

  getCurrentPortfolio = () => {
    try {
      const { portfolios, currentPortfolioId } = this.props;
      const portfolio = this.getPortfolioById(portfolios, currentPortfolioId);
      this.setState({
        portfolioItems: portfolio.items, 
        portfolioValue: '$' + portfolio.value
      });
    }
    catch (e) {
      alert('Failed to load portfolio.');
    }
  }

  getPortfolioById = (portfolios, id) => {
    for (const idx in portfolios) {
      if (portfolios[idx].id === id) {
        return portfolios[idx];
      }
    }
  }

  render() {
    return (
      <div className="Portfolio">
        <Navbar
          links={this.state.navbarLinks}
          currentPortfolioName={this.state.currentPortfolioName}
        />
        <div className="portfolio-circle" />
        <div className='portfolio-value'>{this.state.portfolioValue}</div>
        <Graph
          isLoading={false}
          labels={['1/13/2018', '1/14/2018', '1/15/2018', '1/16/2018', '1/17/2018', '1/18/2018']}
          data={[14.21, 23.21, 20.53, 19.23, 15.67, 16.23]}
        />
        <div className="portfolio-listing-news-area">
          <div className="portfolio-listing-area">
            <Listing title='Portfolio' listings={this.state.portfolioItems} />
            {/* <Listing {...watchListProps} /> */}
          </div>
          {/* <div className="portfolio-news-area">
            <News headlines={headlines} />
          </div> */}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentPortfolioId: state.portfolio.currentPortfolioId,
    portfolios: state.portfolio.portfolios
  }
};

const mapDispatchToProps = {
  setPortfolios,
  setCurrentPortfolio
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Portfolio));
