import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet, Image, Dimensions} from 'react-native';
import styles from '../../styles/styles'

const RecordEntry = (props) => {
    return(
        <View style={styles.item}>
            <View>
            <Image source = {{uri: props.image}} style={styles.Image}></Image>
            <Text>{props.timestamp}</Text>
            </View>
            <View style={{flex: 1, justifyContent: "flex-end" }}>
            <Text style={styles.title}> {props.title} </Text>
            <Text style={styles.Temperature}> {props.temperature} </Text>
            </View>
        </View> 
    )       
}

export default RecordEntry