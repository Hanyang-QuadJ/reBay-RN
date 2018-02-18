import React, {Component} from 'react';
import {Provider, connect} from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import MainNavigator, {AuthNavigator} from './NavigationStack';
import {createReduxBoundAddListener} from "react-navigation-redux-helpers";


const addListener = createReduxBoundAddListener("root");



const App = ({ dispatch, navigationState }) => (
    <MainNavigator navigation={addNavigationHelpers({ dispatch, state: navigationState, addListener })}/>
);

const mapStateToProps = (state) => {
    return ({
        navigationState: state.NavigationReducer // NavigationReducer contains the navigation state of the app
    })
};
const AppWithNavigation = connect(mapStateToProps)(App);


class AppNavigation extends Component {
    render() {
        console.log(this.state);
        return (
            <AppWithNavigation  />
        )
    }
}


export default AppNavigation;
