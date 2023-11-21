const admin = require('firebase-admin');
const serviceAccount = require('./firebase.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://torrs-swiss-army-app.firebaseio.com' // Replace with your Firebase project URL
});

const uid = '1234abcd'; // The user's UID
const additionalClaims = {
    isAdmin: true // Customize additional claims as needed
};

admin
    .auth()
    .createCustomToken(uid, additionalClaims)
    .then((customToken) => {
        console.log('Custom Token:', customToken);
    })
    .catch((error) => {
        console.error('Error creating custom token:', error);
    });
