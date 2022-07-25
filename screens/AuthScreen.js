// import React, {useEffect, useState} from 'react';
// import {StyleSheet, View, Button} from 'react-native';

// import {
//   GoogleSignin,
//   GoogleSigninButton,
// } from '@react-native-google-signin/google-signin';
// import auth from '@react-native-firebase/auth';

// GoogleSignin.configure({
//   webClientId:
//     '865854270379-mlorl3mhmplqd9drp79ld7duj0knlf14.apps.googleusercontent.com',
// });

// async function onGoogleButtonPress() {
//   // Get the users ID token
//   const {idToken} = await GoogleSignin.signIn();
//   // Create a Google credential with the token
//   const googleCredential = auth.GoogleAuthProvider.credential(idToken);
//   // Sign-in the user with the credential
//   return auth().signInWithCredential(googleCredential);
// }

// auth()
//   .createUserWithEmailAndPassword(
//     'jane.doe@example.com',
//     'SuperSecretPassword!',
//   )
//   .then(() => {
//     console.log('User account created & signed in!');
//   })
//   .catch(error => {
//     if (error.code === 'auth/email-already-in-use') {
//       console.log('That email address is already in use!');
//     }

//     if (error.code === 'auth/invalid-email') {
//       console.log('That email address is invalid!');
//     }

//     console.error(error);
//   });
// const AuthScreen = () => {
//   function onAuthStateChanged(user) {
//     setUser(user);
//     if (initializing) {
//       setInitializing(false);
//     }
//   }
//   const [initializing, setInitializing] = useState(true);
//   const [user, setUser] = useState();

//   useEffect(() => {
//     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//     return subscriber; // unsubscribe on unmount
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [auth]);
//   return (
//     <View>
//       <Button
//         title="Google Sign-In"
//         onPress={() =>
//           onGoogleButtonPress()
//             .then(() => console.log('Signed in with Google!'))
//             .catch(error => console.log('Message', error))
//         }
//       />
//       <GoogleSigninButton
//         style={{width: 192, height: 48}}
//         onPress={() => {}}
//         disabled={() => {}}
//       />
//     </View>
//   );
// };

// export default AuthScreen;

// const styles = StyleSheet.create({});
