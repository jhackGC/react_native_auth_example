import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card, CardSection, Button, InputField, Spinner, Header } from './common';
import firebase from 'firebase';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    errorMsg: '',
    successMsg: '',
    loading: false,
  };

  renderButton() {
    //return spinner or button
    if (this.state.loading) {
      return <Spinner size="small" />;
    } else {
      return (
        <Button onPress={this.onButtonPress.bind(this)}>
          <Text>Log In</Text>
        </Button>
      );
    }
  }

  onButtonPress() {
    const { email, password } = this.state;

    //clear errors , set the loading spinner
    this.setState({ errorMsg: '', loading: true });

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(error => {
        console.log('catch auth: ', error);
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginFail(error) {
    //stop the spinner
    //set error message

    const errorMsg = `Authentication failed: ${error.message}`;

    this.setState({
      loading: false,
      errorMsg: errorMsg,
      successMsg: '',
    });
  }

  onLoginSuccess(error) {
    //clear form input fields
    //clear error messages
    //stop the spinner
    //set success message

    // if (error ...)
    const msg = 'User logged in !';
    // const msg = 'User created and logged in !';

    this.setState({
      email: '',
      password: '',
      errorMsg: '',
      loading: false,
      successMsg: msg,
    });
  }

  render() {
    const { errorTextStyle, successTextStyle } = styles;

    return (
      <View>
        <Header>
          <Text>React Tech Stack - LOGIN</Text>
        </Header>
        <Card>
          <CardSection>
            <InputField
              label="Email"
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
              placeholder="user@example.com"
            />
          </CardSection>
          <CardSection>
            <InputField
              label="Password"
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
              placeholder="password"
              secureTextEntry={true}
            />
          </CardSection>

          <Text style={errorTextStyle}>{this.state.errorMsg}</Text>
          <Text style={successTextStyle}>{this.state.successMsg}</Text>

          <CardSection>
            {this.renderButton()}
          </CardSection>
        </Card>
      </View>
    );
  }
}

const styles = {
  errorTextStyle: {
    color: 'red',
    fontSize: 15,
    alignSelf: 'center',
  },
  successTextStyle: {
    color: 'grey',
    fontSize: 15,
    alignSelf: 'center',
  },
};

export default LoginForm;
