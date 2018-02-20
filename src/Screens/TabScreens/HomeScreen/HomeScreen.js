import React, {Component} from 'react';
import {FlatList, View, AsyncStorage, Image} from 'react-native'
import * as ScrollToTopActionCreator from '../../../ActionCreators/ScrollToTopCreator';
import * as DefaultActionCreator from '../../../ActionCreators/DefaultActionCreator';
import {connect} from 'react-redux';
import {Container, Text, Content, Header, Button, Spinner, List, ListItem, Body} from 'native-base';
import Swiper from 'react-native-swiper';
import styles from './Style';
import HeaderComponent from '../../../Components/HeaderComponent/HeaderComponent'


const mapStateToProps = state => {
    return {
        token: state.LoginReducer.token,
        top: state.ScrollToTopReducer.top,
        data: state.DefaultReducer.data,
        loading:state.DefaultReducer.loading
    };
};


class HomeScreen extends Component {

    componentWillMount() {

    }
    componentDidMount() {
        this.props.dispatch(DefaultActionCreator.defaultFetch());

    }

    topReset() {
        this.props.dispatch(ScrollToTopActionCreator.topReset());

    }

    scrollToTop = () => {
        // Scroll to top, in this case I am using FlatList
        return Promise.resolve(this.flatListRef.scrollToOffset({offset: 0, animated: true}));
    };

    constructor(props) {
        super(props);

        this.state = {
            refreshing: false,
        }

    }

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
            <Swiper style={styles.wrapper} showsButtons={false}>
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

        )

    };
    pullToRefresh = () => {
        console.log("refreshed");
        this.setState({refreshing: true})
        // this.props.dispatch(ShuttleActionCreator.dispatchShuttleTimetable())
    };


    render() {
        console.log("props check!");
        console.log(this.props);
        return (
            <Container>
                <HeaderComponent title="reBay" left="" right="ios-basket" searchBar={true}/>
                <View>
                    {this.props.loading === true?
                        <Spinner/> :
                        <FlatList
                            data={this.props.data}
                            renderItem={this.renderItem}
                            keyExtractor={item => item.time}
                            ref={(ref) => {
                                this.flatListRef = ref;
                            }}
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

