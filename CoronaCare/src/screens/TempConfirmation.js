/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  KeyboardAvoidingView,
  Text,
  StyleSheet,
  Image,
  Platform,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {uploadImage, uploadEntry} from '../services/FirebaseImageUpload';
import {Navigation} from 'react-native-navigation';
import {CreateFirebaseTimestamp} from '../services/CurrentDateGenerator';
import {Input, Button} from 'react-native-elements';

// eslint-disable-next-line no-undef
export default TempConfirmation = (props) => {
  const {
    data: {uri},
  } = props;
  const [input, setInput] = useState(0);
  const [uploadState, setUploadState] = useState('Confirm');

  const uploadRecord = async () => {
    CreateFirebaseTimestamp();
    if (!parseFloat(input)) {
      setUploadState('Confirm');
      alert('You have entered an invalid temperature');
      return;
    }

    setUploadState('uploading');
    await uploadImage(props.data)
      .then((res) => {
        const {url, timestamp, firebaseTimestamp} = res;
        uploadEntry(url, input, timestamp, firebaseTimestamp);
        alert('Your record has been successfully uploaded');
        Navigation.popToRoot('AFTERLOGIN_STACK');
      })
      .catch((error) => {
        setUploadState('Confirm');
        alert(error);
      });
    setUploadState('completed');
  };

  const uploadPortal = () => {
    Navigation.push('AFTERLOGIN_STACK', {
      component: {
        name: 'navigation.CoronaCare.WebViewScreen',
        options: {
          topBar: {
            visible: true,
          },
        },
      },
    });
  };

  return (
    <ImageBackground
      source={require('../assets/images/bkgrdBlank.png')}
      style={{flex: 1, resizeMode: 'cover'}}>
      <KeyboardAvoidingView
        style={styles.outsideWrapper}
        behavior={'position'}
        keyboardVerticalOffset={80} // adjust the value here if you need more padding
      >
        <View style={styles.topView}>
          <Image source={{uri: uri, width: 350, height: 450}} />
        </View>
        <View style={styles.bottomView}>
          <View style={styles.inputRow}>
            <Input
              containerStyle={styles.inputText}
              placeholder="Insert Temperature"
              onChangeText={(newText) => setInput(newText)}
              autoCapitalize="none"
            />
            <Text style={styles.degree}>°C</Text>
          </View>
          <Button
            title={uploadState}
            onPress={uploadRecord}
            buttonStyle={styles.buttonStyle}
          />
          <Button
            title="Upload to portal"
            onPress={uploadPortal}
            buttonStyle={styles.buttonStyle}
          />
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  outsideWrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  inputText: {
    fontWeight: '200',
    fontSize: 18,
    color: '#000000',
    borderRadius: 6,
    width: '60%',
  },
  buttonStyle: {
    margin: Platform.OS === 'ios' ? 10 : 5,
    width: Dimensions.get('window').width * 0.6,
    backgroundColor: '#062C49',
    borderRadius: 30,
    paddingVertical: 10,
  },
  topView: {
    display: 'flex',
    flex: 0.7,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  degree: {
    fontSize: 30,
    alignSelf: 'center',
  },
  bottomView: {
    flex: 0.3,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
