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

class SignUpScreen2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:null,

        }
    }

    goToSignUpThird = () => {
        const username = this.props.navigation.state.params.username;
        const password = this.props.navigation.state.params.password;
        this.props.navigation.navigate('SignUp3',{username:username, password:password, email:this.state.email});
    };


    render() {
        return (
            <Container style={{backgroundColor: 'white'}}>
                <HeaderComponent title="회원가입" left="ios-arrow-back" right=""/>
                <KeyboardAvoidingView style={{flex:1}} behavior="padding">
                    <View style={{flex:1}}>
                        <View style={styles.essential}>
                            <View style={styles.info}>
                                <Text>이메일</Text>
                            </View>
                            <InputComponent icon="md-person"
                                            placeholder="이메일"
                                            onChangeText={(email) => this.setState({email})}
                            />
                        </View>
                    </View>
                    <View style={styles.footer}>
                        <ButtonComponent onPress={()=>this.goToSignUpThird()} text="다음" buttonColor="white" textColor={commonStyle.PRIMARY_COLOR}/>
                    </View>
                </KeyboardAvoidingView>
            </Container>
        )

    }

}

export default (SignUpScreen2 = connect(mapStateToProps)(SignUpScreen2));

