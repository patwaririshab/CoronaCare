import React, { Component, useState } from 'react';
import { View, KeyboardAvoidingView, TextInput, Text, StyleSheet, Button, Image, Platform, SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {uploadImage, uploadEntry} from '../services/FirebaseImageUpload'
import { Navigation } from "react-native-navigation"
import {FullDateLocalTimeZone, CurrentTimeLocalTimeZone, CreateFirebaseTimestamp } from '../services/CurrentDateGenerator'

export default TempConfirmation =(props) => {
        const { data: {uri} } = props
        const [input, setInput] = useState(0)
        const [uploadState, setUploadState] = useState('Confirm')

       const uploadRecord = async () => {
           CreateFirebaseTimestamp()
            if (!parseFloat(input)){
                setUploadState('Confirm')
                alert('You have entered an invalid temperature')
                return
            }
            // const timeStamp = FullDateLocalTimeZone() + CurrentTimeLocalTimeZone()
            setUploadState('uploading')
            await uploadImage(props.data)
            .then((res) => {
                const { url, timestamp, firebaseTimestamp} = res
                uploadEntry(url,input, timestamp, firebaseTimestamp)
                alert('Your record has been successfully uploaded')
                Navigation.popToRoot('AFTERLOGIN_STACK')
            })
            .catch((error) => {
                setUploadState('Confirm')
                alert(error)
            })
            setUploadState('completed')
        }

        return (
                <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
                <KeyboardAvoidingView style={styles.outsideWrapper} behavior={Platform.OS == "ios" ? "padding" : "height"} 
                keyboardVerticalOffset = {200 + 20} // adjust the value here if you need more padding
                >
                <Image source={{uri: uri, width: 350, height: 450}} />
                <View style ={styles.tempInput} >
                <TextInput
                    style={styles.inputText}
                    placeholder="Insert Temperature"
                    onChangeText={newText => setInput(newText)}
                    autoCapitalize="none"
                    
                />
                <Text style={{textAlignVertical: "center", fontSize: 25, paddingLeft:8, color:"white"}}>°C</Text>
                </View>
                <Button 
                        title = {uploadState}
                        onPress={uploadRecord}
                    />
                </KeyboardAvoidingView>
            </LinearGradient>
        );
}

const styles = StyleSheet.create({


    linearGradient: {
        flex: 1,
    },
    outsideWrapper: {
        flex: 1,
        justifyContent: "center",
        padding: 50,
        alignItems: 'center',
    },
    inputText: {
        fontWeight: '200',
        fontSize: 18,
        color: '#000000',
        height: 40,
        width: 175,
        backgroundColor: 'rgba(255,255,255,0.7)',
        marginTop: 10, marginBottom: 10, paddingLeft: 10,
        borderRadius: 6,
    },

    tempInput: {
        display: "flex",
        flexDirection: "row"

    }
    
});