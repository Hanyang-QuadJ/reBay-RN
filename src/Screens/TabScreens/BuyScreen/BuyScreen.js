import React, {Component} from 'react';
import {connect} from 'react-redux';
import {AsyncStorage, View, FlatList} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {Container, Text, Content, Item, Input, Form, Button, Badge, Header, Footer, Title, Left, Right, List, ListItem} from 'native-base';
import HeaderComponent from '../../../Components/HeaderComponent/HeaderComponent'
import styles from './Style';
import * as BuyActionCreator from '../../../ActionCreators/BuyActionCreator';
import * as BrandActionCreator from "../../../ActionCreators/BrandActionCreator";

const mapStateToProps = state => {
    return {
        brand:state.BrandReducer.brand
    };
};

class BuyScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {text: '',brandData:[]};
    }

    componentWillMount(){
        AsyncStorage.getItem("ACCESS_TOKEN").then(token => {
            this.props.dispatch(BrandActionCreator.getBrand(token));
        });
    }

    componentDidMount() {

    }
    filterBrandwithSearch() {
        const brands = [];
        if (this.props.brand != null) {
            if(this.state.text!= null && this.state.text.length >0) {
                const text = this.state.text;
                this.props.brand.brands.forEach(function (val, index) {
                    if (val.brand_name.indexOf(text) !== -1) {
                        brands.push(val);
                    }
                })
            }
            else {
                this.props.brand.brands.forEach(function (val, index) {
                        brands.push(val);
                })
            }
        }
        return (
            <FlatList
                data={brands}
                renderItem={({item}) => <Text>{item.brand_name}</Text>}
            />
        )
    }
    render() {

        console.log("BuyScreen");
        console.log(this.props.brand);
        console.log(this.state.text);



        return (
                <View>
                    <HeaderComponent title="구매하기" left="" right="ios-basket"/>
                    <Text>브랜드 검색</Text>
                    <Item rounded style={styles.itemStyle}>
                        <Input placeholder='Rounded Textbox' onChangeText={(text) => this.setState({text})}/>
                    </Item>
                    {
                        this.filterBrandwithSearch()
                    }
                </View>



        )
    }

}

export default (BuyScreen = connect(mapStateToProps)(BuyScreen));
