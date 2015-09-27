
var actions      = require('../actions/AppActionCreator');
var TodoStore    = require('../stores/TodoStore');
var AppConstants = require('../constants/AppConstants');

var Info          = React.createFactory( require('./Info.jsx') );
var ListContainer = React.createFactory( require('./ListContainer.jsx') );


var MainApp = React.createClass({

    mixins: [],

    getDefaultProps: function() {
        return {};
    },

    shouldComponentUpdate: function(nextProps, nextState) {
        return true;
    },

    componentWillMount: function() {
        TodoStore.addListener( AppConstants.CHANGE_EVENT, this._onChange );
    },

    render: function() {

        return (
            <div className="wrapper">
                <ListContainer
                    filter={this.state.filter}
                    arrTodos={this.state.arrTodos}
                    onModify={this.state.onModify}
                    />
                <Info />
            </div>
        )
    },

    getInitialState: function() {
        return this.getTruth();
    },

    _onChange: function(){
        this.setState( this.getTruth() );
    },

    getTruth: function() {

        return {
            arrTodos: TodoStore.getTodos(),
            filter: TodoStore.getFilter(),
            onModify: TodoStore.getOnModify()
        };
    }
});

module.exports = MainApp;