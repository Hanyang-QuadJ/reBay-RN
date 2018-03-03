import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, KeyboardAvoidingView} from 'react-native';
import {Container, Text, Content, Footer, Button, Input } from 'native-base';
import HeaderComponent from '../../../Components/HeaderComponent/HeaderComponent'
import ButtonComponent from '../../../Components/ButtonComponent/ButtonComponent'
import styles from './Style';
import * as commonStyle from '../../../Constants/commonStyle';
import InputComponent from '../../../Components/InputComponent/InputComponent'

const mapStateToProps = state => {
    return {};
};

class SignUpScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
            passwordConfirm: null,

        }
    }
    goToSignUpSecond = () => {
        this.props.navigation.navigate('SignUp2',{username:this.state.username, password:this.state.password});
    };


    render() {
        return (
            <Container style={{backgroundColor: 'white'}}>
                <HeaderComponent onPressLeft={()=>this.props.navigation.goBack(null)} title="회원가입" left="ios-arrow-back" right=""/>
                <KeyboardAvoidingView style={{flex:1}} behavior="padding">
                    <View style={{flex:1}}>
                        <View style={styles.essential}>
                            <View style={styles.info}>
                                <Text>필수입력정보</Text>
                            </View>
                            <InputComponent icon="md-person"
                                            placeholder="아이디"
                                            onChangeText={(username) => this.setState({username})}
                            />
                            <InputComponent icon="md-key"
                                            placeholder="비밀번호"
                                            onChangeText={(password) => this.setState({password})}
                            />
                            <InputComponent icon=""
                                            placeholder="비밀번호 확인"
                                            onChangeText={(passwordConfirm) => this.setState({passwordConfirm})}
                            />
                        </View>
                    </View>
                    <View style={styles.footer}>
                        <ButtonComponent onPress={() => this.goToSignUpSecond()} text="다음" buttonColor="white" textColor={commonStyle.PRIMARY_COLOR}/>
                    </View>
                </KeyboardAvoidingView>
            </Container>
        )

    }

}

export default (SignUpScreen = connect(mapStateToProps)(SignUpScreen));

