// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    apiKey: "AIzaSyD5KNKCKr5weaS6ASMHlU0R3cKD0gY2xXs",
    authDomain: "fir-notifications-c602e.firebaseapp.com",
    projectId: "fir-notifications-c602e",
    storageBucket: "fir-notifications-c602e.appspot.com",
    messagingSenderId: "463597493170",
    appId: "1:463597493170:web:3dbaf124ee1deba72622ab",
    measurementId: "G-4HJF3MHX3X"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});