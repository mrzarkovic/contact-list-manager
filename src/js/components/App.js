const React = require('react');

const AppActions = require('../actions/AppActions');
const AppStore = require('../stores/AppStore');
const AddForm = require('./AddForm');
const EditForm = require('./EditForm');
const ContactList = require('./ContactList');

function getAppState () {
    return {
        contacts: AppStore.getContacts(),
        contactToEdit: AppStore.getContactToEdit()
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
        console.log(this.state.contactToEdit)
        var form = <AddForm />;
        if (this.state.contactToEdit != '') {
            form = <EditForm contactToEdit={ this.state.contactToEdit } />;
        }
        return (
            <div>
                { form }
                <ContactList contacts={ this.state.contacts } />
            </div>
        );
    },

    // Update view state when change is received
    _onChange: function () {
        this.setState(getAppState());
    }
});

module.exports = App;