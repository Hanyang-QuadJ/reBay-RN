import React, {Component} from 'react';
import {Provider, connect} from 'react-redux';
import {addNavigationHelpers, NavigationActions} from 'react-navigation';
import MainNavigator from './NavigationStack';
import {createReduxBoundAddListener} from "react-navigation-redux-helpers";
import { AsyncStorage,View } from 'react-native';

const mapStateToProps = (state) => {
    return ({
        navigationState: state.NavigationReducer, // NavigationReducer contains the navigation state of the app
    })
};


const addListener = createReduxBoundAddListener("root");


const App = ({ dispatch, navigationState }) => (
    <MainNavigator navigation={addNavigationHelpers({ dispatch, state: navigationState, addListener })}/>
);



const AppWithNavigation = connect(mapStateToProps)(App);

class AppNavigation extends Component {
    constructor(props){
        super(props);
    }

    componentWillMount(){

	}

    render() {
        return (
            <AppWithNavigation/>
        )
    }
}


export default AppNavigation;
