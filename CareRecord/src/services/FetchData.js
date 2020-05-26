/* eslint-disable prettier/prettier */
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export async function getData() {
    const currentUserEmail = auth().currentUser.email;
    const currentUserUid = auth().currentUser.uid;
    const list = []
    await firestore()
    .collection('users')
    .doc(`${currentUserUid}`)
    .collection('records')
    .get()
    .then(querySnapshot => {
        querySnapshot.forEach(doc => {
            list.push({
                id: doc.id,
                imageUrl: doc.get('imageUrl'),
                temperature: doc.get('temperature'),
                userEmail: doc.get('userEmail'),
                timestamp: doc.get('timestamp'),
                firebaseTimestamp: doc.get('firebaseTimestamp')
            })
        })
    })
    list.sort((a,b) => {return a.firebaseTimestamp.toMillis() < b.firebaseTimestamp.toMillis()})
    return list
}


export async function getOrganizationDetails() {
    const currentUserUid = auth().currentUser.uid;
    var result = {
        name: '',
        url: ''
    }
    await firestore()
    .collection('users')
    .doc(`${currentUserUid}`)
    .get()
    .then(documentSnapshot => {
        const orgDetails = {
            url: documentSnapshot.get('orgUrl'),
            name: documentSnapshot.get('orgName'),
        };
        result = orgDetails
    })
    .catch((err) => console.log(err));
    return result;
    // Learning point: never return within a promise
}

export async function getOrganizationUrl() {
    const currentUserUid = auth().currentUser.uid;
    var url = ''
    await firestore()
    .collection('users')
    .doc(`${currentUserUid}`)
    .get()
    .then(documentSnapshot => {
        url = documentSnapshot.get('orgUrl');
    })
    .catch((err) => console.log(err));
    return url;
}

export async function getOrganizationName() {
    const currentUserUid = auth().currentUser.uid;
    var name = ''
    await firestore()
    .collection('users')
    .doc(`${currentUserUid}`)
    .get()
    .then(documentSnapshot => {
        name = documentSnapshot.get('orgName');
    })
    .catch((err) => console.log(err));
    return name;
}