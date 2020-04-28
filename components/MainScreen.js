import React, { Component } from 'react'
import { Button, View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeTab from './AppTabNavigator/HomeTab'
import AddMediaTab from './AppTabNavigator/AddMediaTab'
import ProfileTab from './AppTabNavigator/ProfileTab'
import LikesTab from './AppTabNavigator/LikesTab'
import SearchTab from './AppTabNavigator/SearchTab'
import { Icon } from 'native-base';


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
             tabBarOptions={{
             activeTintColor: '#000',
             inactiveTintColor: '#d1cece',
             showIcon:true,
             showLabel:false,
             
      }}
    >
      <Tab.Screen name="Home" component={HomeTab} 
        options={{
            tabBarIcon: ({tintColor}) => (
                <Icon name='ios-home' style={{color:tintColor}}/>
            )
        }}
      />
      <Tab.Screen name="Search" component={SearchTab} 
        options={{
            tabBarIcon: ({tintColor}) => (
                <Icon name='ios-search' style={{color:tintColor}}/>
            )
        }}
      />
      <Tab.Screen name="Add" component={AddMediaTab} 
        options={{
            tabBarIcon: ({tintColor}) => (
                <Icon name='ios-add' style={{color:tintColor}}/>
            )
        }}
        />
      <Tab.Screen name="Likes" component={LikesTab} 
        options={{
            tabBarIcon: ({tintColor}) => (
                <Icon name='ios-heart' style={{color:tintColor}}/>
            )
        }}
      />
      <Tab.Screen name="Profile" component={ProfileTab} 
        options={{
            tabBarIcon: ({tintColor}) => (
                <Icon name='ios-person' style={{color:tintColor}}/>
            )
        }}
      />
    </Tab.Navigator>
  );
}


export default class MainScreen extends Component {
    render() {
        return ( <MyTabs /> )
    }
}
