import React, {Component} from 'react';
import {Container, Header, Left, Body, Right, Button, Icon, Title, ListItem} from 'native-base';
import styles from './Style';
import {connect} from "react-redux";
import Swiper from 'react-native-swiper';
import * as ScrollToTopCreator from '../../ActionCreators/ScrollToTopCreator';
import {Constants} from 'expo'


import {TabViewAnimated, TabBar} from 'react-native-tab-view';
import {
    Animated,
    Dimensions,
    FlatList,
    View,
    Text,
    Image,
    TouchableWithoutFeedback,
    RefreshControl,
    ScrollView,
    Platform,
    InteractionManager
} from "react-native";
import * as ScrollToTopActionCreator from '../../ActionCreators/ScrollToTopCreator';
import * as DefaultActionCreator from '../../ActionCreators/DefaultActionCreator';
import * as commonStyle from '../../Constants/commonStyle';

const HEADER_HEIGHT = 170;
const COLLAPSED_HEIGHT = 50;
const SCROLLABLE_HEIGHT = HEADER_HEIGHT - COLLAPSED_HEIGHT;
const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView);


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
            index: 0,
            refreshing: false,
            scroll: new Animated.Value(-170, {useNativeDriver: true}),
            scroll2: new Animated.Value(170, {useNativeDriver: true}),
            top: false,

            routes: [
                {key: 'first', title: '남성의류'},
                {key: 'second', title: '여성의류'},
                {key: 'third', title: '신발'},
                {key: 'fourth', title: '가발'},
                {key: 'fifth', title: '목걸이'},
                {key: 'sixth', title: '팔찌'},
                {key: 'seventh', title: '발찌'},
            ],
        }
    }


    componentWillMount() {
        InteractionManager.runAfterInteractions(() => {
            this.props.dispatch(DefaultActionCreator.defaultFetch());
            this.props.navigation.setParams({
                scrollToTop: this.scrollToTop,
            });
        });

    }


    scrollToTop = () => {
        this.scrollView.getNode().scrollTo({
            y: -170,
            animated: true,
        });        // this.refs.scrollView.scrollTo({x: 0, y: 0, animated: true})
    };


    componentDidMount() {
        if (Platform.OS === 'ios') {
            this.scrollView.getNode().scrollTo({animated: false, y: -170});
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
    _renderIcon = ({route}) => (
        <Image style={{width: 20, height: 20,}}
               source={require('../../Assets/dress.png')}
        />
    );

    _handleIndexChange = index => this.setState({index});

    _renderHeader = props => {
        let translateY;
        if (Platform.OS === 'ios') {
            translateY = this.state.scroll.interpolate({
                inputRange: [-170, SCROLLABLE_HEIGHT],
                outputRange: [0, -SCROLLABLE_HEIGHT],
                extrapolate: 'clamp',
            });
        }
        else {
            translateY = this.state.scroll.interpolate({
                inputRange: [0.001, SCROLLABLE_HEIGHT],
                outputRange: [0.001, -SCROLLABLE_HEIGHT],
                extrapolate: 'clamp',
            });
        }

        return (
            <Animated.View style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1,
                transform: [{translateY}]
            }}>
                <View style={{
                    height: 170,
                }}>
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


                    <TabBar {...props} scrollEnabled={true}
                            renderIcon={this._renderIcon}
                            tabStyle={{width: 60, paddingHorizontal: 2}}
                            indicatorStyle={{backgroundColor: commonStyle.PRIMARY_COLOR,}}
                            useNativeDriver={true}
                            labelStyle={{color: commonStyle.PRIMARY_COLOR, marginTop: 2, fontSize: 10, marginBottom: 1}}
                            style={{backgroundColor: "white", elevation: 0, shadowOpacity: 0,}}/>

                </View>

            </Animated.View>
        )
    };

    pullToRefresh = () => {
        this.setState({refreshing: true})
    };

    _renderScene = ({route}) => {
        const translateY = this.state.scroll.interpolate({
            inputRange: [170, 190],
            outputRange: [0, -170],
            extrapolate: 'clamp',
        });
        switch (route.key) {
            case 'first':
                return <View>
                    <Animated.View style={{

                        transform: [{translateY}]
                    }}>
                        <View style={{
                            zIndex: -3,
                            backgroundColor: "green",
                        }}>

                        </View>
                    </Animated.View>

                    <AnimatedScrollView scrollEventThrottle={1}
                                        contentContainerStyle={Platform.OS === 'ios' ? null : {paddingTop: 170}}
                                        contentInset={{top: 170}}
                                        refreshControl={
                                            <RefreshControl
                                                refreshing={this.state.refreshing}
                                                progressViewOffset={170}
                                                onRefresh={() => this.pullToRefresh()}/>

                                        }
                                        ref={c => (this.scrollView = c)}
                                        automaticallyAdjustContentInsets={false}
                                        onScroll={Animated.event(
                                            [{nativeEvent: {contentOffset: {y: this.state.scroll}}}],
                                            {useNativeDriver: true}
                                        )}

                    >
                        {this.props.data !== null ?
                            this.props.data.map((data, index) => {
                                return (
                                    <View key={data.time}>
                                        <Text> {data.time} </Text>
                                    </View>
                                )
                            })
                            : null}
                    </AnimatedScrollView>


                </View>;
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
