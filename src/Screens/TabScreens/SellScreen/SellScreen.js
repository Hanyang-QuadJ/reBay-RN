import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Text, Content } from 'native-base';
import HeaderComponent from '../../../Components/HeaderComponent/HeaderComponent'
import  styles from './Style';

const mapStateToProps = state => {
    return {
    };
};

class SellScreen extends Component {
    static navigationOptions = {
        tabBarOnPress:(scene) => {
            if(scene.scene.focused === true){

            }
            else{

            }
        }

    };
    constructor(props){
        super(props)

    }

    render() {
        console.log("Sell Screen");
        return (
            <Container style={{backgroundColor:'white'}}>
                <HeaderComponent title="판매하기" left="" right="" />
                <Content contentContainerStyle={{flex: 1}}>
                    <Text>Sell Screen</Text>
                </Content>
            </Container>
        )

    }

}
export default (SellScreen = connect(mapStateToProps)(SellScreen));

