import React, { Component } from 'react';
import { connect } from 'react-redux';

import {Container, Text, Content, Item, Input, Form, Button, Badge, Header, Footer, Title, Left, Right, List, ListItem,FooterTab} from 'native-base';
import HeaderComponent from '../../../Components/HeaderComponent/HeaderComponent'
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
            category:[
                {
                    name: "남성의류",
                    detailCategory:[
                        {
                            name: "남성상의",
                            clicked: true,
                        },
                        {
                            name: "남성하의",
                            clicked: false,
                        },
                        {
                            name: "남성속옷",
                            clicked: false,
                        },
                        {
                            name: "남성신발",
                            clicked: false,
                        },
                    ],
                    clicked: true,
                },
                {
                    name: "여성의류",
                    detailCategory:[
                        {
                            name: "여성상의",
                            clicked: false,
                        },
                        {
                            name: "여성하의",
                            clicked: false,
                        },
                        {
                            name: "여성속옷",
                            clicked: false,
                        },
                        {
                            name: "여성신발",
                            clicked: false,
                        },
                    ],
                    clicked: false,
                },
                {
                    name: "아동의류",
                    detailCategory:[
                        {
                            name: "아동상의",
                            clicked: false,
                        },
                        {
                            name: "아동하의",
                            clicked: false,
                        },
                        {
                            name: "아동속옷",
                            clicked: false,
                        },
                        {
                            name: "아동신발",
                            clicked: false,
                        },
                    ],
                    clicked: false,
                },
            ]
        };
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.brand != null){

            this.setState({
                selectedBrand: nextProps.navigation.state.params.brandName
            });
        }
    }
    checkIndex = () => {
        console.log(this.state.category[this.state.selectedCategory]);

    };
    render() {
        return (
            <Container style={{backgroundColor:'white'}}>
                <HeaderComponent title="default" left="" right="" />
                <Content contentContainerStyle={{flex: 1}}>
                    {(this.props.navigation.state.params == null)?
                        (<Text>NoBrand</Text>):(<Text>{this.props.navigation.state.params.brandName}</Text>)
                    }
                    <Text>상위 카테고리</Text>
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
                    <Text>하위 카테고리</Text>
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
                </Content>
                <Button onPress={()=>this.checkIndex()}><Text>확인</Text></Button>
            </Container>
        )

    }

}
export default (BuyScreen2 = connect(mapStateToProps)(BuyScreen2));

