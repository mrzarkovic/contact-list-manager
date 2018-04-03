const React = require('react');

const AppActions = require('../actions/AppActions');
const AppStore = require('../stores/AppStore');

const Contact = React.createClass({
    render: function () {
        return (
            <tr>
                <td>{ this.props.contact.name }</td>
                <td>{ this.props.contact.phone }</td>
                <td>{ this.props.contact.email }</td>
                <td><a href="#" className="btn btn-default" onClick={this.handleEdit.bind(this, this.props.contact)}>Edit</a> <a href="#" className="btn btn-danger" onClick={this.handleRemove.bind(this, this.props.contact.id)}>Remove</a></td>
            </tr>
        );
    },

    handleRemove: function (id) {
        AppActions.removeContact(id);
    },

    handleEdit: function (contact) {
        AppActions.editContact(contact);
    }
});

module.exports = Contact;