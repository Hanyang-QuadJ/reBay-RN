import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {StackNavigator, TabNavigator, TabBarBottom} from 'react-navigation';
import store from './store';
import {Ionicons} from '@expo/vector-icons';
import introScreen from './screens/introScreen';
import mainScreen from './screens/mainScreen';
import sellScreen from './screens/sellScreen';

export default class App extends Component {

    render() {
        const TabNavigation = TabNavigator({
            Home: {screen: mainScreen},
            Sell: {screen: sellScreen}
        });


        const MainNavigator = StackNavigator({
            Intro: {screen: introScreen},
            Home: {screen: TabNavigation}
        },
            {
                navigationOptions: ({ navigation }) => ({
                    tabBarIcon: ({ focused, tintColor }) => {
                        const { routeName } = navigation.state;
                        let iconName;
                        if (routeName === 'Home') {
                            iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                        } else if (routeName === 'Settings') {
                            iconName = `ios-options${focused ? '' : '-outline'}`;
                        }

                        // You can return any component that you like here! We usually use an
                        // icon component from react-native-vector-icons
                        return <Ionicons name={iconName} size={25} color={tintColor} />;
                    },
                }),
                tabBarOptions: {
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
                },
                tabBarComponent: TabBarBottom,
                tabBarPosition: 'bottom',
                animationEnabled: false,
                swipeEnabled: false,
            });


        return (
            <Provider store={store}>
                <MainNavigator/>
            </Provider>

        );
    }
}


