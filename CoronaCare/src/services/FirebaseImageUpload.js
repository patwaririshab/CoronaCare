import firestore from '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app'
import storage from '@react-native-firebase/storage'


export function uploadImage(data) {
    const ref = firebase.storage().ref('image2.jpg')
    const pathToFile = data.uri
    return ref.putFile(pathToFile)
}


export function uploadEntry(data){
    let docRef = firestore().collection('images');
   docRef
   .add({
        name: "rishab",
        title: "test message",
        imageUrl: data.uri
    })
    .then(() => {
        console.log('ImageUploaded');
    }).catch((error) => {
        alert(error)
    });
}

