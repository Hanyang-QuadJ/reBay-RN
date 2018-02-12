import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {StackNavigator, TabNavigator, TabBarBottom} from 'react-navigation';
import store from './store';
import {Ionicons} from '@expo/vector-icons';
import introScreen from './screens/introScreen';
import mainScreen from './screens/mainScreen';
import sellScreen from './screens/sellScreen';
import buyScreen from './screens/buyScreen';
import noticeScreen from './screens/noticeScreen';
import profileScreen from './screens/profileScreen';

export default class App extends Component {

    render() {
        const TabNavigation = TabNavigator({
                Home: {screen: mainScreen},
                Buy: {screen: buyScreen},
                Sell: {screen: sellScreen},
                Notice: {screen: noticeScreen},
                Profile: {screen: profileScreen},
            },
            {
                navigationOptions: ({navigation}) => ({
                    tabBarIcon: ({focused, tintColor}) => {
                        const {routeName} = navigation.state;
                        let iconName;
                        if (routeName === 'Home') {
                            iconName = `ios-home${focused ? '' : '-outline'}`;
                        } else if (routeName === 'Sell') {
                            iconName = `ios-cash${focused ? '' : '-outline'}`;
                        } else if (routeName === 'Buy') {
                            iconName = `ios-cart${focused ? '' : '-outline'}`;
                        }
                        else if (routeName === 'Profile') {
                            iconName = `ios-person${focused ? '' : '-outline'}`;
                        }
                        else if (routeName === 'Notice') {
                            iconName = `ios-notifications${focused ? '' : '-outline'}`;
                        }
                        return <Ionicons name={iconName} size={28} color={tintColor}/>;
                    },
                }),
                tabBarOptions: {
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
                    iconStyle:{marginTop:1}
                },

                tabBarComponent: TabBarBottom,
                tabBarPosition: 'bottom',
                animationEnabled: false,
                swipeEnabled: false,
            });


        const MainNavigator = StackNavigator({
            Intro: {screen: introScreen},
            Home: {screen: TabNavigation}
        });


        return (
            <Provider store={store}>
                <MainNavigator/>
            </Provider>

        );
    }
}


