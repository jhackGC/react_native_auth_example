import React from 'react';
import {View, ActivityIndicator} from 'react-native';

/**
 * Loading Spinner. Default size large.
 * @param props
 * @returns {XML}
 * @constructor
 */
const Spinner = (props) => {
  return (
      <View style={styles.containerStyle}>
        <ActivityIndicator size={props.size || 'large'}/>
      </View>
  );
};

const styles ={
  containerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  }
};

export { Spinner };