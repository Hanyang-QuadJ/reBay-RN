import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Text, Content } from 'native-base';
import HeaderComponent from '../../Components/HeaderComponent/HeaderComponent'
import  styles from './Style';

const mapStateToProps = state => {
    return {
    };
};

class DefaultScreen extends Component {
    constructor(props){
        super(props)

    }

    render() {
        return (
            <Container style={{backgroundColor:'white'}}>
                <HeaderComponent title="default" left="" right="" />
                <Content>
                    <Text>Default Screen</Text>
                </Content>
            </Container>
        )

    }

}
export default (DefaultScreen = connect(mapStateToProps)(DefaultScreen));

