import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {LoginManager, AccessToken} from 'react-native-fbsdk';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password, callback) => {
          try {
            await auth()
              .signInWithEmailAndPassword(email, password)
              .then(() => callback());
          } catch (e) {
            console.log(e);
          }
        },
        googleLogin: async callback => {
          try {
            // Get the users ID token
            await GoogleSignin.hasPlayServices();
            const {idToken} = await GoogleSignin.signIn();
            console.log(idToken, 'idToken');
            // Create a Google credential with the token
            const googleCredential =
              auth.GoogleAuthProvider.credential(idToken);

            console.log(googleCredential, 'googleCredential');
            // Sign-in the user with the credential
            await auth()
              .signInWithCredential(googleCredential)
              .then(() => callback())

              .catch(error => {
                console.log('Something went wrong with sign up: ', error);
              });
          } catch (error) {
            console.log({error});
          }
        },
        fbLogin: async callback => {
          try {
            // Attempt login with permissions
            const result = await LoginManager.logInWithPermissions([
              'public_profile',
              'email',
            ]).then(() => {
              console.log('signInWithCredential()');
            });

            if (result.isCancelled) {
              throw 'User cancelled the login process';
            }

            // Once signed in, get the users AccesToken
            const data = await AccessToken.getCurrentAccessToken();

            if (!data) {
              throw 'Something went wrong obtaining access token';
            }

            // Create a Firebase credential with the AccessToken
            const facebookCredential = auth.FacebookAuthProvider.credential(
              data.accessToken,
            );

            // Sign-in the user with the credential
            await auth()
              .signInWithCredential(facebookCredential)
              .then(() => callback())

              .catch(error => {
                console.log('Something went wrong with sign up: ', error);
              });
          } catch (error) {
            console.log({error});
          }
        },
        googleSignUp: async callback => {
          try {
            // Get the users ID token
            const {idToken} = await GoogleSignin.signIn();

            // Create a Google credential with the token
            const googleCredential =
              auth.GoogleAuthProvider.credential(idToken);

            // Sign-in the user with the credential
            await auth()
              .signInWithCredential(googleCredential)

              .then(() => {
                firestore()
                  .collection('users')
                  .doc(auth().currentUser.uid)
                  .set({
                    fname: '',
                    lname: '',
                    email: auth().currentUser.email,
                    createdAt: firestore.Timestamp.fromDate(new Date()),
                    userImg: null,
                  })
                  .then(() => callback())
                  .catch(error => {
                    console.log(
                      'Something went wrong with added user to firestore: ',
                      error,
                    );
                  });
              });
          } catch (error) {
            console.log({error});
          }
        },
        fbSignup: async callback => {
          try {
            // Attempt login with permissions
            const result = await LoginManager.logInWithPermissions([
              'public_profile',
              'email',
            ]).then(() => {
              console.log('signInWithCredential()');
            });

            if (result.isCancelled) {
              throw 'User cancelled the login process';
            }

            // Once signed in, get the users AccesToken
            const data = await AccessToken.getCurrentAccessToken();

            if (!data) {
              throw 'Something went wrong obtaining access token';
            }

            // Create a Firebase credential with the AccessToken
            const facebookCredential = auth.FacebookAuthProvider.credential(
              data.accessToken,
            );

            // Sign-in the user with the credential
            await auth()
              .signInWithCredential(facebookCredential)

              .then(() => {
                console.log('current User', auth().currentUser);
                firestore()
                  .collection('users')
                  .doc(auth().currentUser.uid)
                  .set({
                    fname: '',
                    lname: '',
                    email: auth().currentUser.email,
                    createdAt: firestore.Timestamp.fromDate(new Date()),
                    userImg: null,
                  })
                  //ensure we catch any errors at this stage to advise us if something does go wrong
                  .catch(error => {
                    console.log(
                      'Something went wrong with added user to firestore: ',
                      error,
                    );
                  });
              })
              .then(() => callback())
              .catch(error => {
                console.log(
                  'Something went wrong with added user to firestore: ',
                  error,
                );
              });
          } catch (error) {
            console.log({error});
          }
        },
        register: async (email, password, callback) => {
          try {
            await auth()
              .createUserWithEmailAndPassword(email, password)
              .then(() => {
                firestore()
                  .collection('users')
                  .doc(auth().currentUser.uid)
                  .set({
                    fname: '',
                    lname: '',
                    email: email,
                    createdAt: firestore.Timestamp.fromDate(new Date()),
                    userImg: null,
                  })
                  .then(() => callback())
                  //ensure we catch any errors at this stage to advise us if something does go wrong
                  .catch(error => {
                    console.log(
                      'Something went wrong with added user to firestore: ',
                      error,
                    );
                  });
              })
              //we need to catch the whole sign up process if it fails too.
              .catch(error => {
                console.log('Something went wrong with sign up: ', error);
              });
          } catch (e) {
            console.log(e);
          }
        },
        logout: async callback => {
          try {
            await auth().signOut();

            await GoogleSignin.signOut().then(() => callback());
            await LoginManager.logOut();
            callback();
          } catch (e) {
            console.log(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
