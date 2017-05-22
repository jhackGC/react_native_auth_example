import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import { Header } from './common';
import { connect } from 'react-redux';


class TechStackList extends Component {
  render() {
    console.log('TechStackList render: ', this.props.techs);
    return (
      <View>
        <Header>
          <Text>React Tech Stack</Text>
        </Header>
        <Text>Hello Tis is the tech stack</Text>
      </View>
    );
  }
}


const mapStateToProps = state => {
  return { techs: state.techs};
};

export default connect(mapStateToProps)(TechStackList);
