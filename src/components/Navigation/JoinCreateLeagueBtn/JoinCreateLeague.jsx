import React, { Component } from 'react';
import './JoinCreateLeagueBtn.css';
import { PlusSquare } from 'react-feather'
import Modal from 'react-responsive-modal';

class JoinCreateLeagueBtn extends Component {
  render() {
    return (
      <div className='JoinCreateLeagueBtn'>
        <PlusSquare />
        <Modal />
      </div>
    );
  }
}

export default JoinCreateLeagueBtn;