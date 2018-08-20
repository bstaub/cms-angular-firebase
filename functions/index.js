// const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });



const functions = require('firebase-functions');
const admin = require("firebase-admin");
admin.initializeApp();

exports.fcmSend = functions.database.ref('/messages/{userId}/{messageId}').onWrite(( event ,context) => {
// exports.fcmSend = functions.database.ref('/messages/{userId}/{messageId}').onCreate(event => {


  const message = event.after.val();
  // const userId  = event.params.userId;
  const userId = 'Zd3HmJCFz7fdeWamtkd9d4XULfJ2';

  const payload = {
    notification: {
      title: message.title,
      body: message.body,
      icon: "https://placeimg.com/250/250/people"
    }
  };


  admin.database()
    .ref(`/fcmTokens/${userId}`)
    .once('value')
    .then(token => token.val() )
    .then(userFcmToken => {
      return admin.messaging().sendToDevice(userFcmToken, payload)
    })
    .then(res => {
      console.log("Sent Successfully", res);
    })
    .catch(err => {
      console.log(err);
    });

});
