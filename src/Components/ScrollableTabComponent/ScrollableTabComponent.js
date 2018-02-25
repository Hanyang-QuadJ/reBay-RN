import React, {Component} from 'react';
import {Container, Header, Left, Body, Right, Button, Icon, Title, ListItem} from 'native-base';
import styles from './Style';
import {connect} from "react-redux";
import Swiper from 'react-native-swiper';

import {TabViewAnimated, TabBar } from 'react-native-tab-view';
import {Animated, Dimensions, FlatList, View, Text, Image, TouchableWithoutFeedback} from "react-native";
import * as ScrollToTopActionCreator from '../../ActionCreators/ScrollToTopCreator';
import * as DefaultActionCreator from '../../ActionCreators/DefaultActionCreator';
import * as commonStyle from '../../Constants/commonStyle';


const mapStateToProps = state => {
    return {
        top: state.ScrollToTopReducer.top,
        data: state.DefaultReducer.data,
    };
};

const initialLayout = {
    height: 0,
    width: Dimensions.get('window').width,
};

class ScrollableTabComponent extends Component {


    constructor(props) {
        super(props);
        this.state = {
            index:0,
            refreshing: false,
            routes: [
                {key: 'first', title: '1'},
                {key: 'second', title: '2'},
                {key: 'third', title: '3'},
                {key: 'fourth', title: '4'},
                {key: 'fifth', title: '5'},
                {key: 'sixth', title: '6'},
                {key: 'seventh', title: '7'},
            ],
        }
    }

    componentWillMount() {
        this.props.dispatch(DefaultActionCreator.defaultFetch());


    }

    topReset() {
        this.props.dispatch(ScrollToTopActionCreator.topReset());

    }

    scrollToTop = () => {
        // Scroll to top, in this case I am using FlatList
        return Promise.resolve(this.flatListRef.scrollToOffset({offset: 0, animated: true}));
    };

    componentDidUpdate() {
        if (this.props.top === true) {
            this.scrollToTop().then(this.topReset());
        }
    }

    renderItem = ({item}) => {
        return (
            <ListItem style={{marginLeft: 0}}>
                <Body>
                <Text>{item.time}</Text>
                </Body>
            </ListItem>
        )
    };

    renderHeader = () => {
        return (
            <Swiper style={styles.wrapper} showsButtons={false}>
                <View style={styles.slide1}>
                    <Image style={styles.image}
                           source={require('../../Assets/pic1.jpg')}
                    /></View>
                <View style={styles.slide2}>
                    <Image style={styles.image}
                           source={require('../../Assets/pic2.jpg')}
                    />
                </View>
                <View style={styles.slide3}>
                    <Image style={styles.image}
                           source={require('../../Assets/pic3.jpg')}
                    />
                </View>
            </Swiper>

        )

    };

    _handleIndexChange = index => this.setState({index});

    _renderHeader = props => {
        return (
            <View>

                <TabBar {...props} scrollEnabled={true}
                        tabStyle={{width:60}}
                        indicatorStyle={{backgroundColor:commonStyle.PRIMARY_COLOR}}
                        labelStyle={{ color:commonStyle.PRIMARY_COLOR}}
                        style={{backgroundColor:"white"}} />

            </View>
        )
    };

    pullToRefresh = () => {
        this.setState({refreshing: true})
        // this.props.dispatch(ShuttleActionCreator.dispatchShuttleTimetable())
    };

    _renderScene = ({route}) => {
        switch (route.key) {
            case 'first':


                return <FlatList
                    data={this.props.data}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.time}
                    ref={(ref) => {
                        this.flatListRef = ref;
                    }}

                    // ListHeaderComponent={this.renderHeader}
                    refreshing={this.state.refreshing}
                    onRefresh={this.pullToRefresh}
                />;
            case 'second':
                return <View style={{backgroundColor: '#673ab7', flex: 1}}/>;
            case 'third':
                return <View style={{backgroundColor: '#b74971', flex: 1}}/>;

            case 'fourth':
                return <View style={{backgroundColor: '#252525', flex: 1}}/>;

            case 'fifth':
                return <View style={{backgroundColor: '#b7611b', flex: 1}}/>;

            case 'sixth':
                return <View style={{backgroundColor: '#80b7b0', flex: 1}}/>;

            case  'seventh':
                return <View style={{backgroundColor: '#b7b22b', flex: 1}}/>;

            default:
                return null;
        }
    };

    render() {
        return (
            <TabViewAnimated
                style={styles.container}
                navigationState={this.state}
                renderScene={this._renderScene}
                renderHeader={this._renderHeader}
                onIndexChange={this._handleIndexChange}
                initialLayout={initialLayout}
            />
        );
    }
}

export default (ScrollableTabComponent = connect(mapStateToProps)(ScrollableTabComponent));
