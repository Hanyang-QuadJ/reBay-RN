import React, { Component } from 'react';
import {View,TouchableWithoutFeedback,Text} from 'react-native';
import{ Ionicons }from '@expo/vector-icons';
import { connect } from 'react-redux';
import styles from "./Style";
import * as commonStyle from "../../Constants/commonStyle";
import * as ScrollToTopCreator from '../../ActionCreators/ScrollToTopCreator';


const activeTintColor = commonStyle.PRIMARY_COLOR;
const inactiveTintColor = commonStyle.BORDER_COLOR;

const mapStateToProps = state => {
    return {
    };
};


class TabBarComponent extends Component{

    renderItem = (route, index) => {
        const { navigation, jumpToIndex } = this.props;

        const focused = index === navigation.state.index;
        const color = focused ? activeTintColor : inactiveTintColor;

        let iconName, tabName;
        if (route.routeName === "Home") {
            iconName = `ios-home${focused ? '' : '-outline'}`;
            tabName = "홈"
        }
        else if (route.routeName === "Buy") {
            iconName = `ios-cart${focused ? '' : '-outline'}`;
            tabName = "구매하기"

        }
        else if (route.routeName === "Sell") {
            iconName = `ios-cash`;
            tabName = "판매하기"

        }
        else if (route.routeName === "Notice") {
            iconName = `ios-notifications${focused ? '' : '-outline'}`;
            tabName = "알림"

        }
        else if (route.routeName === "Profile") {
            iconName = `ios-person${focused ? '' : '-outline'}`;
            tabName = "마이페이지"
        }
        return (
            <TouchableWithoutFeedback
                key={route.key}
                style={styles.tab}
                onPress={() => {
                    switch (route.routeName) {
                        case "Home" : return focused ? this.props.navigation.dispatch(ScrollToTopCreator.scrollToTop()) : jumpToIndex(index);
                        case "Buy" : return focused ? console.log('check2') : jumpToIndex(index);
                        case "Sell" : return navigation.navigate('SellStack');
                        case "Notice" : return focused ? console.log('check2') : jumpToIndex(index);
                        case "Profile" : return focused ? console.log('check2') : jumpToIndex(index);
                        default: return jumpToIndex(index);
                    }
                }}
            >
                {route.routeName === "Sell" ?
                    <View style={styles.sellTab}>
                        <Ionicons size={24} name={iconName} color="white"/>
                        <Text style={{color:"white"}}>{tabName}</Text>
                    </View> :
                    <View style={styles.tab}>
                        <Ionicons size={24} name={iconName} color={color}/>
                        <Text style={{color:color, fontSize:12}}>{tabName}</Text>
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
export default (TabBarComponent = connect(mapStateToProps)(TabBarComponent));