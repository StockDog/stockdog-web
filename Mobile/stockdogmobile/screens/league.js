import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList, TextInput, DatePickerIOS } from 'react-native';
import { Button, SearchBar, ListItem } from 'react-native-elements';
import containers from '../style/containers';
import elements from '../style/elements';
import text from '../style/text';
import { colors } from '../style/colors'; 
import NavBar from '../components/navbar';

export default class League extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }



keyExtractor = (item, index) => index;

 renderEachItem(item) {
  	console.log("item1: ", item.item.name);
  	return (
			<View style = {containers.memberRow}>
				<View style = {containers.membersName}>
					<Text style = {text.members} > 
						{item.item.name}
					</Text>
				</View>
					<View style = {containers.membersRank}>
						<Text style = {text.members} > 
							{item.item.rank}
						</Text>
					</View>
			</View>
  		);
  }

  render() {
  	var members = [
			{
				name: 'Sam',
				rank: 1
			},
			{
				name: 'Cole',
				rank: 2
			}, 
			{
				name: 'Holly',
				rank: 3
			},
			{
				name: 'Jake',
				rank: 4
			},
			{
				name: 'Sal',
				rank: 5
			},
			{
				name: 'David',
				rank: 6
			}

	];
    return (
      <View style={containers.profileGeneral}>
        <NavBar />
        
        <View style = {containers.leagueName}> 
        	<Text style ={text.leagueTitle}> League 1 </Text>
        	<Text style ={text.inviteCode}> Invite Code </Text>
        </View>
        <View style = {containers.leagueMembers}>
        	<FlatList
        		keyExtractor={this.keyExtractor}
        		data={members}
        		renderItem = {this.renderEachItem.bind(this)}
        	/>
        </View>
        
      </View>
    );
  }
}