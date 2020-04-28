import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from './components/MainScreen'

// const Stack = createStackNavigator();



export default class App extends React.Component {
 render(){
   return (
    <NavigationContainer>
      <MainScreen />
    </NavigationContainer>
  );
 }
}
