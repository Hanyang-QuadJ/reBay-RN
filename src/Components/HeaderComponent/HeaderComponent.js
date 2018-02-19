import React, {Component} from 'react';
import {View} from 'react-native';
import {Container, Header, Left, Body, Right, Button, Icon, Title, Text} from 'native-base';
import styles from './Style';

export default class HeaderComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.searchBar === true) {
            return (
                <Header style={styles.headerContainer2}>
                    <Left>
                        <Button transparent onPress={this.props.onPressLeft}>
                            {this.props.left === "" ? null : <Icon type="Ionicons" name={this.props.left}/>}
                        </Button>
                    </Left>
                    <Body>
                    <Title style={styles.headerText}> {this.props.title} </Title>
                    <View style={styles.searchBar}>

                    </View>
                    </Body>
                    <Right>
                        <Button transparent onPress={this.props.onPressRight}>
                            {this.props.right === "" ? null : <Icon type="Ionicons" name={this.props.right}/>}
                        </Button>
                    </Right>
                </Header>
            )
        }


        else
            {
                return (
                    <Header style={styles.headerContainer}>
                        <Left>
                            <Button transparent onPress={this.props.onPressLeft}>
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

                )
            }



        }

}
