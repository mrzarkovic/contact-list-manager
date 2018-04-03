const React = require('react');

const AppActions = require('../actions/AppActions');
const AppStore = require('../stores/AppStore');

const EditForm = React.createClass({
    render: function () {
        return (
            <div className="well">
                <h3>Edit Contact</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" ref="name" onChange={this.handleChange.bind(this, 'name')} value={this.props.contactToEdit.name} className="form-control" placeholder="Add Name..." />
                    </div>
                    <div className="form-group">
                        <input type="text" ref="phone" onChange={this.handleChange.bind(this, 'phone')} value={this.props.contactToEdit.phone} className="form-control" placeholder="Add Phone..." />
                    </div>
                    <div className="form-group">
                        <input type="text" ref="email" onChange={this.handleChange.bind(this, 'email')} value={this.props.contactToEdit.email} className="form-control" placeholder="Add Email..." />
                    </div>
                    <button className="btn btn-primary" type="submit">Submit</button>
                </form>
            </div>
        );
    },

    handleChange: function (fieldName, e) {
        var newState = e.target.value;
        var selected = this.state.selected;
        selected.name = newState;
        this.setState({selected: selected});
    },

    handleSubmit: function (e) {
        e.preventDefault();

        var contact = {
            id: this.props.contactToEdit.id,
            name: this.refs.name.value.trim(),
            phone: this.refs.phone.value.trim(),
            email: this.refs.email.value.trim()
        };

        AppActions.updateContact(contact);
    }
});

module.exports = EditForm;