import React, { Component } from 'react';
import firebase from 'firebase';
import LoginForm from './LoginForm';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers';
import Main from '../components/Main';
import MySpinner from '../components/MySpinner';

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
        midContent = <Main />;
        break;
      case false:
        midContent = <LoginForm />;
        break;
      default:
        midContent = <MySpinner />;
    }

    const content = (
      <Provider store={this.stateStore}>
        {midContent}
      </Provider>
    );

    console.log('CURRENT STORE STATE: ', this.stateStore.getState());

    return content;
  }



  render() {
    return this.renderContent();
  }
}

export default App;
