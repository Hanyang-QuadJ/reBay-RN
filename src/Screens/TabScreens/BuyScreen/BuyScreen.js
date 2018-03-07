import React, {Component} from 'react';
import {connect} from 'react-redux';
import {AsyncStorage, View, FlatList, TouchableOpacity, ActivityIndicator, InteractionManager} from 'react-native';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {
    Container,
    Text,
    Content,
    Item,
    Input,
    Form,
    Button,
    Badge,
    Header,
    Footer,
    Title,
    Left,
    Right,
    List,
    ListItem,
    FooterTab
} from 'native-base';
import HeaderComponent from '../../../Components/HeaderComponent/HeaderComponent'
import styles from './Style';
import * as BrandActionCreator from "../../../ActionCreators/BrandActionCreator";

const mapStateToProps = state => {
    return {
        brand: state.BrandReducer.brand
    };
};

class BuyScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        InteractionManager.runAfterInteractions(()=>{
            AsyncStorage.getItem("ACCESS_TOKEN").then(token => {
                this.props.dispatch(BrandActionCreator.getBrand(token));
            });
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.brand != null) {
            this.setState({
                currentBrand: nextProps.brand.brands
            });
        }
    }

    closeModal = () => {
        this.props.navigation.goBack(null);

    };

    filterBySearchBar(text) {
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
        // console.log("BuyScreen");
        // console.log(this.props.brand);
        // console.log(this.state.text);
        return (
            <Container>
                <HeaderComponent title="구매하기" left="" right=""/>
                {
                    (this.state.currentBrand == null) ?
                        (<Content><ActivityIndicator
                            size="large"
                            color="#0000ff"/></Content>)
                        :
                        (
                            <Content>
                                <Text>브랜드 검색</Text>
                                <Item rounded style={styles.itemStyle}>
                                    <Input placeholder='Rounded Textbox'
                                           onChangeText={(text) => this.filterBySearchBar(text)}/>
                                </Item>
                                <FlatList
                                    keyExtractor={item => item.id}
                                    data={this.state.currentBrand}
                                    renderItem={({item}) => <TouchableOpacity
                                        onPress={() => this.props.navigation.navigate('BuyStack', {
                                            brandID: item.id,
                                            brandName: item.brand_name
                                        })}><Text>{item.brand_name}</Text></TouchableOpacity>}
                                />
                                <Footer>
                                    <Button full>
                                        <Text>선택하기</Text>
                                    </Button>
                                </Footer>
                            </Content>
                        )
                }
            </Container>


        )
    }
}

export default (BuyScreen = connect(mapStateToProps)(BuyScreen));
