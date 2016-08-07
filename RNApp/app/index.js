import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Meteor, { createContainer } from 'react-native-meteor';

const SERVER_URL = 'ws://localhost:3000/websocket';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

class App extends Component {
  componentWillMount() {
    Meteor.connect(SERVER_URL);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native + Meteor!
        </Text>
        <Text style={styles.instructions}>
          Item Count: {this.props.count}
        </Text>
      </View>
    );
  }
}

App.propTypes = {
  count: React.PropTypes.number,
};

export default createContainer(() => {
  Meteor.subscribe('documents');
  return {
    count: Meteor.collection('Documents').find().length,
  };
}, App);
