import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = ({ color, title, rightIcon, leftIcon, ...rest }) => (
  <View style={styles.container}>
    <View style={styles.left}>
      <Icon name={leftIcon} color={color} size={25} />
    </View>
    <View style={styles.center}>
      <Text style={{ fontSize: 25 }}>{title}</Text>
    </View>
    <View style={styles.right}>
      <Icon name={rightIcon} color={color} size={25} />
    </View>
  </View>
);

export default Header;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexGrow: 1,
    height: '100%',
    flexDirection: 'row'
  },
  left: {
    width: '20%',
    backgroundColor: 'yellow',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  center: {
    width: '60%',
    backgroundColor: 'yellow',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  right: {
    width: '20%',
    backgroundColor: 'yellow',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
