import React, {Component} from 'react';
import {Ionicons} from '@expo/vector-icons';
import TutorialScreen from '../Screens/IntroScreen/TutorialScreen';
import HomeScreen from '../Screens/TabScreens/HomeScreen/HomeScreen';
import BuyScreen from '../Screens/TabScreens/BuyScreen/BuyScreen';
import SignInScreen from "../Screens/Auth/SignInScreen/SignInScreen";
import TermsScreen from '../Screens/Auth/TermsScreen/TermsScreen';
import SignUpScreen from '../Screens/Auth/SignUpScreen/SignUpScreen';
import SellScreen from '../Screens/TabScreens/SellScreen/SellScreen';
import {TabBarBottom, StackNavigator, TabNavigator} from "react-navigation";

const TabNavigation = TabNavigator({
        Home: {screen: HomeScreen},
        Buy: {screen: BuyScreen},
        Sell: {screen: SellScreen},

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
            iconStyle: {marginTop: 1}
        },

        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
    });


const MainNavigator = StackNavigator({
    Intro: {screen: TutorialScreen},
    Home: {screen: TabNavigation},
    SignIn: {screen: SignInScreen},
    SignUp: {screen: SignUpScreen},
    Terms: {screen: TermsScreen}
}, {
    navigationOptions: {
        // gesturesEnabled:false

    },
    headerMode: 'none',
});

export default MainNavigator;