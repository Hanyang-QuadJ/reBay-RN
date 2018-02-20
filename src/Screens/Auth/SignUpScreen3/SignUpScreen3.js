import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, KeyboardAvoidingView} from 'react-native';
import {Container, Text, Content, Footer, Button } from 'native-base';
import HeaderComponent from '../../../Components/HeaderComponent/HeaderComponent'
import ButtonComponent from '../../../Components/ButtonComponent/ButtonComponent'
import * as SignUpCreator from '../../../ActionCreators/SignUpCreator'
import styles from './Style';
import * as commonStyle from '../../../Constants/commonStyle';
import InputComponent from '../../../Components/InputComponent/InputComponent'
import {NavigationActions} from "react-navigation";

const mapStateToProps = state => {
    return {
        signUpStatus:state.SignUpReducer.signUpStatus
    };
};

class SignUpScreen3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone:null,
        }
    }

    signUp = () => {
        const username = this.props.navigation.state.params.username;
        const password = this.props.navigation.state.params.password;
        const email = this.props.navigation.state.params.email;
        this.props.dispatch(SignUpCreator.signUp(username, password, email, this.state.phone ));

    };
    goToHome = () => {
        this.props.navigation.dispatch(
            NavigationActions.reset({
                index: 0,
                key:null,
                actions: [
                    NavigationActions.navigate({ routeName: 'Home' })
                ]
            })
        )

    };
    componentDidUpdate(){
        console.log(this.props.signUpStatus);
        if(this.props.signUpStatus === true){
            console.log("!!!");
            this.goToHome();
        }

    }


    render() {
        console.log(this.props.signUpStatus);

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
                                            onChangeText={(phone) => this.setState({phone})}
                            />
                        </View>
                    </View>
                    <View style={styles.footer}>
                        <ButtonComponent text="가입하기" onPress={() => this.signUp()} buttonColor="white" textColor={commonStyle.PRIMARY_COLOR}/>
                    </View>
                </KeyboardAvoidingView>
            </Container>
        )

    }

}

export default (SignUpScreen3 = connect(mapStateToProps)(SignUpScreen3));

