/**
 *
 */
//var cx = React.addons.classSet;
var ReactPropTypes = React.PropTypes;
// var actions = require('../actions/AppActionCreator');

var ListItem = React.createClass({

    propTypes: {
    },

    render: function() {

        var todo = this.props.todo;

        return (
            <a className="list-group-item"> { todo.job } </a>
        );
    },
});

module.exports = ListItem;
