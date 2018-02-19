import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {StackNavigator, TabNavigator, TabBarBottom} from 'react-navigation';
import store from './Store';
import { Ionicons } from '@expo/vector-icons';
import AppNavigation from './Navigation/AppNavigation';




export default class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <AppNavigation />
            </Provider>
        );
    }
}


