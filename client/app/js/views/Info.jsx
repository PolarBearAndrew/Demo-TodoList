/**
 *
 */
var ReactPropTypes = React.PropTypes;
var actions = require('../actions/AppActionCreator');

var Info = React.createClass({

  propTypes: {
  },

    render: function() {

        return (
            <div className="info">
                <h1 className="header"> Todolist Demo for Fandora </h1>
            </div>
        );
    },
});

module.exports = Info;
