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
    // static navigationOptions = ( navigation ) => {
    //     return  {
    //         tabBarOnPress: ({ scene, jumpToIndex}) => {
    //             if (!scene.focused) {
    //                 NavigationActions.navigate("Brand");
    //
    //             } else {
    //             }
    //         },
    //     };
    // };
    constructor(props){
        super(props);
        this.state = {
            modalVisible: true,
        }

    }
    closeModal = () => {
        this.setState({modalVisible:false})

    };

    render() {
        return (
            <Modal
                visible={this.state.modalVisible}
                animationType={'slide'}
            >
                <Container style={{backgroundColor:'white'}}>
                    <HeaderComponent title="default" left="" right="" onPressRight={() => this.closeModal()} />
                    <Content contentContainerStyle={{flex: 1}}>
                        <Text>Default Screen</Text>
                    </Content>

                </Container>
            </Modal>



        )

    }

}
export default (PictureScreen = connect(mapStateToProps)(PictureScreen));

