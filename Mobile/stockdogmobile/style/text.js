import { StyleSheet } from 'react-native';
import { colors } from './colors.js'; 

export default text = StyleSheet.create({
    // ------------- Login/Register ----------- // 
    title: {
      color: colors.white,
      fontFamily: 'open-sans-bold',
      fontSize: 48
    },
    loginButton: {
      fontSize: 20,
      fontFamily: 'open-sans',
      color: colors.white
    },
    smallText: {
      fontSize: 16,
      fontFamily: 'open-sans',
      color: colors.bright,
      textDecorationLine: 'underline'
    },
    // ---------------- Profile page ------------ //
    money: {
      color: colors.bright,
      fontFamily: 'open-sans',
      fontSize: 48,
      textAlign: 'center'
    },
    profileLabels: {
      color: colors.white,
      fontFamily: 'open-sans',
      fontSize: 24,
      textAlign: 'left'
    },
    bigPortfolioText: {
      color: colors.white,
      fontFamily: 'open-sans',
      fontSize: 20,
      textAlign: 'left'
    },
    smallPortfolioText: {
      color: colors.white,
      fontFamily: 'open-sans',
      fontSize: 16,
      textAlign: 'left'
    },
    // ----------------- Stock page ------------- // 
    stock: {
      color: colors.bright,
      fontFamily: 'open-sans',
      fontSize: 36
    },
    stockMoney: {
      color: colors.bright,
      fontFamily: 'open-sans',
      fontSize: 42,
      textAlign: 'center'
    },
    // ----------------- Groups Drawer ------------- //
    groupTitle: {
      color: colors.white,
      fontFamily: 'open-sans-bold',
      fontSize: 36,
      textDecorationLine: 'underline'
    },
    groupText: {
      color: colors.white,
      fontFamily: 'open-sans',
      fontSize: 24,
      textAlign: 'left'
    }
});