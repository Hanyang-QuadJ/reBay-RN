import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Text, Content } from 'native-base';
import HeaderComponent from '../../../Components/HeaderComponent/HeaderComponent'
import  styles from './Style';
import {AsyncStorage} from "react-native";
import * as ItemActionCreator from "../../../ActionCreators/ItemActionCreator";
import * as BrandActionCreator from "../../../ActionCreators/BrandActionCreator";

const mapStateToProps = state => {
    return {
        items: state.ItemReducer.items
    };
};

class BuyScreen3 extends Component {
    constructor(props){
        super(props);
        this.state ={
            category: "",
            detailCategory:"",
            status:"",
            season:"",
        }

    }
    componentWillReceiveProps(nextProps){
        console.log("!@#!$@#&(*!@&$(*!^@*#&!@*$&^@!&#^&*!@^#&!$");
        if(nextProps.items !== null){

            this.setState({
                items:nextProps.items,
            });
        }
    }
    componentWillMount(){
        AsyncStorage.getItem("ACCESS_TOKEN").then(token => {
            this.props.dispatch(ItemActionCreator.postItems(
                token,
                this.props.navigation.state.params.category,
                this.props.navigation.state.params.detailCategory,
                this.props.navigation.state.params.status,
                "2015"+this.props.navigation.state.params.season,
                1000000,
                0,
                1,
            ));
        });
        this.setState({
            category: this.props.navigation.state.params.category,
            detailCategory: this.props.navigation.state.params.detailCategory,
            status: this.props.navigation.state.params.status,
            season: this.props.navigation.state.params.season,
        });
    }
    render() {
        console.log("#########");
        console.log(this.state.items);
        console.log("#########");
        return (
            <Container style={{backgroundColor:'white'}}>
                <HeaderComponent title="default" left="" right="" />
                <Content contentContainerStyle={{flex: 1}}>
                    {

                    }

                    <Text>{this.state.category}</Text>
                    <Text>{this.state.detailCategory}</Text>
                    <Text>{this.state.status}</Text>
                    <Text>{this.state.season}</Text>
                </Content>
            </Container>
        )

    }

}
export default (BuyScreen3 = connect(mapStateToProps)(BuyScreen3));

