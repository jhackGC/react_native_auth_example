import React, {Component} from 'react';
import {Text} from 'react-native';
import {Card, CardSection, Button, InputField} from './common';

class LoginForm extends Component {

  state = {
    email: '',
    password: ''
  };

  render() {
    return (
        <Card>
          <CardSection>
            <InputField
                label='Email'
                onChangeText={ email => this.setState({ email })}
                value={this.state.email}
                placeholder='user@example.com'
            />
          </CardSection>
          <CardSection>
            <InputField
                label='Password'
                onChangeText={ password => this.setState({ password })}
                value={this.state.password}
                placeholder='password'
                secureTextEntry={true}
            />
          </CardSection>
          <CardSection>
            <Button>
              <Text>Login button</Text>
            </Button>

          </CardSection>
        </Card>
    );
  }
}

export default LoginForm;