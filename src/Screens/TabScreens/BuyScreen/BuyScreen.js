import React, {Component} from 'react';
import {connect} from 'react-redux';
import {AsyncStorage, View, FlatList} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {Container, Text, Content, Item, Input, Form, Button, Badge, Header, Footer, Title, Left, Right, List, ListItem,FooterTab} from 'native-base';
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
        this.state = {
            searchBarInput: '',
            currentBrand:[]
        };
    }

    componentWillMount(){
        AsyncStorage.getItem("ACCESS_TOKEN").then(token => {
            this.props.dispatch(BrandActionCreator.getBrand(token));
        });

    }

    componentWillReceiveProps(nextProps){
        if(nextProps.brand != null){
            this.setState({
                currentBrand: nextProps.brand.brands
            });
        }
    }

    filterBySearchBar(text){
        const brands = [];
        if (this.props.brand != null) {
            this.props.brand.brands.forEach(function (val, index) {
                if (val.brand_name.indexOf(text) !== -1) {
                    brands.push(val);
                }
            })
        }
        this.setState({
            currentBrand: brands
        });
    }

    render() {
        console.log("BuyScreen");
        console.log(this.props.brand);
        console.log(this.state.text);
        return (
                <Container>
                    <HeaderComponent title="구매하기" left="" right="ios-basket"/>
                    <Text>브랜드 검색</Text>
                    <Item rounded style={styles.itemStyle}>
                        <Input placeholder='Rounded Textbox' onChangeText={(text) => this.filterBySearchBar(text)}/>
                    </Item>
                    <FlatList
                        data={this.state.currentBrand}
                        renderItem={({item}) => <Text>{item.brand_name}</Text>}
                    />
                    <Footer>
                            <Button full>
                                <Text>선택하기</Text>
                            </Button>
                    </Footer>

                </Container>
        )
    }
}

export default (BuyScreen = connect(mapStateToProps)(BuyScreen));
