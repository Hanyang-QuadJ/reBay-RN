
import React, {Component} from 'react';
import {FlatList, View, AsyncStorage, Image, Dimensions, ScrollView, Animated, RefreshControl} from 'react-native'
import * as ScrollToTopActionCreator from '../../../ActionCreators/ScrollToTopCreator';
import * as DefaultActionCreator from '../../../ActionCreators/DefaultActionCreator';
import {connect} from 'react-redux';
import {TabViewAnimated, TabBar} from 'react-native-tab-view';
import ScrollableTabComponent from '../../../Components/ScrollableTabComponent/ScrollableTabComponent'
import Swiper from 'react-native-swiper';

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
import styles from './Style';
import HeaderComponent from '../../../Components/HeaderComponent/HeaderComponent'
import * as commonStyle from "../../../Constants/commonStyle";

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


class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            index: 0,
            scroll: 0,
            routes: [
                {key: 'first', title: '카테고리 추천'},
                {key: 'second', title: '신규 상품'},
            ],
        }

    }
    componentDidUpdate(){

    }

    _handleIndexChange = index => this.setState({index});
    _renderHeader = props => {
        return (
            <View>
                <TabBar {...props} indicatorStyle={{backgroundColor: commonStyle.PRIMARY_COLOR}}
                        labelStyle={{color: commonStyle.PRIMARY_COLOR, fontSize:13, marginVertical:1}}
                        style={{backgroundColor: "white",}}/>
            </View>
        )
    };

    _renderScene = ({route}) => {
        switch (route.key) {
            case 'first':
                return <ScrollableTabComponent navigation={this.props.navigation}/>;
            case 'second':
                return <View style={{backgroundColor: '#673ab7', flex: 1}}/>;
            default:
                return null;
        }
    };

    render() {



        return (
            <Container>
                <HeaderComponent title="reBay" left="" right="ios-basket" searchBar={true} />

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

