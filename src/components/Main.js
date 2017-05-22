import React, { Component } from 'react';
import { View } from 'react-native';
import { CardSection, Button } from './common';
import TechStack from './TechStackList';
import firebase from 'firebase';

class Main extends Component {
  logoutUser() {
    firebase.auth().signOut();
  }

  render() {
    return (
      <View>
        <TechStack />
        <CardSection>
          <Button onPress={this.logoutUser}>Log Out</Button>
        </CardSection>
      </View>
    );
  }
}

export default Main;
