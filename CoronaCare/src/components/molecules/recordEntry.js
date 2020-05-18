import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../../styles/styles';

const SwitchEntryBasedOnTemperature = (temperature) => {
  const tempFloat = parseFloat(temperature);
  if (tempFloat > 37.5) {
    return '#ff5757';
  }
  if (tempFloat > 37.0) {
    return '#ffe057';
  }
  return '#ffffff';
};

const RecordEntry = (props) => {
  const textColor = SwitchEntryBasedOnTemperature(props.temperature);
  return (
    <View style={[styles.item, {backgroundColor: textColor}]}>
      <View>
        <Image source={{uri: props.image}} style={styles.Image} />
        <Text>{props.timestamp}</Text>
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <Text style={styles.title}> {props.AMPM} </Text>
        <Text style={styles.Temperature}> {props.temperature + '°C'} </Text>
      </View>
    </View>
  );
};

export default RecordEntry;
