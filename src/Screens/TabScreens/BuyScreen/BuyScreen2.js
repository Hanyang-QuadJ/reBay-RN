import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Text, Content } from 'native-base';
import HeaderComponent from '../../../Components/HeaderComponent/HeaderComponent'
import  styles from './Style';

const mapStateToProps = state => {
    return {
    };
};

class DefaultScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedBrand:[]
        };
    }
    componentWillReceiveProps(nextProps){
        console.log("@@@@@@@@@@!!@#@#!#@\n"+nextProps);
        if(nextProps.brand != null){

            this.setState({
                selectedBrand: nextProps.navigation.state.params.brandName
            });
        }
    }
    render() {
        return (
            <Container style={{backgroundColor:'white'}}>
                <HeaderComponent title="default" left="" right="" />
                <Content contentContainerStyle={{flex: 1}}>
                    {(this.props.navigation.state.params == null)?
                        (<Text>aa</Text>):(<Text>{this.props.navigation.state.params.brandName}</Text>)
                }
                </Content>
            </Container>
        )

    }

}
export default (DefaultScreen = connect(mapStateToProps)(DefaultScreen));

