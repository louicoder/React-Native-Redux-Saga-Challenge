import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../store/actions';

class App extends Component {
  state = {};

  componentDidMount() {
    this.props.getBooks();
  }

  render() {
	  return (
      <View style={styles.container}>
        <Text style={{ fontSize: 18 }}>This is the Home component</Text>
      </View>
	  );
  }
}

const mapStateToProps = state => ({
  books: state.books.books
});

const mapDispatchToProps = dispatch => ({
  getBooks: () => dispatch(actions.getBooksAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
