const AppDispatcher = require('../dispatcher/AppDispatcher');
const AppConstants = require('../constants/AppConstants');

const AppActions = {
    saveContact: function (contact) {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.SAVE_CONTACT,
            contact: contact
        });
    },

    receiveContacts: function (contacts) {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.RECEIVE_CONTACTS,
            contacts: contacts
        });
    },

    removeContact: function (contactId) {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.REMOVE_CONTACT,
            contactId: contactId
        });
    },

    editContact: function (contact) {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.EDIT_CONTACT,
            contact: contact
        });
    },

    updateContact: function (contact) {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.UPDATE_CONTACT,
            contact: contact
        });
    }
};

module.exports = AppActions;