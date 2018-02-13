import React, { Component } from 'react';
import * as ShuttleActionCreater from '../../../actionCreaters/ShuttleActionCreater';
import { connect } from 'react-redux';
import { Container, Text, Content } from 'native-base';
import HeaderComponent from '../../../components/HeaderComponent'

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
                <Content>
                    <HeaderComponent title="rebay" left="" right="ios-basket" />
                    <Text>Home Screen</Text>
                </Content>
            </Container>
        )

    }

}
export default (HomeScreen = connect(mapStateToProps)(HomeScreen));

