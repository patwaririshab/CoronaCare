import firestore from '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app'
import auth from '@react-native-firebase/auth'
import storage from '@react-native-firebase/storage'
import {FullDateLocalTimeZone, CurrentTimeLocalTimeZone} from '../services/CurrentDateGenerator'

<<<<<<< HEAD
const userEmail = auth().currentUser.email

export async function uploadImage(data) {
=======


export async function uploadImage(data) {
    const userEmail = auth().currentUser.email
>>>>>>> master
    const currentDate = FullDateLocalTimeZone()
    const currentTime = CurrentTimeLocalTimeZone()
    const pathToFile = data.uri
    const ref = await firebase.storage().ref(`${userEmail}/${currentDate}/${currentTime}.jpg`)
    await ref.putFile(pathToFile)
    const url = await ref.getDownloadURL()
    return url
}


export function uploadEntry(imageUrl, temperature, timestamp, ){
<<<<<<< HEAD
=======
    const userEmail = auth().currentUser.email
>>>>>>> master
    let docRef = firestore().collection('records')
   docRef
   .add({
        temperature: temperature,
        timestamp: timestamp,
        imageUrl: imageUrl,
        userEmail: userEmail
    })
    .then(() => {
        console.log('Temperature Logged');
    }).catch((error) => {
        alert(error)
    });
}

