import React from 'react';
import {TextInput, View, Text} from 'react-native';

const InputField = ({label, value, onChangeText, placeholder, secureTextEntry}) => {
  const {
    fieldStyle,
    labelStyle,
    inputStyle,
  } = styles;

  return (
      <View
          style={ fieldStyle }
      >
        <Text
            style={ labelStyle }
        >{ label }</Text>
        <TextInput
            style={ inputStyle }
            onChangeText={ onChangeText }
            value={ value }
            autoCorrect={false}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
        />
      </View>
  );
};

const styles = {
  fieldStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
  },

  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 15,
    lineHeight: 23,
    flex: 2,
    width: 100,
    height: 40,
  },
};

export {InputField};