import React, { Component } from 'react';
import {StyleSheet, Text, View, Platform} from 'react-native';
import { STATUS_BAR_HEIGHT } from '../constants';
import { Ionicons } from '@expo/vector-icons';


class mainScreen extends Component {
    constructor(props){
        super(props)

    }

    static navigationOptions = () => ({
        title: 'reBay',
        headerStyle: {
            height: Platform.OS === 'android' ? 54 + STATUS_BAR_HEIGHT : 54,
            backgroundColor: '#2196F3'
        },
        headerTitleStyle: {
            marginTop: Platform.OS === 'android' ? STATUS_BAR_HEIGHT : 0,
            color: 'white'
        },
        headerLeft: <View><Text>I</Text></View>

    });
    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#ddd'}}>
                <Text>Main Screen</Text>
                <Ionicons name={`ios-information-circle`}/>
            </View>
        )

    }

}
export default mainScreen;