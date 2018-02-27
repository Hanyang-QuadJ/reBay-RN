import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Text, Content } from 'native-base';
import HeaderComponent from '../../../Components/HeaderComponent/HeaderComponent'
import  styles from './Style';

const mapStateToProps = state => {
    return {
    };
};

class FilterScreen extends Component {
    constructor(props){
        super(props)

    }

    render() {
        return (
            <Container style={{backgroundColor:'white'}}>
                <HeaderComponent title="상품정보 입력" left="" right="" />
                <Content contentContainerStyle={{flex: 1}}>
                </Content>
            </Container>
        )

    }

}
export default (FilterScreen = connect(mapStateToProps)(FilterScreen));

