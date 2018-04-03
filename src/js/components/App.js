const React = require('react');

const AppActions = require('../actions/AppActions');
const AppStore = require('../stores/AppStore');
const AddForm = require('./AddForm');
const ContactList = require('./ContactList');

function getAppState () {
    return {
        contacts: AppStore.getContacts()
    };
}

const App = React.createClass({
    getInitialState: function () {
        return getAppState();
    },
    
    componentDidMount: function () {
        AppStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
        AppStore.removeChangeListener(this._onChange);
    },

    render: function () {
        console.log(this.state.contacts)

        return (
            <div>
                <AddForm />
                <ContactList contacts={this.state.contacts} />
            </div>
        );
    },

    _onChange: function () {
        this.setState(getAppState());
    }
});

module.exports = App;