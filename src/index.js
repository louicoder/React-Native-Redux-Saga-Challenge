import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import BooksSCreen from './containers/Books';
import HomeScreen from './containers/Home';
import DetailScreen from './containers/Details';
import DetailsHeader from './components/DetailsHeader';
import BooksHeader from './components/BooksHeader';

const navigator = createStackNavigator({
  Books: {
    screen: BooksSCreen,
    navigationOptions: ({ navigation }) => ({
      header: <BooksHeader leftIcon="md-menu" rightIcon="md-search" color="black" title="Design Books" navigation={navigation} />,
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
        // height: 120 this increases height of header
      }
    })
  },
  Details: {
    screen: DetailScreen,
    navigationOptions: ({ navigation }) => ({
      header: <DetailsHeader leftIcon="md-arrow-back" rightIcon="md-search" color="black" title="Design Books" navigation={navigation} />,
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
      }
    })
  },
  Home: {
    screen: HomeScreen,
    title: 'Design Books'
  }
}, {
  defaultNavigationOptions: {
    screen: DetailScreen
  }
});

export default createAppContainer(navigator);
