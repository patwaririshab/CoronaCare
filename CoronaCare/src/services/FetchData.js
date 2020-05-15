/* eslint-disable prettier/prettier */
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export async function getData() {
    const currentUserEmail = auth().currentUser.email;
    const list = []
    await firestore()
    .collection('users')
    .doc(`${currentUserEmail}`)
    .collection('records')
    .where('userEmail', '==', currentUserEmail)
    .get()
    .then(querySnapshot => {
        querySnapshot.forEach(doc => {
            list.push({
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
