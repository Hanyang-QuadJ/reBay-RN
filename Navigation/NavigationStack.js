import React, {Component} from 'react';
import {Provider, connect} from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import MainNavigator from './NavigationStack';

class AppNavigation extends Component {
    render() {
        const { navigationState, dispatch } = this.props;
        return (
            <MainNavigator
                navigation={addNavigationHelpers({ dispatch, state: navigationState })}
            />

        )

    }
}

const mapStateToProps = (state) => {
    return ({
        navigationState: state.NavigationReducer // NavigationReducer contains the navigation state of the app
    })
};

export default connect(mapStateToProps)(AppNavigation);