import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Login from './screens/login.js';
import Register from './screens/register.js';
import Profile from './screens/profile.js';
import Stock from './screens/stock.js';

export const Root = StackNavigator({
    Login : {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
    Register: {
        screen: Register,
        navigationOptions: {
            header: null
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            header: null
        }
    },
    Stock: {
        screen: Stock,
        navigationOptions: {
            header: null
        }
    }
});