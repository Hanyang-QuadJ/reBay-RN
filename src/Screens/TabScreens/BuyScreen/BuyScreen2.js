import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
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
            selectedYear:0,
            year:jsonData.year,
            selectedSeason:0,
            season:jsonData.season,
            selectedFullBox:0,
            fullBox:jsonData.fullBox,
            selectedWarantee:0,
            warantee:jsonData.warantee,
            selectedDomestic:0,
            domestic:jsonData.domestic,
            selectedRefund:0,
            refund:jsonData.refund
        };
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.brand !== null){

            this.setState({
                selectedBrand: nextProps.navigation.state.params.brandName
            });
        }
    }
    checkIndex = () => {
        console.log(this.state.category[this.state.selectedCategory].name);
        console.log(this.state.category[this.state.selectedCategory].detailCategory[this.state.selectedDetailCategory].name);


    };
    render() {
        return (
            <Container style={{backgroundColor:'white'}}>
                <HeaderComponent title="default" left="" right="" />
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
                        {this.state.year.map((year, index) => (
                            <Button
                                style={(index===this.state.selectedYear?styles.checked:styles.notChecked)}
                                key={index}
                                onPress={()=>{
                                    this.setState({
                                        selectedYear: index
                                    })}}
                            >
                                <Text style={(index===this.state.selectedYear)?null:styles.notText}>{year.name}</Text>
                            </Button>
                        ))}
                    </View>
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
                    <Text>구성상품</Text>
                    <View style={styles.row}>
                        {this.state.fullBox.map((fullBox, index) => (
                            <Button
                                style={(index===this.state.selectedFullBox?styles.checked:styles.notChecked)}
                                key={index}
                                onPress={()=>{
                                    this.setState({
                                        selectedFullBox: index
                                    })}}
                            >
                                <Text style={(index===this.state.selectedFullBox)?null:styles.notText}>{fullBox.name}</Text>
                            </Button>
                        ))}
                    </View>
                    <Text>보증서</Text>
                    <View style={styles.row}>
                        {this.state.warantee.map((warantee, index) => (
                            <Button
                                style={(index===this.state.selectedWarantee?styles.checked:styles.notChecked)}
                                key={index}
                                onPress={()=>{
                                    this.setState({
                                        selectedWarantee: index
                                    })}}
                            >
                                <Text style={(index===this.state.selectedWarantee)?null:styles.notText}>{warantee.name}</Text>
                            </Button>
                        ))}
                    </View>
                    <Text>구매</Text>
                    <View style={styles.row}>
                        {this.state.domestic.map((domestic, index) => (
                            <Button
                                style={(index===this.state.selectedDomestic?styles.checked:styles.notChecked)}
                                key={index}
                                onPress={()=>{
                                    this.setState({
                                        selectedDomestic: index
                                    })}}
                            >
                                <Text style={(index===this.state.selectedDomestic)?null:styles.notText}>{domestic.name}</Text>
                            </Button>
                        ))}
                    </View>
                    <Text>환불</Text>
                    <View style={styles.row}>
                        {this.state.refund.map((refund, index) => (
                            <Button
                                style={(index===this.state.selectedRefund?styles.checked:styles.notChecked)}
                                key={index}
                                onPress={()=>{
                                    this.setState({
                                        selectedRefund: index
                                    })}}
                            >
                                <Text style={(index===this.state.selectedRefund)?null:styles.notText}>{refund.name}</Text>
                            </Button>
                        ))}
                    </View>


                </Content>
                <Button onPress={()=>this.checkIndex()}><Text>확인</Text></Button>
            </Container>
        )

    }

}
export default (BuyScreen2 = connect(mapStateToProps)(BuyScreen2));

