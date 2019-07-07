import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { storiesOf } from '@storybook/react';
import Navbar from '../components/Navigation/Navbar/Navbar';
import Search from '../components/Search/Search';

storiesOf('Search', module)
  .add('default', () => (
    <Router>
      <Search />
    </Router>
  ));

const navbarLinks = [
  {
    title: 'Month League',
    location: '/league/monthLeague',
  },
  {
    title: 'Penny Stocks',
    location: '/league/pennyStocks',
  },
  {
    title: 'Swing Stocks',
    location: '/league/swingStocks',
  },
];

storiesOf('Navbar', module)
  .add('with links', () => (
    <Router>
      <Navbar links={navbarLinks} />
    </Router>
  ))
  .add('no links', () => (
    <Router>
      <Navbar links={[]} />
    </Router>
  ));