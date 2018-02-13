import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Text, Content } from 'native-base';
import HeaderComponent from '../../../components/HeaderComponent/HeaderComponent'

const mapStateToProps = state => {
    return {
    };
};

class BuyScreen extends Component {
    constructor(props){
        super(props)

    }

    render() {
        return (
            <Container style={{flex: 1, backgroundColor: '#ddd'}}>
                <Content>
                    <HeaderComponent title="default" left="" right="ios-basket" />
                    <Text>Buy Screen</Text>
                </Content>
            </Container>
        )

    }

}
export default (BuyScreen = connect(mapStateToProps)(BuyScreen));

