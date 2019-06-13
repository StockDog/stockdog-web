import React, { Component } from 'react';
import './JoinCreateLeague.css';
import { PlusSquare } from 'react-feather'
import Modal from 'react-responsive-modal';
import Select from 'react-select';
import Button from '../../Button/Button';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { createLeague, joinLeague } from '../../../api/api';

const selectOptions = [
  { value: 'join', label: 'Join a League' },
  { value: 'create', label: 'Create a League' }
]

class JoinCreateLeague extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
      selectedOption: selectOptions[0],
      inviteCode: '',
      name: '',
      leagueName: '',
      buyingPower: 0,
      selectedStartDay: null,
      selectedEndDay: null,
      createLeagueErrorMsg: ''
    };
  }

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  handleLeagueActionTypeChange = (selectedOption) => {
    this.setState({ selectedOption });
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleOnDayChange = (type, date) => {
    let newState = {};
    // The two variables below are used so two setState calls don't need to be called
    let currentStart = this.state.selectedStartDay;
    let currentEnd = this.state.selectedEndDay;
    
    switch(type) {
      case 'start':
        currentStart = date;
        newState = {
          selectedStartDay: date
        }
        break;
      case 'end':
        currentEnd = date;
        newState = {
          selectedEndDay: date
        }
        break;
      default:
        break;
    }

    if (!this.validateDates(currentStart, currentEnd)) {
      newState['createLeagueErrorMsg'] = 'Start date cannot be before today and the end date must be after the start date.';
      this.setState(newState);
    }
    else {
      newState['createLeagueErrorMsg'] = null;
      this.setState(newState);
    }
  }

  joinLeagueFieldValidate = () => {
    return this.state.inviteCode && this.state.name;
  }

  createLeagueFieldValidate = () => {
    return this.state.name && 
           this.state.leagueName && 
           this.state.buyingPower && 
           parseInt(this.state.buyingPower, 10) > 0 && 
           this.validateDates(this.state.selectedStartDay, this.state.selectedEndDay);
  }

  validateDates = (start, end) => {    
    return start &&
           end &&
           new Date() <= start &&
           start < end;
  }

  /**
   * Makes the join league api call and then redirects to new league page
   */
  executeJoinLeague = async () => {
    try {
      await joinLeague({
        inviteCode: this.state.inviteCode,
        name: this.state.name
      });
      this.setState({isModalOpen: false}, () => alert('League joined.'));
    }
    catch (e) {
      this.setState({isModalOpen: false}, () => alert('Failed to join league.\n' + e));
    }
  }

  /**
   * Makes the create league api call and then redirects to new league page
   */
  executeCreateLeague = async () => {
    const dateOptions = {month: '2-digit', day: '2-digit', year: 'numeric'};
    const startDay = this.state.selectedStartDay
      .toLocaleDateString('en-EN', dateOptions).replace(/\//g, '-');
    const endDay = this.state.selectedEndDay
      .toLocaleDateString('en-EN', dateOptions).replace(/\//g, '-');
    try {
      const leagueResponse = await createLeague({
        name: this.state.leagueName,
        startPos: parseInt(this.state.buyingPower, 10),
        start: startDay,
        end: endDay
      });

      await joinLeague({
        inviteCode: leagueResponse.data.inviteCode,
        name: this.state.name
      });
      this.setState({isModalOpen: false}, () => alert('League joined.'));
    }
    catch (e) {
      this.setState({isModalOpen: false}, () => alert('Failed to create league.\n' + e));
    }
  }

  getCreateLeagueErrorMsg = () => {
    if (this.state.createLeagueErrorMsg) {
      return (
      <div className='joincreateleague-create-league-error-msg'>
        {this.state.createLeagueErrorMsg}
      </div>);
    }
    return null;
  }

  getJoinLeagueHtml = () => {
    return <div className='joincreateleague-modal-content'>
      <label>Invite Code</label>
      <input type='text' name='inviteCode' id='inviteCode'
        onChange={this.handleInputChange}
        value={this.state.inviteCode} />
      <label>Your Nickname</label>
      <input type='text' name='name' id='name'
        onChange={this.handleInputChange}
        value={this.state.name} />
      <Button width={250} text='Join League' onClick={this.executeJoinLeague}
        isDisabled={!this.joinLeagueFieldValidate()}/>
    </div>
  }

  getCreateLeagueHtml = () => {
    return <div className='joincreateleague-modal-content'>
      <label>Name of League</label>
      <input type='text' name='leagueName' id='leagueName'
        onChange={this.handleInputChange}
        value={this.state.leagueName} />
      <label>Initial Buying Power</label>
      <input type='number' name='buyingPower' id='buyingPower'
        onChange={this.handleInputChange}
        value={this.state.buyingPower} />
      <label>Your Nickname</label>
      <input type='text' name='name' id='name'
        onChange={this.handleInputChange}
        value={this.state.name} />
      <label>Start Date</label>
      <DayPicker onDayClick = {date => this.handleOnDayChange('start', date)} 
        selectedDays={this.state.selectedStartDay}/>
      <label>End Date</label>
      <DayPicker onDayClick = {date => this.handleOnDayChange('end', date)}
        selectedDays={this.state.selectedEndDay} />
      {this.getCreateLeagueErrorMsg()}
      <Button width={250} text='Create League' onClick={this.executeCreateLeague}
        isDisabled={!this.createLeagueFieldValidate()}/>
    </div>
  }

  render() {
    return (
      <div className='JoinCreateLeague'>
        <div onClick={this.openModal}>
          <PlusSquare onClick={this.openModal} />
        </div>
        <Modal open={this.state.isModalOpen} onClose={this.closeModal}>
          <div className='joincreateleague-modal'>
            <Select
              defaultValue={selectOptions[0]}
              className="joincreateleague-league-action-type-select"
              value={this.state.selectedOption}
              onChange={this.handleLeagueActionTypeChange}
              options={selectOptions}
              isSearchable={false}
            />
            <form>
              {this.state.selectedOption === selectOptions[0] ? 
                this.getJoinLeagueHtml() : this.getCreateLeagueHtml()}
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}

export default JoinCreateLeague;