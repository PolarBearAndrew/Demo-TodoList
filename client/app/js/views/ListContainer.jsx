/**
 *
 */
var ReactPropTypes = React.PropTypes;
var actions        = require('../actions/AppActionCreator');

var ListItem = React.createFactory( require('./ListItem.jsx') );

var ListContainer = React.createClass({

    render: function() {

        var arrTodos = this.props.arrTodos || {};
        var data = arrTodos.data || [];

        var arr = data.map( function( val ){
            return <ListItem key={val.id} todo={val} />
        },  this );

        return (
            <div className="container col-md-6">
                <div className="list-group" >
                    <a className="list-group-item"> Todolist demo for Fandora </a>
                    { arr }
                </div>
            </div>
        );
    },

});

module.exports = ListContainer;
