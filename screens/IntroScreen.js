import React, { Component } from 'react';
import {StyleSheet, Text, View, Platform, TouchableHighlight} from 'react-native';
import { STATUS_BAR_HEIGHT } from '../constants';
import Swiper from 'react-native-swiper';

class introScreen extends Component {
    static navigationOptions = () => ({

    });
    constructor(props){
        super(props)
        this.state = { count: 0}

    }
    onPress= () =>{
        this.setState({
            count:this.state.count + 1
        })
    }

    render() {
        return (
            <Swiper style={styles.wrapper} showsButtons={false}>
                <View style={styles.slide1}>
                    <Text style={styles.text}>Hello Swiper</Text>
                </View>
                <View style={styles.slide2}>
                    <Text style={styles.text}>Beautiful</Text>
                </View>
                <View style={styles.slide3}>
                    <Text style={styles.text}>And simple</Text>
                </View>
            </Swiper>
        )

    }

}
const styles = StyleSheet.create({
    wrapper: {
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
})
export default introScreen;