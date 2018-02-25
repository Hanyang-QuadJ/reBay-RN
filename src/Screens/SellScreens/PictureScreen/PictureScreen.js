import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, AsyncStorage } from 'react-native';
import { Container, Text, Content, Button } from 'native-base';
import { NavigationActions } from 'react-navigation';
import * as BrandActionCreator from '../../../ActionCreators/BrandActionCreator'
import HeaderComponent from '../../../Components/HeaderComponent/HeaderComponent'
import  styles from './Style';
import * as DefaultActionCreator from "../../../ActionCreators/DefaultActionCreator";

const mapStateToProps = state => {
    return {
        brand:state.BrandReducer.brand
    };
};

class PictureScreen extends Component {



    constructor(props){
        super(props);


    }
    closeModal = () => {
        this.props.navigation.goBack(null);

    };
    componentWillMount(){
        AsyncStorage.getItem("ACCESS_TOKEN").then(token => {
            this.props.dispatch(BrandActionCreator.getBrand(token));
        });
    }

	goToBrand = () => {
	};

    render() {
        console.log("---brand----");
        console.log(this.props.brand);
        return (
                <Container style={{backgroundColor:'white'}}>
                    <HeaderComponent title="판매하기" left="ios-close" right="" onPressLeft={()=>this.closeModal()} />
                    <Content contentContainerStyle={{flex: 1}}>
                        <Text>Picture Screen</Text>
						<Button onPress={() => this.goToBrand()}>
							<Text>Button</Text>
						</Button>
                    </Content>

                </Container>

        )

    }

}
export default (PictureScreen = connect(mapStateToProps)(PictureScreen));
