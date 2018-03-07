import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Slider } from 'react-native';
import {Container, Text, Content, Item, Input, Form, Button, Badge, Header, Footer, Title, Left, Right, List, ListItem,FooterTab} from 'native-base';
import HeaderComponent from '../../../Components/HeaderComponent/HeaderComponent'
import jsonData from '../../../Constants/data'
import  styles from './Style';

const mapStateToProps = state => {
    return {
    };
};

class BuyScreen2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedBrand:[],
            selectedCategory:0,
            selectedDetailCategory:0,
            category:jsonData.category,
            selectedItemStatus:0,
            item_status:jsonData.item_status,
            selectedSeason:0,
            season:jsonData.season,
            maxPrice:100000,

        };
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.brand !== null){

            this.setState({
                selectedBrand: nextProps.navigation.state.params.brandName
            });
        }
    }
    goBack(){
        this.props.navigation.goBack(null)
    }
    gotoBuyScreen3 () {
        this.props.navigation.navigate('BuyScreen3',{
            category:this.state.category[this.state.selectedCategory].name,
            detailCategory:this.state.category[this.state.selectedCategory].detailCategory[this.state.selectedDetailCategory].name,
            status:this.state.item_status[this.state.selectedItemStatus].name,
            season:this.state.season[this.state.selectedSeason].name,
        });
        console.log(this.state.category[this.state.selectedCategory].name);
        console.log(this.state.category[this.state.selectedCategory].detailCategory[this.state.selectedDetailCategory].name);


    };
    render() {
        return (
            <Container style={{backgroundColor:'white'}}>
                <HeaderComponent title="default" onPressLeft={this.goBack.bind(this)} left="ios-close" right="" />
                <Content>

                    {(this.props.navigation.state.params == null)?
                        (<Text>NoBrand</Text>):(<Text>{this.props.navigation.state.params.brandName}</Text>)
                    }
                    <Text>상위 카테고리</Text>
                    <View style={styles.row}>
                        {this.state.category.map((category, index) => (
                            <Button
                                style={(index===this.state.selectedCategory)?styles.checked:styles.notChecked}
                                key={index}
                                onPress={()=>{

                                    this.setState({
                                        selectedCategory: index
                                    })}}
                            >
                                <Text style={(index===this.state.selectedCategory)?null:styles.notText}>{category.name}</Text>
                            </Button>
                        ))}
                    </View>

                    <Text>하위 카테고리</Text>
                    <View style={styles.row}>
                        {
                            this.state.category[this.state.selectedCategory]===null?
                                (<Text>Empty</Text>)
                                :

                                (this.state.category[this.state.selectedCategory].detailCategory.map((category, index) => (
                                    <Button
                                        style={(index===this.state.selectedDetailCategory)?styles.checked:styles.notChecked}
                                        key={index}
                                        onPress={()=>{

                                            this.setState({
                                                selectedDetailCategory: index
                                            })}}
                                    >
                                        <Text style={(index===this.state.selectedDetailCategory)?null:styles.notText}>{category.name}</Text>
                                    </Button>
                                )))
                        }

                    </View>

                    <Text>상품상태</Text>

                    <View style={styles.row}>
                        {this.state.item_status.map((item_status, index) => (
                            <Button
                                style={(index===this.state.selectedItemStatus)?styles.checked:styles.notChecked}
                                key={index}
                                onPress={()=>{

                                    this.setState({
                                        selectedItemStatus: index
                                    })}}
                            >
                                <Text style={(index===this.state.selectedItemStatus)?null:styles.notText}>{item_status.name}</Text>
                            </Button>
                        ))}
                    </View>

                    <Text>시즌</Text>
                    <View style={styles.row}>
                        {this.state.season.map((season, index) => (
                            <Button
                                style={(index===this.state.selectedSeason?styles.checked:styles.notChecked)}
                                key={index}
                                onPress={()=>{
                                    this.setState({
                                        selectedSeason: index
                                    })}}
                            >
                                <Text style={(index===this.state.selectedSeason)?null:styles.notText}>{season.name}</Text>
                            </Button>
                        ))}
                    </View>
                </Content>
                <Text>{this.state.maxPrice/10000} 만원</Text>
                <Slider step={100000} minimumValue={100000} maximumValue={1000000} onValueChange={(value)=>{
                    this.setState({
                        maxPrice: value
                    })
                }}/>
                <Button onPress={this.gotoBuyScreen3.bind(this)}><Text>확인</Text></Button>
            </Container>
        )

    }

}
export default (BuyScreen2 = connect(mapStateToProps)(BuyScreen2));

