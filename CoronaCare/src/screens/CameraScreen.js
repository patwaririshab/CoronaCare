import React, { PureComponent } from 'react';
import { AppRegistry, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import {Navigation} from 'react-native-navigation';

export default class CameraScreen extends PureComponent {
  state = {
    loading: false,
    snapped: false,
    data: []
  }

  changeToTemperatureConfirmationScreen = (data) => {
    Navigation.push("AFTERLOGIN_STACK", {
      component: {
          name: 'navigation.CoronaCare.TempConfirmation',
          passProps: {
            data: data,
          },
          options: {
            topBar: {
              visible: true,
              title: {
                text: 'Confirm Temperature'
              }
            }
          }
        },
  })
  }

  takePicture = async() => {
    if (this.camera) {
      this.setState({loading: true})
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      this.changeToTemperatureConfirmationScreen(data)
      this.setState({loading: false})
  };
}

  render() {
    return ( <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          onGoogleVisionBarcodesDetected={({ barcodes }) => {
            console.log(barcodes);
          }}
        />
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
            <Text style={{ fontSize: 14 }}> {this.state.loading ? `UPLOADING`: `SNAP`} </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});