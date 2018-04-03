const React = require('react');

const AppActions = require('../actions/AppActions');
const AppStore = require('../stores/AppStore');
const Contact = require('./Contact');

const ContactList = React.createClass({
    render: function () {
        return (
            <div>
                <h3>Contacts List</h3>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.contacts.map((contact, index) => {
                            return <Contact contact={contact} key={index} />
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = ContactList;