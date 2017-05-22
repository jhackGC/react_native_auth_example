import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header, Button, CardSection, Spinner } from './common';
import firebase from 'firebase';
import LoginForm from './LoginForm';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers';
import TechStack from '../components/TechStack';

class App extends Component {
  state = { loggedIn: null };

  stateStore = createStore(reducers);

  componentWillMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyCyiDSsYmoN5SUmqH9uKTMelof8Vf2xkl4',
      authDomain: 'auth-e91b8.firebaseapp.com',
      databaseURL: 'https://auth-e91b8.firebaseio.com',
      projectId: 'auth-e91b8',
      storageBucket: 'auth-e91b8.appspot.com',
      messagingSenderId: '870119659642',
    };

    firebase.initializeApp(firebaseConfig);

    // Event handler for when the user either logs-in or out. To update user
    // status in App state.
    // Every time firebase detects that the user is doing some login activity
    // like firebase.auth().signInWithEmailAndPassword(..), it will propagate
    // the event AuthStateChanged, and it will be caught by event observers
    // like here ...
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  /**
   * When app refreshed goes trough componentWillMount and firebase.auth().
   * That will define if the user is logged or not and show the corresponding
   * component.
   * Now, in the case is already logged it will print the Log Out button, BUT,
   * while firebase checks that we already rendered the component AND the login
   * form will be shown, which is wrong, because the default value for loggedIn
   * is false.
   * So, to avoid this, we need a third state which means we don't know if it is
   * logged in. e.g. getting loggedInto null. And showing a loading spinner
   * until firebase answers.
   */
  renderContent() {
    let midContent = '';

    switch (this.state.loggedIn) {
      case true:
        midContent = (
          <View>
            <TechStack />
            <CardSection>
              <Button onPress={this.logoutUser}>Log Out</Button>
            </CardSection>
          </View>
        );
        break;
      case false:
        midContent = <LoginForm />;
        break;
      default:
        midContent = (
          <View style={styles.spinnerContainer}>
            <Spinner size="large" />
          </View>
        );
    }

    const content = (
      <Provider store={this.stateStore}>
        {midContent}
      </Provider>
    );

    console.log('CURRENT STORE STATE: ', this.stateStore.getState());

    return content;
  }

  logoutUser() {
    firebase.auth().signOut();
  }

  render() {
    return (
      <View>
        <Header>
          <Text>Authentication</Text>
        </Header>
        {this.renderContent()}
      </View>
    );
  }
}

const size = 30; // TODO I want to put some logic in my style creation ...

const styles = StyleSheet.create({
  spinnerContainer: {
    marginTop: size,
  },
});

export default App;
