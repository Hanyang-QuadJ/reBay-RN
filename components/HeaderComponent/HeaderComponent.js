import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import  styles  from './Style';
export default class HeaderComponent extends Component {

    constructor(props){
        super(props);
    }
    render() {
        return (
                <Header style={styles.headerContainer}>
                    <Left>
                        <Button transparent>
                            {this.props.left === "" ? null : <Icon type="Ionicons" name={this.props.left}/>}
                        </Button>
                    </Left>
                    <Body>
                        <Title style={styles.headerText}> {this.props.title} </Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={this.props.onPressRight}>
                            {this.props.right === "" ? null : <Icon type="Ionicons" name={this.props.right}/>}
                        </Button>
                    </Right>
                </Header>
        );
    }
}
