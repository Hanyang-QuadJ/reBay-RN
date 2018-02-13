import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
export default class HeaderComponent extends Component {

    constructor(props){
        super(props);
        console.log(this.props);

    }
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name={this.props.left}/>
                        </Button>
                    </Left>
                    <Body>
                    <Title> {this.props.title} </Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name={this.props.right} ios={this.props.right} />
                        </Button>
                    </Right>
                </Header>
            </Container>
        );
    }
}
