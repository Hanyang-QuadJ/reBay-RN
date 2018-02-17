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
    constructor(props){
        super(props)

    }

    render() {
        console.log("Sell Screen");
        return (
            <Container style={{backgroundColor:'white'}}>
                <HeaderComponent title="default" left="" right="" />
                <Content contentContainerStyle={{flex: 1}}>
                    <Text>Sell Screen</Text>
                </Content>
            </Container>
        )

    }

}
export default (SellScreen = connect(mapStateToProps)(SellScreen));

