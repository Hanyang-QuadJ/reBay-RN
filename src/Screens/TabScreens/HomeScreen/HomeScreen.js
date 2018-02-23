import React, {Component} from 'react';
import {FlatList, View, AsyncStorage, Image, Dimensions, ScrollView, Animated} from 'react-native'
import * as ScrollToTopActionCreator from '../../../ActionCreators/ScrollToTopCreator';
import * as DefaultActionCreator from '../../../ActionCreators/DefaultActionCreator';
import {connect} from 'react-redux';
import {TabViewAnimated, TabBar, SceneMap} from 'react-native-tab-view';
import {
    Container,
    Text,
    Content,
    Header,
    Button,
    Spinner,
    List,
    ListItem,
    Body,
    Tabs,
    Tab,
    ScrollableTab
} from 'native-base';
import Swiper from 'react-native-swiper';
import styles from './Style';
import HeaderComponent from '../../../Components/HeaderComponent/HeaderComponent'

const initialLayout = {
    height: 0,
    width: Dimensions.get('window').width,
};


const mapStateToProps = state => {
    return {
        token: state.LoginReducer.token,
        top: state.ScrollToTopReducer.top,
        data: state.DefaultReducer.data,
        loading: state.DefaultReducer.loading
    };
};

const FirstRoute = () => <FlatList
    data={this.props.data}
    renderItem={this.renderItem}
    keyExtractor={item => item.time}
    ref={(ref) => {
        this.flatListRef = ref;
    }}
    ListHeaderComponent={this.renderHeader}
    refreshing={this.state.refreshing}
    onRefresh={this.pullToRefresh}
/>;
const SecondRoute = () => <View style={{backgroundColor: '#673ab7', flex: 1}}/>;


class HomeScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            refreshing: false,
            index: 0,
            display: null,
            scroll: 0,
            fadeOut: new Animated.Value(0),
            routes: [
                {key: 'first', title: 'First'},
                {key: 'second', title: 'Second'},
            ],
        }

    }

    _handleIndexChange = index => this.setState({index});

    _renderHeader = props => {
        return (
            <View>

                <TabBar {...props} />

            </View>
        )
    };

    _renderScene = ({route}) => {
        let offset = 0;
        switch (route.key) {
            case 'first':
                return <FlatList
                    data={this.props.data}
                    renderItem={this.renderItem}
                    scrollEventThrottle={1}
                    onScroll={(event) => {
                        let currentOffset = event.nativeEvent.contentOffset.y;
                        if (currentOffset > offset) {

                            this.setState({display: "none"});

                        }
                        else if (currentOffset < offset) {
                            Animated.timing(                  // Animate over time
                                this.state.fadeAnim,            // The animated value to drive
                                {
                                    toValue: 1,                   // Animate to opacity: 1 (opaque)
                                    duration: 10000,              // Make it take a while
                                }
                            ).start();                        // Starts the animation


                            this.setState({display: "flex"});
                        }
                        offset = currentOffset;

                    }}

                    keyExtractor={item => item.time}
                    ref={(ref) => {
                        this.flatListRef = ref;
                    }}
                    ListHeaderComponent={this.renderHeader}
                    refreshing={this.state.refreshing}
                    onRefresh={this.pullToRefresh}
                />;
            case 'second':
                return <View style={{backgroundColor: '#673ab7', flex: 1}}/>;
            default:
                return null;
        }
    };


    componentWillMount() {
        this.props.dispatch(DefaultActionCreator.defaultFetch());


    }

    componentDidMount() {


    }

    topReset() {
        this.props.dispatch(ScrollToTopActionCreator.topReset());

    }

    scrollToTop = () => {
        // Scroll to top, in this case I am using FlatList
        return Promise.resolve(this.flatListRef.scrollToOffset({offset: 0, animated: true}));
    };


    getToken = () => {
        try {
            AsyncStorage.getItem("ACCESS TOKEN").then((value) => console.log(value));

        } catch (error) {
            console.log(error)
        }

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
            <View>

            </View>


        )

    };
    pullToRefresh = () => {
        console.log("refreshed");
        this.setState({refreshing: true})
        // this.props.dispatch(ShuttleActionCreator.dispatchShuttleTimetable())
    };


    render() {

        return (
            <Container>
                <HeaderComponent title="reBay" left="" right="ios-basket" searchBar={true}/>
                <View style={{flex:0.8, display:this.state.display, transition:"0.2s ease"}}>
                    <Swiper style={{height: 170}}
                            showsButtons={false}>
                        <View style={styles.slide1}>
                            <Image style={styles.image}
                                   source={require('../../../Assets/pic1.jpg')}
                            />
                        </View>
                        <View style={styles.slide2}>
                            <Image style={styles.image}
                                   source={require('../../../Assets/pic2.jpg')}
                            />
                        </View>
                        <View style={styles.slide3}>
                            <Image style={styles.image}
                                   source={require('../../../Assets/pic3.jpg')}
                            />
                        </View>
                    </Swiper>
                </View>
                <TabViewAnimated
                    style={styles.container}
                    navigationState={this.state}
                    renderScene={this._renderScene}
                    renderHeader={this._renderHeader}
                    onIndexChange={this._handleIndexChange}
                    initialLayout={initialLayout}
                />
            </Container>

        )

    }

}

export default (HomeScreen = connect(mapStateToProps)(HomeScreen));

