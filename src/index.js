import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import BooksSCreen from './containers/Books';
import HomeScreen from './containers/Home';
import DetailScreen from './containers/Details';
import Header from './components/Header';

const navigator = createStackNavigator({
  Books: {
    screen: BooksSCreen,
    title: 'Design Books',
    navigationOptions: {
      headerTitle: <Header leftIcon="md-menu" rightIcon="md-search" color="black" title="Design Books" />,
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
        // height: 120 this increases height of header
      }
    }
  },
  Home: {
    screen: HomeScreen,
    title: 'Design Books'
  },
  Details: {
    screen: DetailScreen,
    title: 'Design Books'
  }
});

export default createAppContainer(navigator);
