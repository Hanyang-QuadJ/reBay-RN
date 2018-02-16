import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Container, Text, Content, Footer } from 'native-base';
import HeaderComponent from '../../../Components/HeaderComponent/HeaderComponent'
import  styles from './Style';

const mapStateToProps = state => {
    return {
    };
};

class SignUpScreen extends Component {
    constructor(props){
        super(props)

    }

    render() {
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
                    </View>
                </Content>
                <Footer style={styles.footer}>

                </Footer>
            </Container>
        )

    }

}
export default (SignUpScreen = connect(mapStateToProps)(SignUpScreen));

