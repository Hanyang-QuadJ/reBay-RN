import React, {Component} from 'react';
import {View, TouchableWithoutFeedback, Text, AsyncStorage, Alert} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {NavigationActions} from 'react-navigation'
import {connect} from 'react-redux';
import styles from "./Style";
import * as commonStyle from "../../Constants/commonStyle";
import * as ScrollToTopCreator from '../../ActionCreators/ScrollToTopCreator';


const activeTintColor = commonStyle.PRIMARY_COLOR;
const inactiveTintColor = commonStyle.THIRD_COLOR;

const mapStateToProps = state => {
    return {};
};


class TabBarComponent extends Component {

    renderItem = (route, index) => {
        const {navigation, jumpToIndex} = this.props;

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
                        case "Home" :
                            return focused ? this.props.navigation.state.routes[0].params.scrollToTop() : jumpToIndex(index);
                        case "Buy" :
                            return focused ? console.log('check2') : jumpToIndex(index);
                        case "Sell" :
                            AsyncStorage.getItem("ACCESS_TOKEN").then(value => {
                                if (value === "" || value === undefined || value === null) {
                                    Alert.alert(
                                        '회원가입이 필요합니다!',
                                        '계속 진행하시려면 확인을 누르세요',
                                        [
                                            {text: '취소', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                                            {
                                                text: '확인', onPress: () => this.props.navigation.dispatch(
                                                    NavigationActions.reset({
                                                        index: 0,
                                                        key: null,
                                                        actions: [
                                                            NavigationActions.navigate({ routeName: 'Auth' })
                                                        ]
                                                    })
                                                )
                                            },
                                        ],
                                        {cancelable: false}
                                    )
                                }
                                else {
                                    return this.props.navigation.navigate('SellStack');
                                }

                            });
                            break;

                        case "Notice" :
                            return focused ? console.log('check2') : jumpToIndex(index);
                        case "Profile" :
                            return focused ? console.log('check2') : jumpToIndex(index);
                        default:
                            return jumpToIndex(index);
                    }
                }}
            >
                {route.routeName === "Sell" ?
                    <View style={styles.sellTab}>
                        <Ionicons size={24} name={iconName} color="white"/>
                        <Text style={{color: "white"}}>{tabName}</Text>
                    </View> :
                    <View style={styles.tab}>
                        <Ionicons size={24} name={iconName} color={color}/>
                        <Text style={{color: color, fontSize: 12}}>{tabName}</Text>
                    </View>
                }

            </TouchableWithoutFeedback>
        );
    };

    render() {
        const {navigation} = this.props;

        const {routes} = navigation.state;

        return (
            <View style={styles.tabBar}>
                {routes && routes.map(this.renderItem)}
            </View>
        );
    }


}

export default (TabBarComponent = connect(mapStateToProps)(TabBarComponent));