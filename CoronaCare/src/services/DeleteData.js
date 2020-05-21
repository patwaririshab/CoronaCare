import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export const deleteRecord = async (recordUid) => {
  const currentUserUid = auth().currentUser.uid;
  await firestore()
    .collection('users')
    .doc(currentUserUid)
    .collection('records')
    .doc(recordUid)
    .delete()
    .then(() => {
      alert('The record has been succesfully deleted');
    });
};
