import React, {Component} from 'react';
import {AsyncStorage} from 'react-native';
import {connect} from 'react-redux';
import {Container, Text, Content} from 'native-base';
import HeaderComponent from '../../Components/HeaderComponent/HeaderComponent'
import * as ItemActionCreator from '../../ActionCreators/ItemActionCreator'
import styles from './Style';

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

        }

    }


    componentWillMount(){
        AsyncStorage.getItem("ACCESS_TOKEN").then(value => {this.props.dispatch(ItemActionCreator.getItem(value, this.props.item_id)).then(
            console.log(this.props.item)
        )});
    }

    componentDidMount() {




    }

    componentDidUpdate() {

    }

    render() {
        // AsyncStorage.getItem("ACCESS_TOKEN").then(value => {
        //     this.props.dispatch(ItemActionCreator.getItem(value, this.state.item_id));
        // });
        return (

            <Container style={{backgroundColor: 'white'}}>
                <HeaderComponent title="default" left="" right=""/>
                <Content contentContainerStyle={{flex: 1}}>
                    <Text>Item Screen</Text>
                </Content>
            </Container>
        )

    }

}

export default (ItemScreen = connect(mapStateToProps)(ItemScreen));

