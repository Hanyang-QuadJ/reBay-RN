import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Container, Text, Content, Footer } from 'native-base';
import HeaderComponent from '../../../Components/HeaderComponent/HeaderComponent'
import  styles from './Style';
import InputComponent from '../../../Components/InputComponent/InputComponent'

const mapStateToProps = state => {
    return {
    };
};

class SignUpScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:null,
            password:null,
            passwordConfirm:null,
            nickname:null,
            phoneNumber:null,
            verify:null,


        }

    }

    render() {
        console.log(this.state.username);
        return (
            <Container style={{backgroundColor:'white'}}>
                <HeaderComponent title="회원가입" left="ios-arrow-back" right="" />
                <Content contentContainerStyle={{flex: 1}}>
                    <View style={styles.camera}>


                    </View>
                    <View style={styles.essential}>
                        <View style={styles.container}>
                            <Text>필수입력정보</Text>
                        </View>
                        <InputComponent icon="ios-person"
                                        placeholder="아이디"
                                        onChangeText={(username) => this.setState({username})}
                        />
                        <InputComponent icon=""
                                        placeholder="비밀번호"
                                        onChangeText={(password) => this.setState({password})}
                        />
                        <InputComponent icon="ios-person"
                                        placeholder="비밀번호 재확인"
                                        onChangeText={(nickname) => this.setState({nickname})}
                        />
                        <InputComponent icon="ios-person"
                                        placeholder="이메일"
                                        onChangeText={(email) => this.setState({email})}
                        />
                        <InputComponent icon="ios-person"
                                        placeholder="휴대폰 번호"
                                        onChangeText={(phoneNumber) => this.setState({phoneNumber})}
                        />
                        <InputComponent
                                        placeholder="인증번호"
                                        icon=""
                                        onChangeText={(verify) => this.setState(verify)}
                        />

                    </View>

                </Content>
                <Footer style={styles.footer}>

                </Footer>
            </Container>
        )

    }

}
export default (SignUpScreen = connect(mapStateToProps)(SignUpScreen));

