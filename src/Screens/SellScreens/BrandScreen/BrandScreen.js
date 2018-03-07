import React, { Component } from 'react';
import {View, TouchableOpacity, FlatList, AsyncStorage, InteractionManager} from 'react-native'
import { connect } from 'react-redux';
import { Container, Text, Content, Button, Item, Input } from 'native-base';
import HeaderComponent from '../../../Components/HeaderComponent/HeaderComponent'
import  styles from './Style';
import * as BrandActionCreator from "../../../ActionCreators/BrandActionCreator";
import FooterButtonComponent from '../../../Components/FooterButtonComponent/FooterButtonComponent';

const mapStateToProps = state => {
    return {
        brand:state.BrandReducer.brand

    };
};

class BrandScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentBrand:[]
        };

    }
    componentWillMount(){
        InteractionManager.runAfterInteractions(() => {
            AsyncStorage.getItem("ACCESS_TOKEN").then(token => {
                this.props.dispatch(BrandActionCreator.getBrand(token));
            });
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

    _keyExtractor = (item, index) => item.id;


    _onPressItem = (item) => {


    };

    _renderItem = ({item}) => (
        <TouchableOpacity
            id={item.id}
            onPress={() => {
                this.props.navigation.navigate('Filter', {
                    brandID: item.id,
                    brandName: item.brand_name,
                    base64:this.props.navigation.state.params.base64
                })
            }}><Text>{item.brand_name}</Text>
        </TouchableOpacity>
    );





    render() {
        const base64 = this.props.navigation.state.params.base64;

        return (
            <Container style={{backgroundColor:'white'}}>
                <HeaderComponent title="브랜드" left="" right="" />
                <Content contentContainerStyle={{flex: 1}}>
                    <Item rounded style={styles.itemStyle}>
                        <Input placeholder='Rounded Textbox' onChangeText={(text) => this.filterBySearchBar(text)}/>
                    </Item>
                    <FlatList
                        keyExtractor={this._keyExtractor}
                        data={this.state.currentBrand}
                        renderItem={this._renderItem}
                    />
                </Content>
                <FooterButtonComponent leftText="임시저장" rightText="다음으로"/>
            </Container>
        )

    }

}
export default (BrandScreen = connect(mapStateToProps)(BrandScreen));

