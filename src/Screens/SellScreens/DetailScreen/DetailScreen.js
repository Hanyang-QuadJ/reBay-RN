import React, {Component} from 'react';
import {TextInput, AsyncStorage} from 'react-native';
import {connect} from 'react-redux';
import {Container, Text, Content, Button} from 'native-base';
import HeaderComponent from '../../../Components/HeaderComponent/HeaderComponent';
import FooterButton from '../../../Components/FooterButtonComponent/FooterButtonComponent';
import styles from './Style';
import * as ItemActionCreator from '../../../ActionCreators/ItemActionCreator'

const mapStateToProps = state => {
    return {
        item_id: state.ItemReducer.item_id
    };
};

class DetailScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: null,
            sub_content: null,
            tag: null
        }

    }

    parseTag = () => {
        let split = this.state.tag.split('#', 100);
        let myArray = split.filter(v => v !== '');
        let myArray2 = [];
        let Tag = [];
        for (let i = 0; i < myArray.length; i++) {
            myArray2[i] = myArray[i].trim();
        }
        let finalTag = myArray2.filter(v => v !== '');
        for (let i = 0; i < finalTag.length; i++) {
            Tag[i] = "#" + finalTag[i];
        }
        return Tag;

    };


    async postItem  ()  {
        let token = await AsyncStorage.getItem("ACCESS_TOKEN");
        let pic_list = this.props.navigation.state.params.pic_list;
        let price = this.props.navigation.state.params.price;
        let item_name = this.props.navigation.state.params.item_name;
        let brand_id = this.props.navigation.state.params.brand_id;
        let size = this.props.navigation.state.params.size;
        let season = this.props.navigation.state.params.season;
        let category_1 = this.props.navigation.state.params.category_1;
        let category_2 = this.props.navigation.state.params.category_2;
        let item_status = this.props.navigation.state.params.item_status;
        let fullbox = this.props.navigation.state.params.fullbox;
        let warantee = this.props.navigation.state.params.warantee;
        let domestic = this.props.navigation.state.params.domestic;
        let refund = this.props.navigation.state.params.refund;
        let content = this.state.content;
        let sub_content = this.state.sub_content;
        let tags = this.parseTag();
        console.log(price);
        console.log(brand_id);
        console.log(size);
        console.log(season);
        console.log(category_1);
        console.log(category_2);
        console.log(item_status);
        console.log(fullbox);
        console.log(warantee);
        console.log(domestic);
        console.log(refund);
        console.log(content);
        console.log(sub_content);
        console.log(tags);
        console.log(token);
        await this.props.dispatch(ItemActionCreator.postItem(token,
            pic_list,
            item_name,
            price,
            brand_id,
            size,
            season,
            category_1,
            category_2,
            item_status,
            fullbox,
            warantee,
            domestic,
            refund,
            content,
            sub_content,
            tags));
        await this.props.navigation.navigate('ItemStack');

    };


    componentDidUpdate() {
    }

    render() {
        return (
            <Container style={{backgroundColor: 'white'}}>
                <HeaderComponent title="상세정보" left="" right=""/>
                <Content>
                    <TextInput
                        multiline={true}
                        numberOfLines={10}
                        placeholder="제품상세설명"
                        onChangeText={(content) => this.setState({content})}
                        style={{height: 200, backgroundColor: 'red'}}
                    />
                    <TextInput
                        multiline={true}
                        numberOfLines={10}
                        placeholder="추가입력"
                        onChangeText={(sub_content) => this.setState({sub_content})}
                        style={{height: 200, backgroundColor: 'blue'}}
                    />
                    <TextInput
                        multiline={true}
                        numberOfLines={5}
                        onChangeText={(tag) => this.setState({tag})}
                        placeholder="태그"
                        style={{height: 200, backgroundColor: 'yellow'}}
                    />
                    <Button onPress={() => this.parseTag()}><Text>테스트</Text></Button>
                </Content>
                <Button onPress={() => this.postItem()}><Text>확인</Text></Button>
                <FooterButton leftText="임시저장" rightText="다음으로" onPress={()=>this.postItem()}/>
            </Container>
        )

    }

}

export default (DetailScreen = connect(mapStateToProps)(DetailScreen));

