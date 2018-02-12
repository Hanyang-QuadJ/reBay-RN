import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider} from 'react-redux';
import { StackNavigator } from 'react-navigation';
import store from './store';
import introScreen from './screens/introScreen';

export default class App extends Component {

  render() {

      const MainNavigator = StackNavigator({
          Main : { screen: introScreen},

      },{
          headerMode:'none'
      });
    return (
        <Provider store={store}>
            <MainNavigator/>
        </Provider>

    );
  }
}


