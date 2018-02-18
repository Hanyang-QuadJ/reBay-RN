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
import PictureScreen from '../Screens/TabScreens/PictureScreen/PictureScreen';
import {TabBarBottom, StackNavigator, TabNavigator, NavigationActions} from "react-navigation";
import  * as commonStyle from '../Constants/commonStyle';
import * as ScrollToTopCreator from '../ActionCreators/ScrollToTopCreator';

import styles from './Style';

const activeTintColor = commonStyle.PRIMARY_COLOR;
const inactiveTintColor = commonStyle.BORDER_COLOR;

class NavigationStack extends Component {
    renderItem = (route, index) => {
        const { navigation, jumpToIndex } = this.props;

        const isSell = route.routeName === 'Sell';
        const focused = index === navigation.state.index;
        const color = focused ? activeTintColor : inactiveTintColor;

        let iconName;
        if (route.routeName === "Home") {
            iconName = `ios-home${focused ? '' : '-outline'}`;
        }
        else if (route.routeName === "Buy") {
            iconName = `ios-cart${focused ? '' : '-outline'}`;
        }
        else if (route.routeName === "Sell") {
            iconName = `ios-cash`;
        }
        return (
            <TouchableWithoutFeedback
                key={route.key}
                style={styles.tab}
                // onPress={() => isSell ? navigation.navigate('SellStack') : jumpToIndex(index)}
                onPress={() => {
                    switch (route.routeName) {
                        case "Home" : return focused ? this.props.navigation.dispatch(ScrollToTopCreator.scrollToTop()) : jumpToIndex(index);
                        case "Buy" : return focused ? console.log('check2') : jumpToIndex(index);
                        case "Sell" : return navigation.navigate('SellStack');
                    }
                }}
            >
                {route.routeName === "Sell" ?
                    <View style={styles.sellTab}>
                        <Ionicons size={24} name={iconName} color="white"/>
                        <Text style={{color:"white"}}>{route.routeName}</Text>
                    </View> :
                    <View style={styles.tab}>
                        <Ionicons size={24} name={iconName} color={color}/>
                        <Text style={{color}}>{route.routeName}</Text>
                    </View>
                }

            </TouchableWithoutFeedback>
        );
    };

    render() {
        const { navigation } = this.props;

        const { routes } = navigation.state;

        return (
            <View style={styles.tabBar}>
                {routes && routes.map(this.renderItem)}
            </View>
        );
    }
}

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

    },
    {
        tabBarComponent: NavigationStack,
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