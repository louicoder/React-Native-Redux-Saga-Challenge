import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default class App extends Component {
  state = {};

  data = [{ id: 1, name: 'Louis' }, { id: 2, name: 'frank' }, { id: 3, name: 'Isaac' }, { id: 4, name: 'Emma' }]

  render() {
    // const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={this.data}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.book}><Text>{item.name}</Text></View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'flex-start',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
    borderWidth: 3,
    borderColor: 'green',
    flexDirection: 'row',
    // flexWrap: 'wrap',
    // display: 'flex',
    // width: '100%'
  },
  book: {
    borderWidth: 1,
    borderColor: 'black',
    height: 200,
    width: '33.33%',
    // flexBasis: '33.33%',
    padding: 3
  },
  list: {
    width: '100%'
  }
});
