import React, {Component} from 'react';
import {AsyncStorage} from 'react-native';
import {connect} from 'react-redux';
import {Container, Text, Content} from 'native-base';
import HeaderComponent from '../../Components/HeaderComponent/HeaderComponent'
import * as ItemActionCreator from '../../ActionCreators/ItemActionCreator'
import styles from './Style';
import {NavigationActions} from "react-navigation";

const mapStateToProps = state => {
    return {
        item: state.ItemReducer.item,
        item_id: state.ItemReducer.item_id,

    };
};

class ItemScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item:null

        }

    }


    componentWillMount(){
        AsyncStorage.getItem("ACCESS_TOKEN").then(value => {this.props.dispatch(ItemActionCreator.getItem(value, 67)).then(value2 => {
            console.log("하하");
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

        return (

            <Container style={{backgroundColor: 'white'}}>
                <HeaderComponent title="default" left="" right="ios-close" onPressRight={() => this.closeModal()}/>
                <Content contentContainerStyle={{flex: 1}}>
                    <Text>Item Screen</Text>
                    {/*<Text>{this.state.item.username}</Text>*/}
                </Content>
            </Container>
        )

    }

}

export default (ItemScreen = connect(mapStateToProps)(ItemScreen));

