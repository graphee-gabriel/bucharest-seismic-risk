import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import TabBarIcon from '../components/TabBarIcon'
import HomeScreen from '../screens/HomeScreen'
import AboutScreen from '../screens/AboutScreen'
// import SettingsScreen from '../screens/SettingsScreen'
import BuildingDetailScreen from '../screens/BuildingDetailScreen'
import Colors from '../constants/Colors';

const tabBarOptions = {
  activeTintColor: Colors.tabIconSelected,
  inactiveTintColor: Colors.tabIconDefault,
  showLabel: false,
}

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  BuildingDetail: BuildingDetailScreen
})

HomeStack.navigationOptions = {
  // tabBarLabel: 'Search',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-search`
          : 'md-search'
      }
    />
  ),
  tabBarOptions
}

const AboutStack = createStackNavigator({
  About: AboutScreen,
})

AboutStack.navigationOptions = {
  // tabBarLabel: 'About',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-help-circle' : 'md-help-circle'}
    />
  ),
  tabBarOptions
}

// const SettingsStack = createStackNavigator({
//   Settings: SettingsScreen,
// })

// SettingsStack.navigationOptions = {
//   tabBarLabel: 'Settings',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
//     />
//   ),
// }

export default createBottomTabNavigator({
  HomeStack,
  AboutStack,
  // SettingsStack,
})
