import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, ScrollView} from 'react-native';
import {
    Container,
    Text,
    Content,
    Item,
    Input,
    Form,
    Button,
    Badge,
    Header,
    Footer,
    Title,
    Left,
    Right,
    List,
    ListItem,
    FooterTab
} from 'native-base';
import HeaderComponent from '../../../Components/HeaderComponent/HeaderComponent'
import jsonData from '../../../Constants/data'
import FooterButton from '../../../Components/FooterButtonComponent/FooterButtonComponent'
import styles from './Style';

const mapStateToProps = state => {
    return {};
};

class FilterScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item_name:null,
            item_price:null,
            item_size:null,
            selectedBrand: [],
            selectedCategory: 0,
            selectedDetailCategory: 0,
            category: jsonData.category,
            selectedItemStatus: 0,
            item_status: jsonData.item_status,
            selectedYear: 0,
            year: jsonData.year,
            selectedSeason: 0,
            season: jsonData.season,
            selectedFullBox: 0,
            fullBox: jsonData.fullBox,
            selectedWarantee: 0,
            warantee: jsonData.warantee,
            selectedDomestic: 0,
            domestic: jsonData.domestic,
            selectedRefund: 0,
            refund: jsonData.refund
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.brand != null) {

            this.setState({
                selectedBrand: nextProps.navigation.state.params.brandName
            });
        }
    }

    goToDetail = () => {
        let pic_list = this.props.navigation.state.params.base64;
        let item_name = this.state.item_name;
        let brand_id = this.props.navigation.state.params.brandID;
        let price = this.state.item_price;
        let size = this.state.item_size;
        let season = this.state.year[this.state.selectedYear].name +" "+this.state.season[this.state.selectedSeason].name;
        let category_1 = this.state.category[this.state.selectedCategory].name;
        let category_2 = this.state.category[this.state.selectedCategory].detailCategory[this.state.selectedDetailCategory].name;
        let item_status = this.state.item_status[this.state.selectedItemStatus].name;
        let fullbox = this.state.fullBox[this.state.selectedFullBox].index;
        let warantee = this.state.warantee[this.state.selectedWarantee].index;
        let domestic = this.state.domestic[this.state.selectedDomestic].index;
        let refund = this.state.refund[this.state.selectedRefund].index;
        // console.log(pic_list, item_name, brand_id, price, size, season, category_1, category_2, item_status, fullbox, warantee, domestic, refund)
        this.props.navigation.navigate('Detail', {
            pic_list: pic_list,
            item_name: item_name,
            brand_id: brand_id,
            price: price,
            size: size,
            season: season,
            category_1: category_1,
            category_2: category_2,
            item_status: item_status,
            fullbox: fullbox,
            warantee: warantee,
            domestic: domestic,
            refund: refund
        })
    };

    render() {
        return (
            <Container style={{backgroundColor: 'white'}}>
                <HeaderComponent title="카테고리" left="" right=""/>
                <Content>
                    <Item regular>
                        <Input onChangeText={(item_name) => this.setState({item_name})} placeholder='상품명을 입력해주세요'/>
                    </Item>
                    <Item regular>
                        <Input onChangeText={(item_price) => this.setState({item_price})} placeholder='판매가격을 입력해주세요'/>
                    </Item>
                    <Item regular>
                        <Input onChangeText={(item_size) => this.setState({item_size})} placeholder='상품사이즈를 입력해주세요'/>
                    </Item>

                    {(this.props.navigation.state.params == null) ?
                        (<Text>NoBrand</Text>) : (<Text>{this.props.navigation.state.params.brandName}</Text>)
                    }
                    <Text>상위 카테고리</Text>
                    <ScrollView style={styles.row} horizontal={true}>
                        {this.state.category.map((category, index) => (
                            <Button
                                style={(index === this.state.selectedCategory) ? styles.checked : styles.notChecked}
                                key={index}
                                onPress={() => {

                                    this.setState({
                                        selectedCategory: index
                                    })
                                }}
                            >
                                <Text
                                    style={(index === this.state.selectedCategory) ? null : styles.notText}>{category.name}</Text>
                            </Button>
                        ))}
                    </ScrollView>

                    <Text>하위 카테고리</Text>
                    <ScrollView style={styles.row} horizontal={true}>
                        {
                            this.state.category[this.state.selectedCategory] === null ?
                                (<Text>Empty</Text>)
                                :

                                (this.state.category[this.state.selectedCategory].detailCategory.map((category, index) => (
                                    <Button
                                        style={(index === this.state.selectedDetailCategory) ? styles.checked : styles.notChecked}
                                        key={index}
                                        onPress={() => {

                                            this.setState({
                                                selectedDetailCategory: index
                                            })
                                        }}
                                    >
                                        <Text
                                            style={(index === this.state.selectedDetailCategory) ? null : styles.notText}>{category.name}</Text>
                                    </Button>
                                )))
                        }

                    </ScrollView>

                    <Text>상품상태</Text>

                    <View style={styles.row}>
                        {this.state.item_status.map((item_status, index) => (
                            <Button
                                style={(index === this.state.selectedItemStatus) ? styles.checked : styles.notChecked}
                                key={index}
                                onPress={() => {

                                    this.setState({
                                        selectedItemStatus: index
                                    })
                                }}
                            >
                                <Text
                                    style={(index === this.state.selectedItemStatus) ? null : styles.notText}>{item_status.name}</Text>
                            </Button>
                        ))}
                    </View>

                    <Text>시즌</Text>
                    <ScrollView style={styles.row} horizontal={true}>
                        {this.state.year.map((year, index) => (
                            <Button
                                style={(index === this.state.selectedYear ? styles.checked : styles.notChecked)}
                                key={index}
                                onPress={() => {
                                    this.setState({
                                        selectedYear: index
                                    })
                                }}
                            >
                                <Text
                                    style={(index === this.state.selectedYear) ? null : styles.notText}>{year.name}</Text>
                            </Button>
                        ))}
                    </ScrollView>
                    <View style={styles.row}>
                        {this.state.season.map((season, index) => (
                            <Button
                                style={(index === this.state.selectedSeason ? styles.checked : styles.notChecked)}
                                key={index}
                                onPress={() => {
                                    this.setState({
                                        selectedSeason: index
                                    })
                                }}
                            >
                                <Text
                                    style={(index === this.state.selectedSeason) ? null : styles.notText}>{season.name}</Text>
                            </Button>
                        ))}
                    </View>
                    <Text>구성상품</Text>
                    <View style={styles.row}>
                        {this.state.fullBox.map((fullBox, index) => (
                            <Button
                                style={(index === this.state.selectedFullBox ? styles.checked : styles.notChecked)}
                                key={index}
                                onPress={() => {
                                    this.setState({
                                        selectedFullBox: index
                                    })
                                }}
                            >
                                <Text
                                    style={(index === this.state.selectedFullBox) ? null : styles.notText}>{fullBox.name}</Text>
                            </Button>
                        ))}
                    </View>
                    <Text>보증서</Text>
                    <View style={styles.row}>
                        {this.state.warantee.map((warantee, index) => (
                            <Button
                                style={(index === this.state.selectedWarantee ? styles.checked : styles.notChecked)}
                                key={index}
                                onPress={() => {
                                    this.setState({
                                        selectedWarantee: index
                                    })
                                }}
                            >
                                <Text
                                    style={(index === this.state.selectedWarantee) ? null : styles.notText}>{warantee.name}</Text>
                            </Button>
                        ))}
                    </View>
                    <Text>구매</Text>
                    <View style={styles.row}>
                        {this.state.domestic.map((domestic, index) => (
                            <Button
                                style={(index === this.state.selectedDomestic ? styles.checked : styles.notChecked)}
                                key={index}
                                onPress={() => {
                                    this.setState({
                                        selectedDomestic: index
                                    })
                                }}
                            >
                                <Text
                                    style={(index === this.state.selectedDomestic) ? null : styles.notText}>{domestic.name}</Text>
                            </Button>
                        ))}
                    </View>
                    <Text>환불</Text>
                    <View style={styles.row}>
                        {this.state.refund.map((refund, index) => (
                            <Button
                                style={(index === this.state.selectedRefund ? styles.checked : styles.notChecked)}
                                key={index}
                                onPress={() => {
                                    this.setState({
                                        selectedRefund: index
                                    })
                                }}
                            >
                                <Text
                                    style={(index === this.state.selectedRefund) ? null : styles.notText}>{refund.name}</Text>
                            </Button>
                        ))}
                    </View>


                </Content>
                <FooterButton leftText="임시저장" rightText="다음으로" onPress={() => this.goToDetail()}/>
            </Container>
        )

    }

}

export default (FilterScreen = connect(mapStateToProps)(FilterScreen));

