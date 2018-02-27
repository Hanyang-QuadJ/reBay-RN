import React, { Component } from 'react';
import { View } from 'react-native'
import { connect } from 'react-redux';
import { Container, Text, Content, Button } from 'native-base';
import HeaderComponent from '../../../Components/HeaderComponent/HeaderComponent'
import  styles from './Style';

const mapStateToProps = state => {
    return {
    };
};

class BrandScreen extends Component {
    constructor(props){
        super(props)

    }

    goToFilter = () => {
        this.props.navigation.navigate('Filter');
    };

    render() {
        console.log(this.props.navigation.state.params);
        return (
            <Container style={{backgroundColor:'white'}}>
                <HeaderComponent title="default" left="" right="" />
                <Content contentContainerStyle={{flex: 1}}>
                    <Text>Brand Screen</Text>
                    <Button onPress={()=>this.goToFilter()}><Text>다음으로</Text></Button>
                </Content>
            </Container>
        )

    }

}
export default (BrandScreen = connect(mapStateToProps)(BrandScreen));

