import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextInput, Text, View } from 'react-native';
import { Icon } from 'native-base'
import  styles from './Style';

const mapStateToProps = state => {
    return {
    };
};

class InputComponent extends Component {
    constructor(props){
        super(props);
        this.state = {

        }

    }

    render() {
        return (
            <View>
                <View style={styles.container}>
                    <View style={styles.icon}>
                        <Icon type={this.props.iconType} size={this.props.iconSize} name={this.props.icon}/>
                    </View>
                    <View style={styles.input}>
                        <TextInput placeholder={this.props.placeholder} />
                    </View>
                </View>
            </View>
        )
    }

}
export default (InputComponent = connect(mapStateToProps)(InputComponent));