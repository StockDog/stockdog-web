import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Button } from 'react-native';
import containers from '../style/containers';
import elements from '../style/elements';
import text from '../style/text';
import Modal from 'react-native-modal';
import RoundInput from './roundinput';
import WideButton from './widebutton';
import Icon from 'react-native-vector-icons/Feather';
import Api from '../api';

export default class AddPortfolioModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      buyPower: "",
      type: "",
      duration: ""
    };
    this.api = new Api();
  }

  onpress = () => {
    // this.api.createNewPortfolio(this.state.name, (response) => {
    //   this.props._close();
    // });
    
  }

  onchangename = (name) => {
    this.setState({name})
  }

  render() {
    return (
      <Modal
        isVisible={this.props.visibility}
        animationIn="fadeIn"
        animationOut="fadeOut"
        onBackdropPress={this.props._close}>
        <View style={containers.addGroupOuterModal}>
          <View style={containers.addGroupModalHeader}>
            <TouchableOpacity onPress={this.props._close}>
              <Icon name='x' size={30} color='white' />
            </TouchableOpacity>
          </View>
          <View style={containers.addGroupInnerModal}>
            <RoundInput 
              type="Name" 
              onchange={(name) => this.setState({name})} 
              value={this.state.name}/>
            <RoundInput 
              type="Buying Power" 
              onchange={(buyPower) => this.setState({buyPower})} 
              value={this.state.buyPower}/>
            <RoundInput 
              type="Type" 
              onchange={(type) => this.setState({type})} 
              value={this.state.type}/>
            <RoundInput 
              type="Duration" 
              onchange={(duration) => this.setState({duration})} 
              value={this.state.duration}/>
            <WideButton type="portfolio" onpress = {this.onpress}/>
          </View>
        </View>
      </Modal>
    );
  }
};
