/* eslint-disable prettier/prettier */
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export async function getData() {
    const currentUserEmail = auth().currentUser.email;
    const list = []
    await firestore()
    .collection('records')
    .where('userEmail', '==', currentUserEmail)
    .get()
    .then(querySnapshot => {
        console.log('Total Records', querySnapshot.size)
        querySnapshot.forEach(doc => {
            const { imageUrl, userEmail, temperature, timestamp} = doc.data()
            list.push({
                imageUrl: doc.get('imageUrl'),
                temperature: doc.get('temperature'),
                userEmail: doc.get('userEmail'),
                timestamp: doc.get('timestamp')
            })
        })
    })
    return list
}
