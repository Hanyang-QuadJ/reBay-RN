import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
import  styles  from './Style';
import {connect} from "react-redux";
const mapStateToProps = state => {
    return {
    };
};
class ButtonComponent extends Component {


    constructor(props){
        super(props);
    }
    render() {
        return (
            <Button full rounded onPress={this.props.onPress}
                    style={{
                        backgroundColor: this.props.buttonColor,
                        height: 45,
                        marginTop: 20,
                        marginLeft: 30,
                        marginRight: 30,
                        borderColor: "transparent",
                        borderWidth: 0,
                        borderRadius: 7,
                    }}>
                <Text style={{color:this.props.textColor}}>{this.props.text}</Text>
            </Button>



        );
    }
}

export default (ButtonComponent = connect(mapStateToProps)(ButtonComponent));
