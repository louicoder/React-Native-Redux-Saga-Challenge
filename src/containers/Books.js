import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';

export default class App extends Component {
  state = {};

  componentDidMount() {
    // StatusBar.setHidden(true);
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        {/* <TouchableOpacity onPress={() => navigation.navigate('Details')}>
          <Text style={{ fontSize: 20 }}>This is the Books component</Text>
        </TouchableOpacity> */}

        <View onPress={() => alert('hello world')} style={styles.book}><Text>one</Text></View>
        <View style={styles.book}><Text>two</Text></View>
        <View style={styles.book}><Text>three</Text></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
    borderWidth: 1,
    borderColor: 'green',
    flexDirection: 'row'
  },
  book: {
    borderWidth: 1,
    borderColor: 'black',
    width: '30%',
    height: 100,
    margin: 5
    // flex: '1calc()'
  },
});
