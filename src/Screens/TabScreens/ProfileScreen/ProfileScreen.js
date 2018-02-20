import React, { Component } from 'react';
import { TouchableOpacity, AsyncStorage } from 'react-native'
import { connect } from 'react-redux';
import { Container, Text, Content } from 'native-base';
import HeaderComponent from '../../../Components/HeaderComponent/HeaderComponent'
import  styles from './Style';

const mapStateToProps = state => {
    return {
    };
};

class ProfileScreen extends Component {
    constructor(props){
        super(props)

    }

    signOut = () => {
        AsyncStorage.removeItem("ACCESS_TOKEN").then(value => {
            this.props.navigation.navigate('Intro');
            }
        )
    };

    render() {
        return (
            <Container style={{backgroundColor:'white'}}>
                <HeaderComponent title="default" left="" right="" />
                <Content contentContainerStyle={{flex: 1}}>
                    <TouchableOpacity onPress={()=>this.signOut()}>
                        <Text>로그아웃</Text>
                    </TouchableOpacity>
                </Content>
            </Container>
        )

    }

}
export default (ProfileScreen = connect(mapStateToProps)(ProfileScreen));

