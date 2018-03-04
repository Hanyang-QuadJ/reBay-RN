import React, {Component} from 'react';
import { AppLoading, Asset} from 'expo';
import {AsyncStorage, Image, ActivityIndicator, View} from 'react-native';
import {connect} from 'react-redux';
import {Container, Text, Content, Spinner} from 'native-base';
import HeaderComponent from '../../Components/HeaderComponent/HeaderComponent'
import * as ItemActionCreator from '../../ActionCreators/ItemActionCreator'
import styles from './Style';
import {NavigationActions} from "react-navigation";

const mapStateToProps = state => {
    return {
        item: state.ItemReducer.item,
        item_id: state.ItemReducer.item_id,
        picture:state.ItemReducer.picture,
    };
};

class ItemScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item:[],
            picture:[]

        }

    }


    componentWillMount(){
        AsyncStorage.getItem("ACCESS_TOKEN").then(value => {this.props.dispatch(ItemActionCreator.getItem(value, this.props.item_id))
            .then(value2 =>
            {
                this.props.dispatch(ItemActionCreator.getItemPicture(value, this.props.item_id)).then(value3 => {
                    console.log("picture array");
                    console.log(value3)
                })
            }
        )});

    }



    componentWillReceiveProps(nextProps){
        if(nextProps.item !== null){
            console.log(nextProps.item);
            this.setState({item: nextProps.item})

        }
    }

    componentDidMount() {
    }

    closeModal = () => {
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

    componentDidUpdate() {

    }

    render() {
        const { item, picture } = this.props;
        console.log(picture);
        if(item != null && picture != null){
            return (

                <Container style={{backgroundColor: 'white'}}>
                    <HeaderComponent title="default" left="" right="ios-close" onPressRight={() => this.closeModal()}/>
                    <Content contentContainerStyle={{flex: 1}}>
                        <Text>{item.username}</Text>
                        <Image style={{width:40, height:40}} source={{uri:item.profile_img}}/>
                        <Text>{item.item_name}</Text>

                        {this.props.picture.map((picture, index) => {
                                return (
                                    <View key={picture.id}>
                                        <Image style={{width:200, height:200}} source={{uri:picture.image_url}} />
                                    </View>
                                )
                            })
                        }


                        <Text>{item.price}</Text>
                    </Content>
                </Container>
            )
        }
        else{
            return(
                <Spinner />
            )
        }
    }

}

export default (ItemScreen = connect(mapStateToProps)(ItemScreen));

