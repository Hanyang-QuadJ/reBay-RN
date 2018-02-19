import React, {Component} from 'react';
import { FlatList,View, AsyncStorage } from 'react-native'
import * as ShuttleActionCreator from '../../../ActionCreators/ShuttleActionCreator';
import * as ScrollToTopActionCreator from '../../../ActionCreators/ScrollToTopCreator';
import * as LoginActionCreator from '../../../ActionCreators/LoginActionCreator';
import {connect} from 'react-redux';
import {Container, Text, Content, Header, Button, Spinner, List, ListItem, Body} from 'native-base';
import Style from './Style';
import HeaderComponent from '../../../Components/HeaderComponent/HeaderComponent'
import ScrollToTopReducer from "../../../Reducers/ScrollToTopReducer";



const mapStateToProps = state => {
    return {
        shuttleTimetable: state.ShuttleReducer.shuttleTimetable,
        loading:state.ShuttleReducer.loading,
        token:state.LoginReducer.token,
        top:state.ScrollToTopReducer.top,
    };
};


class HomeScreen extends Component {

    componentWillMount() {

    }
    topReset () {
        this.props.dispatch(ScrollToTopActionCreator.topReset());

    }

    scrollToTop = () => {
        // Scroll to top, in this case I am using FlatList
            return Promise.resolve(this.flatListRef.scrollToOffset({ offset: 0, animated: true }));
    };

    constructor(props) {
        super(props);

        this.state = {
            refreshing:false,
        }

    }
    getToken = ()  => {
        try {
            AsyncStorage.getItem("ACCESS TOKEN").then((value) => console.log(value));

        } catch (error) {
            console.log(error)
        }

    };

    componentDidMount() {
        this.props.dispatch(ShuttleActionCreator.dispatchShuttleTimetable());
        this.getToken();
    }

    componentDidUpdate(){
        console.log(this.props.top);
        if(this.props.top === true){
            this.scrollToTop().then(this.topReset());
        }
    }
    renderItem= ({ item } ) => {
        return (
            <ListItem style={{ marginLeft: 0 }}>
                <Body>
                <Text>{item.time}</Text>
                </Body>
            </ListItem>
            )
    };
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
        console.log(this.props);


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
                            ref={(ref) => { this.flatListRef = ref; }}
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

