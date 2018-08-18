importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');


var config = {
  apiKey: 'AIzaSyBmJmQjRikwsocIBRROdaZUUbPIcc79XhM',
  authDomain: 'cms-angular-firebase-stbr.firebaseapp.com',
  databaseURL: 'https://cms-angular-firebase-stbr.firebaseio.com',
  projectId: 'cms-angular-firebase-stbr',
  storageBucket: 'cms-angular-firebase-stbr.appspot.com',
  messagingSenderId: '620951967722'
};

firebase.initializeApp(config);

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  const title = 'Hello World from SW!';
  const options = {
    body: payload.data.status
  };
  return self.registration.showNotification(title, options);
});
