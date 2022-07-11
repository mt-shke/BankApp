import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export const setUserToFirestore = async (user: any) => {
  try {
    const newUserInFirestore = await firestore()
      .collection('Users')
      .doc(user.uid)
      .set({
        email: user.email,
        password: '',
        name: 'Auth_Firebase',
        type: 'app',
        firstname: '',
      });
    return newUserInFirestore;
  } catch (error) {
    return null;
  }
};

export const updateUserFirestore = async (uid: string, data: any) => {
  try {
    await firestore().collection('Users').doc(uid).update(data);
    return {success: true};
  } catch (error: any) {
    console.error('In updateUserFn, Error while updating user:', error);
    return {success: false};
  }
};

export const updateFirestoreData = async (collection: string, data: any) => {
  try {
    await firestore()
      .collection(collection)
      .doc(auth().currentUser?.uid)
      .update(data);
    return {success: true};
  } catch (error: any) {
    console.error('In updateUserFn, Error while updating user:', error);
    return {success: false};
  }
};

export const getUserData = async (userUid: string) => {
  return await firestore().collection('Users').doc(userUid).get();
};

export const getAllUsers = async () => {
  return await firestore().collection('Users');
};

export const getSpecificDoc = async (collection: string) => {
  try {
    return await firestore()
      .collection(collection)
      .doc(auth().currentUser?.uid)
      .get();
  } catch (error) {
    return null;
  }
};
