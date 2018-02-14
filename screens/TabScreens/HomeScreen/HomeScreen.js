import React, {Component} from 'react';
import { FlatList,View } from 'react-native'
import * as ShuttleActionCreator from '../../../ActionCreators/ShuttleActionCreator';
import {connect} from 'react-redux';
import {Container, Text, Content, Header, Button, Spinner, List, ListItem, Body} from 'native-base';
import Style from './Style';
import HeaderComponent from '../../../components/HeaderComponent/HeaderComponent'

const mapStateToProps = state => {
    return {
        shuttleTimetable: state.reducer.shuttleTimetable,
        loading:state.reducer.loading
    };
};


class HomeScreen extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            refreshing:false,
        }

    }

    componentDidMount() {
        this.props.dispatch(ShuttleActionCreator.dispatchShuttleTimetable())
    }
    renderItem({ item } ){
        return (
            <ListItem style={{ marginLeft: 0 }}>
                <Body>
                <Text>{item.time}</Text>
                </Body>
            </ListItem>
            )
    }
    renderHeader = () => {
        return (
            <Text>Header</Text>

        )

    };
    pullToRefresh = () => {
        console.log("refreshed");
        this.setState({refreshing:true})
        // this.props.dispatch(ShuttleActionCreator.dispatchShuttleTimetable())
    };

    render() {
        return (
            <Container>
                <HeaderComponent title="rebay" left="" right="ios-basket"/>
                <View>
                    {this.props.loading === true ?
                        <Spinner /> :
                        <FlatList
                            data={this.props.shuttleTimetable}
                            renderItem={this.renderItem}
                            keyExtractor={item => item.time}
                            ListHeaderComponent={this.renderHeader}
                            refreshing={this.state.refreshing}
                            onRefresh={this.pullToRefresh}
                        />
                    }
                </View>
            </Container>
        )

    }

}

export default (HomeScreen = connect(mapStateToProps)(HomeScreen));

