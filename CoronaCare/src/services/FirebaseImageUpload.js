import firestore from '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app'
import auth from '@react-native-firebase/auth'
import storage from '@react-native-firebase/storage'
import {FullDateLocalTimeZone, CurrentTimeLocalTimeZone, CreateFirebaseTimestamp} from '../services/CurrentDateGenerator'



export async function uploadImage(data) {
    const userEmail = auth().currentUser.email
    // Must call currentDate first
    const currentDate = FullDateLocalTimeZone()
    const currentTime = CurrentTimeLocalTimeZone()
    const firebaseTimestamp = CreateFirebaseTimestamp()
    const pathToFile = data.uri
    const ref = await firebase.storage().ref(`${userEmail}/${currentDate}/${currentTime}.jpg`)
    await ref.putFile(pathToFile)
    const url = await ref.getDownloadURL()
    const timestamp = `${currentDate} ${currentTime}`
    return {url, timestamp, firebaseTimestamp}
}


export function uploadEntry(imageUrl, temperature, timestamp, firebaseTimestamp){
    const userEmail = auth().currentUser.email
    const currentUserUid = auth().currentUser.uid
    let docRef = firestore().collection('users').doc(`${currentUserUid}`).collection('records')
   docRef
   .add({
        temperature: temperature,
        timestamp: timestamp,
        imageUrl: imageUrl,
        userEmail: userEmail,
        firebaseTimestamp
    })
    .then(() => {
        console.log('Temperature Logged');
    }).catch((error) => {
        alert(error)
    });
}

