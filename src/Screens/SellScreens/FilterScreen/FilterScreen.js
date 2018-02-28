import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Container, Text, Content, Button, Input, Item} from 'native-base';
import HeaderComponent from '../../../Components/HeaderComponent/HeaderComponent';
import FooterButtonComponent from '../../../Components/FooterButtonComponent/FooterButtonComponent';

import styles from './Style';

const mapStateToProps = state => {
    return {};
};

class FilterScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item_name: "",
            item_price: "",
            item_size: "",
            //전체카테고리 Big의 b
            big: null,
            b_manCheck: false,
            b_womanCheck: false,
            //상세카테고리 Detail의 d
            detail: null,
            d_topCheck: false,
            d_bottomCheck: false,
            d_underWearCheck: false,
            //상품상태 Condition의 c
            condition: null,
            c_newCheck: false,
            c_oldCheck: false,
            //년도 Year의 y
            year: null,
            y_2016: null,
            y_2016Check: false,
            //시즌 Season의 s
            season: null,
            s_springSummerCheck: false,
            s_fallWinterCheck: false,
            //구성물품 fullBox의 f
            fullBox: null,
            f_yesCheck: false,
            f_noCheck: false,
            //보증서 warranty의 w
            warranty: null,
            w_yesCheck: false,
            w_noCheck: false,
            //국내 Korea의 k
            korea: null,
            k_yesCheck: false,
            k_noCheck: false,
            //환불 Refund의 r
            refund: null,
            r_noCheck: false,
            r_3DayCheck: false,
            r_7DayCheck: false,

        }
    }

    buttonPressed = (kind) => {
        //전체카테고리
        if (kind === "b_man") {
            if (this.state.b_manCheck === true) {
            }
            else {
                this.setState({
                    b_manCheck: true,
                    b_womanCheck: false,
                    big: "남성의류"
                })
            }
        }
        else if (kind === "b_woman") {
            if (this.state.b_womanCheck === true) {

            }
            else {
                this.setState({
                    b_womanCheck: true,
                    b_manCheck: false,
                    big: "여성의류"
                })
            }
        }
        //상세카테고리
        else if (kind === "d_top") {
            if (this.state.d_topCheck === true) {

            }
            else {

                this.setState({
                    d_topCheck: true,
                    d_bottomCheck: false,
                    detail: "상의"
                })
            }
        }
        else if (kind === "d_bottom") {
            if (this.state.d_bottomCheck === true) {

            }
            else {
                this.setState({
                    d_topCheck: false,
                    d_bottomCheck: true,
                    detail: "하의"
                })
            }
        }
        else if (kind === "d_underWearCheck") {
            if (this.state.d_bottomCheck === true) {

            }
            else {
                this.setState({
                    d_underWearCheck: true,
                    detail: "속옷"
                })
            }
        }
        //물품상태
        else if (kind === "c_new") {
            if (this.state.c_newCheck === true) {

            }
            else {

                this.setState({
                    c_newCheck: true,
                    c_oldCheck: false,
                    condition: "새상품"

                })
            }
        }
        else if (kind === "c_old") {
            if (this.state.c_oldCheck === true) {

            }
            else {

                this.setState({
                    c_newCheck: false,
                    c_oldCheck: true,
                    condition: "중고상품"
                })
            }
        }
        //년도
        else if (kind === "y_2016") {
            if (this.state.y_2016Check === true) {

            }
            else {
                this.setState({
                    y_2016Check: true,
                    year: "2016"
                })
            }
        }
        //시즌
        else if (kind === "s_springSummer") {
            if (this.state.s_springSummerCheck === true) {

            }
            else {
                this.setState({
                    s_springSummerCheck: true,
                    s_fallWinterCheck: false,
                    season: "S/S"
                })
            }
        }
        else if (kind === "s_fallWinter") {
            if (this.state.s_fallWinterCheck === true) {

            }
            else {
                this.setState({
                    s_springSummerCheck: false,
                    s_fallWinterCheck: true,
                    season: "F/W"
                })
            }
        }
        //구성상품
        else if (kind === "f_yes") {
            if (this.state.f_yesCheck === true) {

            }
            else {
                this.setState({
                    f_yesCheck: true,
                    f_noCheck: false,
                    fullBox: 1
                })
            }
        }
        else if (kind === "f_no") {
            if (this.state.f_noCheck === true) {

            }
            else {
                this.setState({
                    f_yesCheck: false,
                    f_noCheck: true,
                    fullBox: 0
                })
            }
        }
        //보증서
        else if (kind === "w_yes") {
            if (this.state.w_yesCheck === true) {

            }
            else {
                this.setState({
                    w_yesCheck: true,
                    w_noCheck: false,
                    warranty: 1
                })
            }
        }
        else if (kind === "w_no") {
            if (this.state.w_noCheck === true) {

            }
            else {
                this.setState({
                    w_yesCheck: false,
                    w_noCheck: true,
                    warranty: 0
                })
            }
        }
        //국내
        else if (kind === "k_yes") {
            if (this.state.k_yesCheck === true) {

            }
            else {
                this.setState({
                    k_yesCheck: true,
                    k_noCheck: false,
                    korea: 1
                })
            }
        }
        else if (kind === "k_no") {
            if (this.state.k_noCheck === true) {

            }
            else {
                this.setState({
                    k_yesCheck: false,
                    k_noCheck: true,
                    korea: 0
                })
            }
        }
        //환불
        else if (kind === "r_no") {
            if (this.state.r_noCheck === true) {

            }
            else {
                this.setState({
                    r_7DayCheck: false,
                    r_3DayCheck: false,
                    r_noCheck: true,
                    refund: 0
                })
            }
        }
        else if (kind === "r_3Day") {
            if (this.state.r_3DayCheck === true) {

            }
            else {
                this.setState({
                    r_7DayCheck: false,
                    r_3DayCheck: true,
                    r_noCheck: false,
                    refund: 1
                })
            }
        }
        else if (kind === "r_7Day") {
            if (this.state.r_7DayCheck === true) {

            }
            else {
                this.setState({
                    r_7DayCheck: true,
                    r_3DayCheck: false,
                    r_noCheck: false,
                    refund: 2
                })
            }
        }
    };

    goToDetail = () => {
        let {item_name, item_price, item_size, big, detail, condition, year, season, fullBox, warranty, refund, korea} = this.state;
        let pic_list = this.props.navigation.state.params.base64;
        let brand = this.props.navigation.state.params.brandID;
        this.props.navigation.navigate('Detail', {
            pic_list: pic_list,
            item_name: item_name,
            brand_id: brand,
            price: item_price,
            size: item_size,
            season:year+season,
            category_1: big,
            category_2: detail,
            item_status: condition,
            fullbox: fullBox,
            warranty: warranty,
            domestic: korea,
            refund: refund
        })

    };


    render() {
        return (
            <Container style={{backgroundColor: 'white'}}>
                <HeaderComponent title="상품정보 입력" left="" right=""/>
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
                    <Text>전카테고리</Text>


                    {this.state.b_manCheck === true ?
                        <Button style={styles.checked}><Text>남성의류</Text></Button>
                        : <Button style={styles.notChecked}
                                  onPress={() => this.buttonPressed("b_man")}><Text
                            style={styles.notText}>남성의류</Text></Button>
                    }
                    {this.state.b_womanCheck === true ?
                        <Button style={styles.checked}><Text>여성의류</Text></Button>
                        : <Button style={styles.notChecked}
                                  onPress={() => this.buttonPressed("b_woman")}><Text style={styles.notText}>여성의류</Text></Button>
                    }

                    <Text>상세카테고리</Text>
                    {this.state.b_manCheck === true ? null


                        :
                        this.state.d_underWearCheck === true ?
                            <Button style={styles.checked}
                            ><Text>속옷</Text></Button>
                            : <Button style={styles.notChecked}
                                      onPress={() => this.buttonPressed("d_underWearCheck")}><Text
                                style={styles.notText}>속옷</Text></Button>


                    }


                    {this.state.d_topCheck === true ?
                        <Button style={styles.checked}
                        ><Text>상의</Text></Button>
                        : <Button style={styles.notChecked}
                                  onPress={() => this.buttonPressed("d_top")}><Text
                            style={styles.notText}>상의</Text></Button>
                    }
                    {this.state.d_bottomCheck === true ?
                        <Button style={styles.checked}
                        ><Text>하의</Text></Button>
                        : <Button style={styles.notChecked}
                                  onPress={() => this.buttonPressed("d_bottom")}><Text style={styles.notText}>하의</Text></Button>
                    }
                    <Text>상품상태</Text>
                    {this.state.c_newCheck === true ?
                        <Button style={styles.checked}
                        ><Text>새상품</Text></Button>
                        : <Button style={styles.notChecked}
                                  onPress={() => this.buttonPressed("c_new")}><Text
                            style={styles.notText}>새상품</Text></Button>
                    }
                    {this.state.c_oldCheck === true ?
                        <Button style={styles.checked}
                        ><Text>중고상품</Text></Button>
                        : <Button style={styles.notChecked}
                                  onPress={() => this.buttonPressed("c_old")}><Text
                            style={styles.notText}>중고상품</Text></Button>
                    }
                    <Text>시즌</Text>
                    {this.state.y_2016Check === true ?
                        <Button style={styles.checked}
                        ><Text>2016</Text></Button>
                        : <Button style={styles.notChecked}
                                  onPress={() => this.buttonPressed("y_2016")}><Text style={styles.notText}>2016</Text></Button>
                    }

                    {this.state.s_springSummerCheck === true ?
                        <Button style={styles.checked}
                        ><Text>S/S</Text></Button>
                        : <Button style={styles.notChecked}
                                  onPress={() => this.buttonPressed("s_springSummer")}><Text
                            style={styles.notText}>S/S</Text></Button>
                    }
                    {this.state.s_fallWinterCheck === true ?
                        <Button style={styles.checked}
                        ><Text>F/W</Text></Button>
                        : <Button style={styles.notChecked}
                                  onPress={() => this.buttonPressed("s_fallWinter")}><Text
                            style={styles.notText}>F/W</Text></Button>
                    }
                    <Text>구성상품</Text>

                    {this.state.f_yesCheck === true ?
                        <Button style={styles.checked}
                        ><Text>있음</Text></Button>
                        : <Button style={styles.notChecked}
                                  onPress={() => this.buttonPressed("f_yes")}><Text
                            style={styles.notText}>있음</Text></Button>
                    }
                    {this.state.f_noCheck === true ?
                        <Button style={styles.checked}
                        ><Text>없음</Text></Button>
                        : <Button style={styles.notChecked}
                                  onPress={() => this.buttonPressed("f_no")}><Text
                            style={styles.notText}>없음</Text></Button>
                    }
                    <Text>보증서</Text>

                    {this.state.w_yesCheck === true ?
                        <Button style={styles.checked}
                        ><Text>있음</Text></Button>
                        : <Button style={styles.notChecked}
                                  onPress={() => this.buttonPressed("w_yes")}><Text
                            style={styles.notText}>있음</Text></Button>
                    }
                    {this.state.w_noCheck === true ?
                        <Button style={styles.checked}
                        ><Text>없음</Text></Button>
                        : <Button style={styles.notChecked}
                                  onPress={() => this.buttonPressed("w_no")}><Text
                            style={styles.notText}>없음</Text></Button>
                    }
                    <Text>구매</Text>

                    {this.state.k_yesCheck === true ?
                        <Button style={styles.checked}
                        ><Text>국내</Text></Button>
                        : <Button style={styles.notChecked}
                                  onPress={() => this.buttonPressed("k_yes")}><Text
                            style={styles.notText}>국내</Text></Button>
                    }
                    {this.state.k_noCheck === true ?
                        <Button style={styles.checked}
                        ><Text>해외</Text></Button>
                        : <Button style={styles.notChecked}
                                  onPress={() => this.buttonPressed("k_no")}><Text
                            style={styles.notText}>해외</Text></Button>
                    }
                    <Text>환불</Text>
                    {this.state.r_noCheck === true ?
                        <Button style={styles.checked}
                        ><Text>불가능</Text></Button>
                        : <Button style={styles.notChecked}
                                  onPress={() => this.buttonPressed("r_no")}><Text
                            style={styles.notText}>불가능</Text></Button>
                    }
                    {this.state.r_3DayCheck === true ?
                        <Button style={styles.checked}
                        ><Text>수령후 3일내</Text></Button>
                        : <Button style={styles.notChecked}
                                  onPress={() => this.buttonPressed("r_3Day")}><Text style={styles.notText}>수령후
                            3일내</Text></Button>
                    }
                    {this.state.r_7DayCheck === true ?
                        <Button style={styles.checked}
                        ><Text>수령후 7일내</Text></Button>
                        : <Button style={styles.notChecked}
                                  onPress={() => this.buttonPressed("r_7Day")}><Text style={styles.notText}>수령후
                            7일내</Text></Button>
                    }

                    <Button onPress={() => this.goToDetail()}><Text>Check!</Text></Button>
                </Content>
                <FooterButtonComponent onPress={() => this.goToDetail()} leftText="임시저장" rightText="다음으로"/>
            </Container>
        )

    }

}

export default (FilterScreen = connect(mapStateToProps)(FilterScreen));

