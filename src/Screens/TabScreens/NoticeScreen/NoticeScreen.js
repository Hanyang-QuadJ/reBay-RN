import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Text, Content } from 'native-base';
import HeaderComponent from '../../../Components/HeaderComponent/HeaderComponent'
import  styles from './Style';

const mapStateToProps = state => {
    return {
    };
};

class NoticeScreen extends Component {
    constructor(props){
        super(props)

    }
    render() {
        return (
            <Container style={{backgroundColor:'white'}}>
                <HeaderComponent title="default" left="" right="" />
                <Content contentContainerStyle={{flex: 1}}>
                    <Text>Notice Screen</Text>
                </Content>
            </Container>
        )

    }

}
export default (NoticeScreen = connect(mapStateToProps)(NoticeScreen));

