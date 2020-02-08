import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Home, Parties} from '../../screens';

const tabBarIconCb = (icon: string) => () => <FontAwesomeIcon icon={icon} />

const buttonTabRoutes = {
  Feed: {
    screen: Home,
    navigationOptions: () => ({
      tabBarIcon: tabBarIconCb('home'),
    }),
  },
  Parties: {
    screen: Parties,
    navigationOptions: () => ({
      tabBarIcon: tabBarIconCb('map'),
    }),
  },
  Library: {
    screen: Home,
    navigationOptions: () => ({
      tabBarIcon: tabBarIconCb('book-open'),
    }),
  },
  Settings: {
    screen: Home,
    navigationOptions: () => ({
      tabBarIcon: tabBarIconCb('cogs'),
    }),
  },
};

export default createBottomTabNavigator(buttonTabRoutes);
