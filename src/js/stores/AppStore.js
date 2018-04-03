const EventEmitter = require('events').EventEmitter;
const assign = require('object-assign');

const AppDispatcher = require('../dispatcher/AppDispatcher');
const AppConstants = require('../constants/AppConstants');
const AppAPI = require('../utils/appAPI');

const CHANGE_EVENT = 'change';

var _contacts = [];

const AppStore = assign({}, EventEmitter.prototype, {
    getContacts: function (contact) {
        return _contacts;
    },
    
    saveContact: function (contact) {
        _contacts.push(contact);
    },

    setContacts: function (contacts) {
        _contacts = contacts;
    },
    
    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

AppDispatcher.register(function (payload) {
    let action = payload.action;

    switch(action.actionType) {
        case AppConstants.SAVE_CONTACT:
            console.log('Saving Contact...');

            // Store Save
            AppStore.saveContact(action.contact);

            // Save to API
            AppAPI.saveContact(action.contact);

            // Emit Change
            AppStore.emitChange();
            break;
        case AppConstants.RECEIVE_CONTACT:
            console.log('Receiving Contact...');

            // Store Save
            AppStore.setContacts(action.contacts);

            // Emit Change
            AppStore.emitChange();
            break;
    }

    return true;
});

module.exports = AppStore;