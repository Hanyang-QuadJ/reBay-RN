import React, {Component} from 'react';
import {Provider, connect} from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import MainNavigator from './NavigationStack';

class AppNavigation extends Component {
    render() {
        return (
            <MainNavigator />
        )
    }
}


export default AppNavigation;