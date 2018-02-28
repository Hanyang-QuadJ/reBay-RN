import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { connect } from 'react-redux';
import { Container, Text, Content } from 'native-base';
import HeaderComponent from '../../../Components/HeaderComponent/HeaderComponent'
import  styles from './Style';

const mapStateToProps = state => {
    return {
    };
};

class DetailScreen extends Component {
    constructor(props){
        super(props)

    }

    render() {
        console.log(this.props.navigation.state.params);
        return (
            <Container style={{backgroundColor:'white'}}>
                <HeaderComponent title="default" left="" right="" />
                <Content contentContainerStyle={{flex: 1}}>
                    <TextInput
                        multiline={true}
                        numberOfLines={10}
                        style={{ height:200, backgroundColor:'red'}}
                    />
                </Content>
            </Container>
        )

    }

}
export default (DetailScreen = connect(mapStateToProps)(DetailScreen));

