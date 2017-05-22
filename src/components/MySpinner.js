import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Spinner } from './common';

class MySpinner extends Component {
  render() {
    return (
      <View style={styles.spinnerContainer}>
        <Spinner size="large" />
      </View>
    );
  }
}

const size = 40; // TODO I want to put some logic in my style creation ...

const styles = StyleSheet.create({
  spinnerContainer: {
    marginTop: size,
  },
});

export default MySpinner;
