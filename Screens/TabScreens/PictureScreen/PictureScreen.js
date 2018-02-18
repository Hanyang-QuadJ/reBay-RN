import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-native';
import { Container, Text, Content } from 'native-base';
import { NavigationActions } from 'react-navigation';
import HeaderComponent from '../../../Components/HeaderComponent/HeaderComponent'
import  styles from './Style';

const mapStateToProps = state => {
    return {
    };
};

class PictureScreen extends Component {
    static navigationOptions = (navigation) => {
        return ({
                mode:'modal'
            }

        )

    };

    constructor(props){
        super(props);


    }
    closeModal = () => {
        this.props.navigation.goBack(null);

    };

    render() {
        return (

                <Container style={{backgroundColor:'white'}}>
                    <HeaderComponent title="Picture" left="ios-arrow-back" right="" onPressLeft={()=>this.closeModal()} />
                    <Content contentContainerStyle={{flex: 1}}>
                        <Text>Picture Screen</Text>
                    </Content>

                </Container>



        )

    }

}
export default (PictureScreen = connect(mapStateToProps)(PictureScreen));

