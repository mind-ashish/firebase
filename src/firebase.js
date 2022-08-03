// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/messaging';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyD5KNKCKr5weaS6ASMHlU0R3cKD0gY2xXs",
  authDomain: "fir-notifications-c602e.firebaseapp.com",
  projectId: "fir-notifications-c602e",
  storageBucket: "fir-notifications-c602e.appspot.com",
  messagingSenderId: "463597493170",
  appId: "1:463597493170:web:3dbaf124ee1deba72622ab",
  measurementId: "G-4HJF3MHX3X"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

export const getToken = (setTokenFound) => {
    return messaging.getToken({vapidKey: 'BJvbH9uXhS9MLHItbnpwASnDIojdTCfMTbw9SKmuUVpm_0YDtKBtX24qsbvxKS4aCzgbVzd_i9FzJdj2qE87bZw'}).then((currentToken) => {
      if (currentToken) {
        console.log('current token for client: ', currentToken);
        setTokenFound(true);
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        console.log('No registration token available. Request permission to generate one.');
        setTokenFound(false);
        // shows on the UI that permission is required 
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
      // catch error while creating client token
    });
  }

  
export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
});


