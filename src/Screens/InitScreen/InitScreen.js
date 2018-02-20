import React, { Component } from 'react';
import { connect } from 'react-redux';
import {AsyncStorage, View} from 'react-native';
import { Container, Text, Content } from 'native-base';
import HeaderComponent from '../../Components/HeaderComponent/HeaderComponent'
import  styles from './Style';
import {NavigationActions} from "react-navigation";

const mapStateToProps = state => {
    return {
    };
};

class InitScreen extends Component {
    constructor(props){
        super(props);
        this.state = {

        }

    }
    goToHome = () => {
        this.props.navigation.dispatch(
            NavigationActions.reset({
                index: 0,
                key:null,
                actions: [
                    NavigationActions.navigate({ routeName: 'Home' })
                ]
            })
        )
    };
    goToIntro = () => {
        this.props.navigation.dispatch(
            NavigationActions.reset({
                index: 0,
                key:null,
                actions: [
                    NavigationActions.navigate({ routeName: 'Auth' })
                ]
            })
        )

    };

    getToken = () => {
        AsyncStorage.getItem("ACCESS_TOKEN").then(value => {
            if(value === null || value === undefined || value === ""){
                this.goToIntro();
            }
            else{
                this.goToHome();
            }
        })

    };
    componentWillMount(){
        this.getToken();
    }

    render() {
        return (
            <View>
                
            </View>

        )

    }

}
export default (InitScreen = connect(mapStateToProps)(InitScreen));

