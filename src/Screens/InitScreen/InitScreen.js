import React, { Component } from 'react';
import { connect } from 'react-redux';
import {AsyncStorage, View} from 'react-native';
import { AppLoading, Asset } from 'expo';
import { Container, Text, Content } from 'native-base';
import HeaderComponent from '../../Components/HeaderComponent/HeaderComponent'
import  styles from './Style';
import {NavigationActions} from "react-navigation";

const mapStateToProps = state => {
    return {
    };
};

function cacheImages (images) {
    return images.map(image => {
        if (typeof image === 'string') {
            return Image.prefetch(image);
        } else {
            return Asset.fromModule(image).downloadAsync();
        }
    });
}



class InitScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            appReady:false

        }

    }

    async _loadAssetsAsync() {
        const imageAssets = cacheImages([require('../../Assets/dress.png'),require('../../Assets/pic1.jpg'),
            require('../../Assets/pic2.jpg'),require('../../Assets/pic3.jpg')]);
        await Promise.all(...imageAssets);
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

    getToken = async () => {
        await this.setState({ appReady: true });
        AsyncStorage.getItem("ACCESS_TOKEN").then(value => {
            if(value === null || value === undefined || value === ""){
                this.goToIntro();
            }
            else{
                this.goToHome();
            }
        })

    };
    // componentDidMount(){
    //     this.getToken();
    // }

    render() {
        if (!this.state.appReady) {
            return (
                <AppLoading
                    startAsync={this._loadAssetsAsync}
                    onFinish={() => this.getToken()}
                />
            );
        }

        return (
            <View>
            </View>
        );
    }

}
export default (InitScreen = connect(mapStateToProps)(InitScreen));

