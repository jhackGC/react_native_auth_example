import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { Header } from './common';
import firebase from 'firebase';
import LoginForm from './LoginForm';

class App extends Component {

  componentWillMount(){
    const firebaseConfig = {
      apiKey: 'AIzaSyCyiDSsYmoN5SUmqH9uKTMelof8Vf2xkl4',
      authDomain: 'auth-e91b8.firebaseapp.com',
      databaseURL: 'https://auth-e91b8.firebaseio.com',
      projectId: 'auth-e91b8',
      storageBucket: 'auth-e91b8.appspot.com',
      messagingSenderId: '870119659642'
    };

    firebase.initializeApp(firebaseConfig);

  }

  render() {
    return (
        <View>
          <Header>
            <Text>Header of AUth</Text>
          </Header>
          <LoginForm>Hello </LoginForm>
        </View>
    );
  }
}

export default App;