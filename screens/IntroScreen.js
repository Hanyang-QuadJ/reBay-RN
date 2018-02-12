import React, {Component} from 'react';
import {StyleSheet, Text, View, Platform, TouchableHighlight} from 'react-native';
import {Button} from 'react-native-elements';
import {STATUS_BAR_HEIGHT} from '../constants';
import Swiper from 'react-native-swiper';

class introScreen extends Component {
    static navigationOptions = () => ({
        header: null

    });

    constructor(props) {
        super(props);
        this.state = {count: 0}

    }

    onPress = () => {
        this.setState({
            count: this.state.count + 1
        })
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
                    <TouchableHighlight  onPress={() => this.props.navigation.navigate('Home')}>
                        <Text style={styles.staticJumpText}>건너뛰기</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.staticAuth}>
                    <Button title='로그인' onPress={() => this.props.navigation.navigate('Home')}
                            buttonStyle={{
                                backgroundColor: "rgba(92, 99,216, 1)",
                                height:45,
                                borderColor: "transparent",
                                borderWidth: 0,
                                borderRadius: 5,
                            }}/>
                    <Button title='회원가입' onPress={() => this.props.navigation.navigate('Home')}
                            buttonStyle={{
                                marginTop:10,
                                backgroundColor: "rgba(92, 99,216, 0.5)",
                                height:45,
                                borderColor: "transparent",
                                borderWidth: 0,
                                borderRadius: 5,
                            }}/>
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
    staticJump:{
        position: 'absolute',
        zIndex: 100,
        right: 10,
        top: 30,
    },
    staticJumpText:{
        fontSize:16,

    },
    staticAuth: {
        position: 'absolute',
        zIndex: 100,
        left: 20,
        right: 20,
        bottom: 30,
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
})
export default introScreen;