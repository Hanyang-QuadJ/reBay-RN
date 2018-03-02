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
    TabHeading,
    ScrollableTab,
    Icon
} from 'native-base';
import styles from './Style';
import HeaderComponent from '../../../Components/HeaderComponent/HeaderComponent'
import * as commonStyle from "../../../Constants/commonStyle";


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
            currentTab: 0,
            currentSubTab: 0

        }

    }


    componentWillMount() {
        this.props.dispatch(DefaultActionCreator.defaultFetch());

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
    pullToRefresh = () => {
        this.setState({refreshing: true})
        // this.props.dispatch(ShuttleActionCreator.dispatchShuttleTimetable())
    };


    render() {


        return (
            <Container>
                <HeaderComponent title="reBay" left="" right="ios-basket" searchBar={true}/>

                <Tabs initialPage={this.state.currentPage} onChangeTab={({i}) => this.setState({currentTab: i})}
                      tabContainerStyle={{height: 40}} tabBarUnderlineStyle={styles.tabUnderLine}>
                    <Tab
                        heading={<TabHeading
                            style={this.state.currentTab === 0 ? styles.activeTabStyle : styles.tabStyle}>
                            <Text
                                style={this.state.currentTab === 0 ? styles.activeTabTextStyle : styles.tabTextStyle}>카테고리</Text>
                        </TabHeading>}>
                        <ScrollableTabComponent navigation={this.props.navigation}/>


                    </Tab>
                    <Tab
                        heading={<TabHeading
                            style={this.state.currentTab === 1 ? styles.activeTabStyle : styles.tabStyle}>
                            <Text
                                style={this.state.currentTab === 1 ? styles.activeTabTextStyle : styles.tabTextStyle}>신규상품</Text>
                        </TabHeading>}>
                        <Text>신규상품</Text>

                    </Tab>
                </Tabs>
            </Container>
        )
    }

}

export default (HomeScreen = connect(mapStateToProps)(HomeScreen));

