import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, TextInput, KeyboardAvoidingView} from 'react-native';
import { NavigationActions } from 'react-navigation';
import * as LoginActionCreator from '../../../ActionCreators/LoginActionCreator';

import InputComponent from '../../../Components/InputComponent/InputComponent'
import {
    Container,
    Text,
    Content,
    Header,
    Left,
    Body,
    Right,
    Button,
    Icon,
    Item,
    Input,
    Form,
    StyleProvider
} from 'native-base';
import styles from './Style';

const mapStateToProps = state => {
    return {
        loginStatus: state.LoginReducer.loginStatus
    };
};

class SignInScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",

        }

    }


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

    sendToAction = () => {
        console.log(this.state);
        this.props.dispatch(LoginActionCreator.postLogin(this.state.email, this.state.password));
    };
    componentDidUpdate(){

        if(this.props.loginStatus ===true){

            this.goToHome();
        }
    }

    render() {
        return (
            <Container style={{backgroundColor: 'white'}}>
                <Header style={styles.headerContainer}>
                    <Left>
                        <Button transparent>
                            <Icon type="Ionicons" name="ios-arrow-back"/>
                        </Button>
                    </Left>
                    <Body>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Text style={styles.rightText}>다음에하기</Text>
                        </Button>
                    </Right>
                </Header>
                <KeyboardAvoidingView style={{flex:0.5}} behavior="height" >

                <Content contentContainerStyle={{flex: 1}}>

                    <View style={styles.logoContainer}>
                        <Text>REBAY LOGO</Text>
                    </View>

                    <View style={styles.formContainer}>
                        <View>
                            <View style={styles.container}>
                                <View style={styles.icon}>
                                    <Icon type="MaterialIcons" name="person-outline"/>
                                </View>
                                <View style={styles.input}>
                                    <TextInput autoCapitalize="none" placeholder="아이디"
                                               onChangeText={(email) => this.setState({email})}
                                               value={this.state.email}/>
                                </View>
                            </View>
                        </View>
                        <View>
                            <View style={styles.container}>
                                <View style={styles.icon}>
                                    <Icon type="MaterialIcons" name="lock-open"/>
                                </View>
                                <View style={styles.input}>
                                    <TextInput autoCapitalize="none" placeholder="비밀번호" secureTextEntry={true}
                                               onChangeText={(password) => this.setState({password})}
                                               value={this.state.password}/>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button full rounded onPress={() => this.sendToAction()}
                                style={{
                                    backgroundColor: "rgba(92, 99,216, 0.5)",
                                    height: 45,
                                    marginTop: 20,
                                    marginLeft: 30,
                                    marginRight: 30,
                                    borderColor: "transparent",
                                    borderWidth: 0,
                                    borderRadius: 7,
                                }}>
                            <Text>로그인</Text>
                        </Button>
                        <Text style={{marginTop: 10}}>비밀번호를 잊어버리셨나요?</Text>
                    </View>
                </Content>
                </KeyboardAvoidingView>

            </Container>
        )


    }

}

export default (SignInScreen = connect(mapStateToProps)(SignInScreen));

