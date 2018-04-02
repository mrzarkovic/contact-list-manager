const AppActions = require('../actions/AppActions');
const firebase = require('firebase');

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDkFFzc6uek7WakpRdo6XOXuSGp-0-JYzI",
    authDomain: "contact-list-manager.firebaseapp.com",
    databaseURL: "https://contact-list-manager.firebaseio.com",
    projectId: "contact-list-manager",
    storageBucket: "contact-list-manager.appspot.com",
    messagingSenderId: "744112637670"
});

module.exports = {
    saveContact: function (contact) {
        let database = firebaseApp.database();
        database.ref('contacts').push({
            contact: contact
        });
    },

    getContacts: function () {
        let database = firebaseApp.database();
        database.ref('contacts').once('value', function (snapshot) {
            let contacts = [];
            snapshot.forEach(function (childSnapshot) {
                let contact = {
                    id: childSnapshot.key(),
                    name: childSnapshot.val().contact.name,
                    phone: childSnapshot.val().contact.phone,
                    email: childSnapshot.val().contact.email
                }
                contacts.push(contact);
                AppActions.receiveContacts(contacts);
            });
        });
    }
};