/**
 *
 */
var ReactPropTypes = React.PropTypes;
var actions        = require('../actions/AppActionCreator');

var ListItem = React.createFactory( require('./ListItem.jsx') );

var ListContainer = React.createClass({

    render: function() {

        // data
        var arrTodos = this.props.arrTodos || {};
        var data     = arrTodos.data || [];

        // ctrls
        var btnActive = ['none', false, true];
        var filter   = this.props.filter;

        // filter : none | active | completed
        if(filter!=='none'){
            data = data.filter( function( val ){
                return val.status === filter
            });
        }

        btnActive = btnActive.map( function( val ){
            if( filter === val )
                return 'disabled'
            else
                return ''
        })

        // ListItem
        var arr = data.map( function( val ){
            return <ListItem key={val.id} todo={val} />
        },  this );

        return (
            <div className="container col-md-6 todolist">
                <div className="list-group" >
                    <a className="list-group-item active">
                        <input className="form-control" />
                    </a>

                    { arr }

                    <a className="list-group-item active">

                        { arr.length } item left

                        <button
                            className="btn btn-info btn-xs filter"
                            disabled={ btnActive[2] }
                            onClick={ this._filter.bind( null, true ) }>
                            Completed </button>

                        <button
                            className="btn btn-info btn-xs filter"
                            disabled={ btnActive[1] }
                            onClick={ this._filter.bind( null, false ) }>
                            Active </button>

                        <button
                            className="btn btn-info btn-xs filter"
                            disabled={ btnActive[0] }
                            onClick={ this._filter.bind( null, 'none' ) }>
                            All </button>
                    </a>
                </div>
            </div>
        );
    },

    _filter: function( ctrl ){
        actions.filter(ctrl);
    }
});

module.exports = ListContainer;
