import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {StackNavigator, TabNavigator, TabBarBottom} from 'react-navigation';
import store from './Store';
import { Ionicons } from '@expo/vector-icons';
import TutorialScreen from './Screens/IntroScreen/TutorialScreen';
import HomeScreen from './Screens/TabScreens/HomeScreen/HomeScreen';
import BuyScreen from './Screens/TabScreens/BuyScreen/BuyScreen';
import SignInScreen from "./Screens/Auth/SignInScreen/SignInScreen";
import AppNavigation from './Navigation/AppNavigation';



export default class App extends Component {

    render() {
        const TabNavigation = TabNavigator({
                Home: {screen: HomeScreen},
                Buy: {screen: BuyScreen},

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
            Intro: {screen: TutorialScreen},
            Home: {screen: TabNavigation},
            SignIn:{ screen: SignInScreen}
        },{
            headerMode:'none',
        });


        return (
            <Provider store={store}>
                <MainNavigator />
            </Provider>

        );
    }
}


