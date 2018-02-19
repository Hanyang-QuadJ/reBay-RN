import React, {Component} from 'react';
import {View, StyleSheet, TouchableWithoutFeedback, Text, Button} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import TutorialScreen from '../Screens/IntroScreen/TutorialScreen';
import HomeScreen from '../Screens/TabScreens/HomeScreen/HomeScreen';
import BuyScreen from '../Screens/TabScreens/BuyScreen/BuyScreen';
import SignInScreen from "../Screens/Auth/SignInScreen/SignInScreen";
import TermsScreen from '../Screens/Auth/TermsScreen/TermsScreen';
import SignUpScreen from '../Screens/Auth/SignUpScreen/SignUpScreen';
import SellScreen from '../Screens/TabScreens/SellScreen/SellScreen';
import PictureScreen from '../Screens/SellScreens/PictureScreen/PictureScreen';
import NoticeScreen from '../Screens/TabScreens/NoticeScreen/NoticeScreen';
import ProfileScreen from '../Screens/TabScreens/ProfileScreen/ProfileScreen';
import TabBarComponent from '../Components/TabBarComponent/TabBarComponent';
import { StackNavigator, TabNavigator, NavigationActions} from "react-navigation";



const SellNavigator = StackNavigator({
    Picture: {screen: PictureScreen},
    Brand: {screen: SellScreen},
}, {
    headerMode: 'none',
});

const TabNavigation = TabNavigator({
        Home: {screen: HomeScreen},
        Buy: {screen: BuyScreen},
        Sell: {screen: View},
        Notice: {screen: NoticeScreen},
        Profile: {screen: ProfileScreen},

    },
    {
        tabBarComponent: TabBarComponent,
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
    });

export const AuthNavigator = StackNavigator({
    Intro: {screen: TutorialScreen},
    SignIn: {screen: SignInScreen},
    SignUp: {screen: SignUpScreen},
    Terms: {screen: TermsScreen},
    Home: {screen: TabNavigation},


}, {
    headerMode: 'none',
});


const MainNavigator = StackNavigator({
    Auth: {screen: AuthNavigator},
    SellStack: {screen: SellNavigator}
}, {

    navigationOptions: {
        gesturesEnabled: false
    },
    headerMode: 'none',
    mode: 'modal',
});




export default MainNavigator;