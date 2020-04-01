import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const RecordsScreen = () => {
    return (
      <View style={styles.outsideWrapper}>
        <Text style={styles.welcomeText}>Records</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  outsideWrapper: {
    backgroundColor: '#FFFFFF',
    display: 'flex',
    padding: 30,
  },
  welcomeText: {
    fontWeight: '300',
    fontSize: 40,
    color: '#000000',
  },
});

export default RecordsScreen
