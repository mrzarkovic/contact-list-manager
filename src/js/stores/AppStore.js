const EventEmitter = require('events').EventEmitter;
const assign = require('object-assign');

const AppDispatcher = require('../dispatcher/AppDispatcher');
const AppConstants = require('../constants/AppConstants');
const AppAPI = require('../utils/appAPI');

const CHANGE_EVENT = 'change';


const AppStore = assign({}, EventEmitter.prototype, {
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

    return true;
});

module.exports = AppStore;