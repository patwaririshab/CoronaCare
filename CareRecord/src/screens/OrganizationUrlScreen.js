import React, {useState, useEffect} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  KeyboardAvoidingView,
  View,
  StyleSheet,
  Dimensions,
  Text,
} from 'react-native';
import {Button, Input} from 'react-native-elements';
import backgroundImage from '../assets/images/bkgrdBlank.png';
import {getOrganizationDetails} from '../services/FetchData';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const OrganizationUrlScreen = () => {
  const [organizationUrl, setOrganizationUrl] = useState('');
  const [organizationName, setOrganizationName] = useState('');
  const [newOrganizationUrl, setNewOrganizationUrl] = useState('');
  const [newOrganizationName, setNewOrganizationName] = useState('');

  useEffect(() => {
    getOrganizationDetails().then((response) => {
      setOrganizationName(response.name);
      setOrganizationUrl(response.url);
    });
  }, [organizationName, organizationUrl]);

  const updateOrganizationDetails = async () => {
    const currentUserUid = auth().currentUser.uid;
    await firestore()
      .collection('users')
      .doc(`${currentUserUid}`)
      .update({
        orgName: newOrganizationName,
        orgUrl: newOrganizationUrl,
      })
      .then(() => {
        setOrganizationName(newOrganizationName);
        setOrganizationUrl(newOrganizationUrl);
      })
      .finally(alert('Succesfully updated organisation details'));
  };

  return (
    <SafeAreaView style={styles.outerContainer}>
      <ImageBackground source={backgroundImage} style={styles.imageBagView}>
        <KeyboardAvoidingView
          style={styles.keyboardAvoidingView}
          behavior={'position'}>
          <View style={styles.topView}>
            <View style={styles.accountDetailsView}>
              <View style={styles.accountDetailsBox}>
                <Text style={styles.headerText}>
                  Current Organization Name: {organizationName}
                </Text>
                <Text style={styles.headerText}>
                  {`Current Organization Url:\n${organizationUrl}`}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.inputView}>
            <Input
              placeholder={'Set Organization Name'}
              onChangeText={(newValue) => setNewOrganizationName(newValue)}
              containerStyle={styles.inputContainerStyle}
              autoCapitalize={false}
            />
            <Input
              placeholder={'Paste Organization Url'}
              onChangeText={(newValue) => setNewOrganizationUrl(newValue)}
              containerStyle={styles.inputContainerStyle}
              autoCapitalize={false}
            />
          </View>
          <View style={styles.buttonView}>
            <Button
              buttonStyle={styles.button}
              title={'Update'}
              onPress={updateOrganizationDetails}
            />
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default OrganizationUrlScreen;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  imageBagView: {flex: 1, resizeMode: 'cover', justifyContent: 'flex-end'},
  keyboardAvoidingView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  inputView: {
    flex: 0.3,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#000000',
    marginLeft: 30,
    marginBottom: 10,
    alignSelf: 'flex-start',
    flexWrap: 'wrap',
  },
  inputContainerStyle: {
    width: Dimensions.get('window').width * 0.9,
  },
  buttonView: {
    flex: 0.4,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  button: {
    margin: 10,
    width: Dimensions.get('window').width * 0.6,
    backgroundColor: '#062C49',
    borderRadius: 30,
    paddingVertical: 10,
  },
  accountDetailsView: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '70%',
  },
  accountDetailsBox: {
    width: '90%',
    borderColor: '#7a7f80',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: 'white',
    height: '70%',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 15,
    shadowOffset: {
      height: 5,
      width: 5,
    },
  },
  topView: {
    flex: 0.3,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
});
