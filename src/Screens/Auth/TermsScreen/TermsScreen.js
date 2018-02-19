import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Text, Content } from 'native-base';
import HeaderComponent from '../../../Components/HeaderComponent/HeaderComponent'
import  styles from './Style';

const mapStateToProps = state => {
    return {
    };
};

class TermsScreen extends Component {
    constructor(props){
        super(props)

    }
    goToSignUp = () => {
        console.log("@#@#");
         this.props.navigation.navigate('SignUp')
    };

    render() {
        return (
            <Container style={{backgroundColor:'white'}}>
                <HeaderComponent title="이용 약관" left="ios-arrow-back" right="ios-arrow-forward" onPressRight={() => this.goToSignUp()} />
                <Content contentContainerStyle={{flex: 1}}>
                    <Text>Terms Screen</Text>
                </Content>
            </Container>
        )

    }

}
export default (TermsScreen = connect(mapStateToProps)(TermsScreen));

