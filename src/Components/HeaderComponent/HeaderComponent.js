import React, {Component} from 'react';
import {View, Platform} from 'react-native';
import {Container, Header, Left, Body, Right, Button, Icon, Title, Text} from 'native-base';
import styles from './Style';

export default class HeaderComponent extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        if (this.props.searchBar === true) {
            return (
                <Header style={Platform.OS ==='ios' ? styles.headerContainer2 : styles.headerContainer2Android}>
                    <Left style={Platform.OS ==='ios'? null : {flex:1} }>
                        <Button transparent onPress={this.props.onPressLeft}>
                            {this.props.left === "" ? null : <Icon type="Ionicons" name={this.props.left}/>}
                        </Button>
                    </Left>
                    <Body style={Platform.OS ==='ios'? null : {flex:1, alignItems:'center'}}>
                    <Title style={Platform.OS ==='ios'? styles.headerText : [styles.headerText,{marginTop:15}]}> {this.props.title} </Title>
                    <View style={styles.searchBar}>

                    </View>
                    </Body>
                    <Right style={Platform.OS ==='ios'? null : {flex:1}}>
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
                    <Header style={Platform.OS ==='ios' ? styles.headerContainer : styles.headerContainerAndroid}>
                        <Left style={Platform.OS ==='ios'? null : {flex:1} }>
                            <Button transparent onPress={this.props.onPressLeft}>
                                {this.props.left === "" ? null : <Icon type="Ionicons" name={this.props.left}/>}
                            </Button>
                        </Left>
                        <Body style={Platform.OS ==='ios'? null : {flex:1, alignItems:'center'}}>
                        <Title style={Platform.OS ==='ios'? styles.headerText : [styles.headerText,{marginTop:15}]}> {this.props.title} </Title>
                        </Body>
                        <Right style={Platform.OS ==='ios'? null : {flex:1} }>
                            <Button transparent onPress={this.props.onPressRight}>
                                {this.props.right === "" ? null : <Icon type="Ionicons" name={this.props.right}/>}
                            </Button>
                        </Right>
                    </Header>

                )
            }



        }

}
