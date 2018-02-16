import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, TextInput, KeyboardAvoidingView} from 'react-native';
import { NavigationActions } from 'react-navigation';
import LoggedInAppNavigation from '../../../Navigation/LoggedInAppNavigation';
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
import getTheme from '../../../native-base-theme/components';
import HeaderComponent from '../../../Components/HeaderComponent/HeaderComponent'
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
        const navigateToHome = NavigationActions.navigate({ routeName:'Home'});
        this.props.navigation.dispatch(navigateToHome);
    };

    sendToAction = () => {
        console.log(this.state);
        this.props.dispatch(LoginActionCreator.postLogin(this.state.email, this.state.password));
    };
    componentDidUpdate(){
        console.log("checkcheck");
        console.log(this.props);

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
                <Content contentContainerStyle={{flex: 1}}>
                    <KeyboardAvoidingView style={{flex:1}} behavior="padding">

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
                                    <TextInput autoCapitalize="none" placeholder="비밀번호"
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
                    </KeyboardAvoidingView>
                </Content>
            </Container>
        )


    }

}

export default (SignInScreen = connect(mapStateToProps)(SignInScreen));

