import React from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';

import MainStackNavigator from './src/Navigations/AppNavigation'
import LoginScreen from './src/screens/LoginScreen'
import ProfileScreen from './src/screens/ProfileScreen'

export default class App extends React.Component {
  render() {
    return (
      // <Uploadimage />s
      < MainStackNavigator />
    )
  }

};
