import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, KeyboardAvoidingView} from 'react-native';
import {Container, Text, Content, Footer, Button } from 'native-base';
import HeaderComponent from '../../../Components/HeaderComponent/HeaderComponent'
import ButtonComponent from '../../../Components/ButtonComponent/ButtonComponent'
import styles from './Style';
import * as commonStyle from '../../../Constants/commonStyle';
import InputComponent from '../../../Components/InputComponent/InputComponent'

const mapStateToProps = state => {
    return {};
};

class SignUpScreen3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:null,

        }
    }




    render() {
        return (
            <Container style={{backgroundColor: 'white'}}>
                <HeaderComponent title="회원가입" left="ios-arrow-back" right=""/>
                <KeyboardAvoidingView style={{flex:1}} behavior="padding">
                    <View style={{flex:1}}>
                        <View style={styles.essential}>
                            <View style={styles.info}>
                                <Text>휴대폰 번호를 입력하세요</Text>
                            </View>
                            <InputComponent icon="md-person"
                                            placeholder="휴대폰번호"
                                            onChangeText={(email) => this.setState({email})}
                            />
                        </View>
                    </View>
                    <View style={styles.footer}>
                        <ButtonComponent text="가입하기" buttonColor="white" textColor={commonStyle.PRIMARY_COLOR}/>
                    </View>
                </KeyboardAvoidingView>
            </Container>
        )

    }

}

export default (SignUpScreen3 = connect(mapStateToProps)(SignUpScreen3));

