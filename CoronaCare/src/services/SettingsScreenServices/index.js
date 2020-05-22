import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import firebase from '@react-native-firebase/app';
import functions from '@react-native-firebase/functions';
import React from 'react';
import Navigation from 'react-native-navigation';

const currentUserUid = auth().currentUser.uid;
const userEmail = auth().currentUser.email;

export const DeleteAccount = async () => {
  try {
    DeleteAllRecords()
      .then(auth().currentUser.delete())
      .then(() => alert('Succesfully Delete User Account'));
  } catch {
    (err) => alert('Failed to delete user. Contact Administrator.' + err);
  }
};

const deleteFile = (pathToFile, fileName) => {
  const ref = firebase.storage().ref(pathToFile);
  const childRef = ref.child(fileName);
  childRef.delete();
};

const deleteFolderContents = (path) => {
  const ref = storage().ref(path);
  ref
    .listAll()
    .then((dir) => {
      dir.items.forEach((fileRef) => {
        deleteFile(ref.fullPath, fileRef.name);
      });
      dir.prefixes.forEach((folderRef) => {
        deleteFolderContents(folderRef.fullPath);
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
// const deleteAtPath = async (path) => {
//   var deleteFn = firebase.functions().httpsCallable('recursiveDelete');
//   deleteFn({path: path})
//     .then(function (result) {
//       console.log('Delete success: ' + JSON.stringify(result));
//     })
//     .catch(function (err) {
//       console.log('Delete failed, see console,');
//       console.warn(err);
//     });
// };

export const DeleteAllRecords = async () => {
  const ref = storage().ref(`${userEmail}`);
  try {
    deleteFolderContents(ref.fullPath);
    firestore()
      .collection('users')
      .doc(`${currentUserUid}`)
      .collection('records')
      .get()
      .then((res) => {
        if (res.empty) {
          alert('You have no records to be deleted!');
          return;
        }
        res.forEach((element) => {
          element.ref.delete();
        });
      })
      .finally(() => alert('All records have been successfully deleted'));
  } catch (error) {
    alert(error);
  }
};
