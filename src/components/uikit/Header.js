import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ title }) => {
    return (
          <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{title}</Text>
          </View>
      );
}

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: 'blue',
        height: 116
     },
     textStyle: {
        color: 'white',
        fontSize: 30
     }
})

export default Header;