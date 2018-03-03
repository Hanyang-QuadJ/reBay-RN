import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Modal, AsyncStorage, View, Image, TouchableOpacity, Alert, Text} from 'react-native';
import {Container,  Content, Button, Footer, ActionSheet } from 'native-base';
import * as BrandActionCreator from '../../../ActionCreators/BrandActionCreator'
import HeaderComponent from '../../../Components/HeaderComponent/HeaderComponent'
import {ImagePicker} from 'expo'
import styles from './Style';
import FooterButtonComponent from '../../../Components/FooterButtonComponent/FooterButtonComponent';

const mapStateToProps = state => {
    return {
        brand: state.BrandReducer.brand
    };
};
const BUTTONS = ["직접촬영","라이브러리에서 선택", "Cancel"];
const CANCEL_INDEX = 4;

class PictureScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            image1: null,
            image2: null,
            image3: null,
            image4: null,
            image5: null,
            image6: null,
            image7: null,
            image8: null,
            image9: null,
            base1: null,
            base2: null,
            base3: null,
            base4: null,
            base5: null,
            base6: null,
            base7: null,
            base8: null,
            base9: null,
        }


    }

    closeModal = () => {
        this.props.navigation.goBack(null);

    };

    componentWillMount() {
        AsyncStorage.getItem("ACCESS_TOKEN").then(token => {
            this.props.dispatch(BrandActionCreator.getBrand(token));
        });
    }

    parseBase = () => {
        let {base1, base2, base3, base4, base5, base6, base7, base8, base9} = this.state;
        let baseArray = [base1,base2,base3,base4, base5, base6, base7, base8, base9];
        function filter_array(arr) {
            arr = arr.filter(isEligible);
            return arr;
        }
        function isEligible(value) {
            if(value !== false || value !== null || value !== 0 || value !== "") {
                return value;
            }
        }
        return filter_array(baseArray);

    };



    goToBrand = () => {
        const baseArray = this.parseBase();
        this.props.navigation.navigate('Brand',{base64:baseArray});

        // if(baseArray.length <3 ){
        //     Alert.alert(
        //         '잠깐!',
        //         '최소 3장 이상의 상품사진을 입력하세요',
        //         [
        //             {text: 'OK'},
        //         ],
        //     )
        // }
        // else{
        //     this.props.navigation.navigate('Brand',{base64:baseArray});
        // }
    };


    imagePicker = async (imageNumber) => {
        ActionSheet.show(
            {
                options: BUTTONS,
                cancelButtonIndex: CANCEL_INDEX,
                title: "사진 등록"
            },

            async buttonIndex =>  {
                console.log(buttonIndex);
                if(buttonIndex === 0){
                    let result = await ImagePicker.launchCameraAsync({
                        allowsEditing: true,
                        base64: true,
                        aspect: [4, 3],
                    });
                    console.log(result);

                    if (!result.cancelled) {
                        if (imageNumber === 1) {
                            this.setState({image1: result.uri, base1: result.base64});
                        }
                        else if (imageNumber === 2) {
                            this.setState({image2: result.uri, base2: result.base64});
                        }
                        else if (imageNumber === 3) {
                            this.setState({image3: result.uri, base3: result.base64});
                        }
                        else if (imageNumber === 4) {
                            this.setState({image4: result.uri, base4: result.base64});
                        }
                        else if (imageNumber === 5) {
                            this.setState({image5: result.uri, base5: result.base64});
                        }
                        else if (imageNumber === 6) {
                            this.setState({image6: result.uri, base6: result.base64});
                        }
                        else if (imageNumber === 7) {
                            this.setState({image7: result.uri, base7: result.base64});
                        }
                        else if (imageNumber === 8) {
                            this.setState({image8: result.uri, base8: result.base64});
                        }
                        else if (imageNumber === 9) {
                            this.setState({image9: result.uri, base9: result.base64});
                        }

                    }


                }
                else if(buttonIndex === 1){

                    let result = await ImagePicker.launchImageLibraryAsync({
                        allowsEditing: true,
                        base64: true,
                        aspect: [4, 3],
                    });

                    console.log(result);

                    if (!result.cancelled) {
                        if (imageNumber === 1) {
                            this.setState({image1: result.uri, base1: result.base64});
                        }
                        else if (imageNumber === 2) {
                            this.setState({image2: result.uri, base2: result.base64});
                        }
                        else if (imageNumber === 3) {
                            this.setState({image3: result.uri, base3: result.base64});
                        }
                        else if (imageNumber === 4) {
                            this.setState({image4: result.uri, base4: result.base64});
                        }
                        else if (imageNumber === 5) {
                            this.setState({image5: result.uri, base5: result.base64});
                        }
                        else if (imageNumber === 6) {
                            this.setState({image6: result.uri, base6: result.base64});
                        }
                        else if (imageNumber === 7) {
                            this.setState({image7: result.uri, base7: result.base64});
                        }
                        else if (imageNumber === 8) {
                            this.setState({image8: result.uri, base8: result.base64});
                        }
                        else if (imageNumber === 9) {
                            this.setState({image9: result.uri, base9: result.base64});
                        }

                    }

                }

            }
        )

    };

    render() {
        let {image1, image2, image3, image4, image5, image6, image7, image8, image9} = this.state;

        return (
            <Container style={{backgroundColor: 'white'}}>
                <HeaderComponent title="판매하기" left="ios-close" right="" onPressLeft={() => this.closeModal()}/>
                <View style={styles.container}>
                    <View style={styles.progress}>
                    </View>
                    <View style={styles.inform}>
                        <Text style={styles.informText}>최소 3장 이상의 사진을 등록해주세요</Text>
                    </View>
                    <View style={styles.rowContainer}>
                        <View style={styles.row}>
                            <TouchableOpacity onPress={() => this.imagePicker(1)}>
                                {image1 === null ?
                                    <Image style={styles.image} source={require('../../../Assets/pic1.jpg')}/> :
                                    image1 && <Image source={{uri: image1}} style={styles.image}/>}
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.imagePicker(2)}>
                                {image2 === null ?
                                    <Image style={styles.image} source={require('../../../Assets/pic1.jpg')}/> :
                                    image2 && <Image source={{uri: image2}} style={styles.image}/>}
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.imagePicker(3)}>
                                {image3 === null ?
                                    <Image style={styles.image} source={require('../../../Assets/pic1.jpg')}/> :
                                    image3 && <Image source={{uri: image3}} style={styles.image}/>}
                            </TouchableOpacity>
                        </View>
                        <View style={styles.row}>
                            <TouchableOpacity onPress={() => this.imagePicker(4)}>
                                {image4 === null ?
                                    <Image style={styles.image} source={require('../../../Assets/pic1.jpg')}/> :
                                    image4 && <Image source={{uri: image4}} style={styles.image}/>}
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.imagePicker(5)}>
                                {image5 === null ?
                                    <Image style={styles.image} source={require('../../../Assets/pic1.jpg')}/> :
                                    image5 && <Image source={{uri: image5}} style={styles.image}/>}
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.imagePicker(6)}>
                                {image6 === null ?
                                    <Image style={styles.image} source={require('../../../Assets/pic1.jpg')}/> :
                                    image6 && <Image source={{uri: image6}} style={styles.image}/>}
                            </TouchableOpacity>
                        </View>
                        <View style={styles.row}>
                            <TouchableOpacity onPress={() => this.imagePicker(7)}>
                                {image7 === null ?
                                    <Image style={styles.image} source={require('../../../Assets/pic1.jpg')}/> :
                                    image7 && <Image source={{uri: image7}} style={styles.image}/>}
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.imagePicker(8)}>
                                {image8 === null ?
                                    <Image style={styles.image} source={require('../../../Assets/pic1.jpg')}/> :
                                    image8 && <Image source={{uri: image8}} style={styles.image}/>}
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.imagePicker(9)}>
                                {image9 === null ?
                                    <Image style={styles.image} source={require('../../../Assets/pic1.jpg')}/> :
                                    image9 && <Image source={{uri: image9}} style={styles.image}/>}
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <FooterButtonComponent onPress={()=>this.goToBrand()} leftText="임시저장" rightText="다음으로"/>
            </Container>

        )

    }


}

export default (PictureScreen = connect(mapStateToProps)(PictureScreen));
