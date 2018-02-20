import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Container, Text, Content, Item, Input} from 'native-base';
import HeaderComponent from '../../../Components/HeaderComponent/HeaderComponent'
import styles from './Style';

const mapStateToProps = state => {
    return {};
};

class BuyScreen extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        console.log("BuyScreen");
        return (
            <Container style={{flex: 1, backgroundColor: '#ddd'}}>
                <HeaderComponent title="구매하기" left="" right="ios-basket"/>
				<Content>
					<Text>브랜드 검색</Text>
		        	<Item rounded style={styles.itemStyle}>
		        		<Input placeholder='Rounded Textbox'/>
		        	</Item>
		        </Content>
            </Container>
        )
    }

}

export default (BuyScreen = connect(mapStateToProps)(BuyScreen));
