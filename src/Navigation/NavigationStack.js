import React, {Component} from 'react';
import {View, StyleSheet, TouchableWithoutFeedback, Text, Button, AsyncStorage, Alert} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import TutorialScreen from '../Screens/TutorialScreen/TutorialScreen';
import HomeScreen from '../Screens/TabScreens/HomeScreen/HomeScreen';
import BuyScreen from '../Screens/TabScreens/BuyScreen/BuyScreen';
import BuyScreen2 from '../Screens/TabScreens/BuyScreen/BuyScreen2';
import SignInScreen from "../Screens/Auth/SignInScreen/SignInScreen";
import TermsScreen from '../Screens/Auth/TermsScreen/TermsScreen';
import SignUpScreen from '../Screens/Auth/SignUpScreen/SignUpScreen';
import SignUpScreen2 from '../Screens/Auth/SignUpScreen2/SignUpScreen2';
import SignUpScreen3 from '../Screens/Auth/SignUpScreen3/SignUpScreen3';
import FilterScreen from '../Screens/SellScreens/FilterScreen/FilterScreen';
import DetailScreen from '../Screens/SellScreens/DetailScreen/DetailScreen';




import SellScreen from '../Screens/TabScreens/SellScreen/SellScreen';
import PictureScreen from '../Screens/SellScreens/PictureScreen/PictureScreen';
import NoticeScreen from '../Screens/TabScreens/NoticeScreen/NoticeScreen';
import ProfileScreen from '../Screens/TabScreens/ProfileScreen/ProfileScreen';
import TabBarComponent from '../Components/TabBarComponent/TabBarComponent';
import { StackNavigator, TabNavigator, NavigationActions, TabBarBottom} from "react-navigation";
import InitScreen from "../Screens/InitScreen/InitScreen";
import BrandScreen from "../Screens/SellScreens/BrandScreen/BrandScreen";
import ItemScreen from '../Screens/ItemScreen/ItemScreen';
import Item from "../../native-base-theme/components/Item";





const BuyNavigator = StackNavigator({
    BuyScreen2: {screen: BuyScreen2},
}, {
    headerMode: 'none',
});
const ItemNavigator= StackNavigator({
    Item: {screen: ItemScreen},
}, {
    headerMode: 'none',
});
const SellNavigator = StackNavigator({
    Picture: {screen: PictureScreen},
    Brand: {screen: BrandScreen},
    Filter:{screen: FilterScreen},
    Detail:{screen: DetailScreen}
}, {
    headerMode: 'none',
});

const TabNavigation = TabNavigator({
        Home: {screen: HomeScreen},
        Buy: {screen: BuyScreen},
        Sell: {screen: View},
        Notice: {screen: ItemScreen},
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
    SignUp2: {screen: SignUpScreen2},
    SignUp3: {screen: SignUpScreen3},
    Terms: {screen: TermsScreen},
    Home: {screen: TabNavigation},

}, {
    headerMode: 'none', //Navigation Header
});


const MainNavigator = StackNavigator({
    Init: {screen: InitScreen},
    Auth: {screen: AuthNavigator},
    Home: {screen: TabNavigation},
    BuyStack: {screen: BuyNavigator},
    SellStack: {screen: SellNavigator},
    ItemStack: {screen: ItemNavigator }
	},
	{
	    navigationOptions: {
	        gesturesEnabled: false
    },
    headerMode: 'none',
    mode: 'modal',

});





export default MainNavigator;
