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
            <a className="list-group-item">
              { this.checkBox(todo.status) }
              &nbsp;&nbsp;&nbsp;
              { todo.job }
            </a>
        );
    },

    checkBox: function( check ){

      //console.log('check', check)

      if( check )
        return <span className="glyphicon glyphicon-check" aria-hidden="true" />
      else
        return <span className="glyphicon glyphicon-unchecked" aria-hidden="true" />
    }
});

module.exports = ListItem;
