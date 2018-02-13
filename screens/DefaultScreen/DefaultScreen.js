import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Text, Content } from 'native-base';
import HeaderComponent from '../../components/HeaderComponent'

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
            <Container style={{flex: 1, backgroundColor: '#ddd'}}>
                <Content>
                    <HeaderComponent title="default" left="" right="" />
                    <Text>Main Screen</Text>
                </Content>
            </Container>
        )

    }

}
export default (DefaultScreen = connect(mapStateToProps)(DefaultScreen));

