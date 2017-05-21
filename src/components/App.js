import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { Header, Button, CardSection } from './common';
import firebase from 'firebase';
import LoginForm from './LoginForm';

class App extends Component {

  state = { loggedIn: false };


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

    // Event handler for when the user either logs-in or out. To update user
    // status in App state.
    // Every time firebase detects that the user is doing some login activity
    // like firebase.auth().signInWithEmailAndPassword(..), it will propagate
    // the event AuthStateChanged, and it will be caught by event observers
    // like here ...
    firebase.auth().onAuthStateChanged( (user) => {
        if(user) {
          this.setState({ loggedIn: true });
        }else{
          this.setState({ loggedIn: false });
        }
    });
  };

  renderContent(){
    if (this.state.loggedIn) {
      return (
          <CardSection>
            <Button>Log Out</Button>
          </CardSection>
      )
    }else{
      return <LoginForm/>;
    }
  };

  render() {
    return (
        <View>
          <Header>
            <Text>Authentication</Text>
          </Header>
          {this.renderContent()}
        </View>
    );
  };

}


export default App;