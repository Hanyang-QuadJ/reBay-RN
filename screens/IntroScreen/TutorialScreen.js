import React, {Component} from 'react';
import {StatusBar, View, TouchableHighlight, StyleSheet} from 'react-native';
import {Button, Container, Content, Text} from 'native-base';

import {STATUS_BAR_HEIGHT} from '../../Constants/index';
import Swiper from 'react-native-swiper';

class TutorialScreen extends Component {
    static navigationOptions = () => ({
        header: null

    });

    constructor(props) {
        super(props);   

    }
    render() {
        return (
            <View style={{flex: 1}}>
                <Swiper style={styles.wrapper} showsButtons={false} dot={<View style={{
                    backgroundColor: 'rgba(0,0,0,.2)',
                    width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 0, marginBottom: 150
                }}/>}
                        activeDot={<View style={{
                            backgroundColor: '#007aff', width: 8, height: 8, borderRadius: 4, marginLeft: 3,
                            marginRight: 3, marginTop: 0, marginBottom: 150,
                        }}/>}
                >
                    <View style={styles.slide1}>
                        <Text style={styles.text}>튜토리얼1</Text>
                    </View>
                    <View style={styles.slide2}>
                        <Text style={styles.text}>튜토리얼2</Text>
                    </View>
                    <View style={styles.slide3}>
                        <Text style={styles.text}>튜토리얼3</Text>
                    </View>
                </Swiper>
                <View style={styles.staticJump}>
                    <TouchableHighlight onPress={() => this.props.navigation.navigate('Home')}>
                        <Text style={styles.staticJumpText}>건너뛰기</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.staticAuth}>
                    <Button full rounded onPress={() => this.props.navigation.navigate('Home')}
                            style={{
                                backgroundColor: "rgba(92, 99,216, 1)",
                                height: 45,
                                borderColor: "transparent",
                                borderWidth: 0,
                                borderRadius: 5,
                            }}>
                        <Text>로그인</Text>
                    </Button>

                    <Button full rounded onPress={() => this.props.navigation.navigate('Home')}
                            style={{
                                backgroundColor: "rgba(92, 99,216, 0.5)",
                                height: 45,
                                marginTop:10,
                                marginBottom:5,
                                borderColor: "transparent",
                                borderWidth: 0,
                                borderRadius: 5,
                            }}>
                        <Text>회원가입</Text>
                    </Button>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
        flex: 1,
        backgroundColor: '#4c586f',
        justifyContent: 'center',
        alignItems: 'center',
    },
    staticJump: {
        position: 'absolute',
        zIndex: 100,
        right: 10,
        top: 30,
    },
    staticJumpText: {
        fontSize: 16,

    },
    staticAuth: {
        position: 'absolute',
        zIndex: 100,
        left: 20,
        right: 20,
        bottom: 10,
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
    },
    button: {}
});
export default TutorialScreen;