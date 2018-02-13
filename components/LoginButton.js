import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
export default class LoginButton extends Component {
    render() {
        return (
            <Container>
                <Content padder>
                    <Button full rounded dark
                            style={{ marginTop: 10 }}
                            onPress={() => this.props.navigation.navigate("Chat")}>
                        <Text>Chat With People</Text>
                    </Button>
                    <Button full rounded primary
                            style={{ marginTop: 10 }}
                            onPress={() => this.props.navigation.navigate("Profile")}>
                        <Text>Goto Profiles</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}