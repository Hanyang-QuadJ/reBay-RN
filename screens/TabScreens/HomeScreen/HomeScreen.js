import React, { Component } from 'react';
import * as ShuttleActionCreater from '../../../actionCreaters/ShuttleActionCreater';
import { connect } from 'react-redux';
import { Container, Text, Content, Header, Button } from 'native-base';
import Style from './Style';
import HeaderComponent from '../../../components/HeaderComponent/HeaderComponent'

const mapStateToProps = state => {
    return {
        shuttleTimetable: state.reducer.shuttleTimetable,
    };
};

class HomeScreen extends Component {
    constructor(props){
        super(props)

    }
    componentDidMount() {
        this.props.dispatch(ShuttleActionCreater.dispatchShuttleTimetable());
    }

    render() {
        return (
            <Container style={{flex: 1, backgroundColor: '#ddd'}}>
                <HeaderComponent title="rebay" left="" right="ios-basket" />
                <Content>
                    <Text>HaHa</Text>
                </Content>
            </Container>
        )

    }

}
export default (HomeScreen = connect(mapStateToProps)(HomeScreen));

