import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-native';
import { Container, Text, Content, Button } from 'native-base';
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

	goToBrand = () => {
		this.props.navigation.navigate('SignUp2');
	}

    render() {
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
