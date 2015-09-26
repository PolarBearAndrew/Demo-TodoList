/**
 *
 */
//var cx = React.addons.classSet;
var ReactPropTypes = React.PropTypes;
// var actions = require('../actions/AppActionCreator');

var ListItem = React.createClass({

    propTypes: {
    },

    getInitialState: function() {
      return { todo: this.props.todo, origin: this.props.todo };
    },

    render: function() {

        var todo = this.state.todo;

        return (
            <a className="list-group-item" onDoubleClick={ this.props.modify }>
              { this.checkBox(todo.status) }
              &nbsp;&nbsp;&nbsp;
              { this._job() }

              <span className="glyphicon glyphicon-remove pull-right" aria-hidden="true"  onClick={ this.props.remove } />
            </a>
        );
    },

    checkBox: function( check ){

      //console.log('check', check)

      if( check )
        return <span className="glyphicon glyphicon-check" aria-hidden="true" onClick={ this.props.checkFunc } />
      else
        return <span className="glyphicon glyphicon-unchecked" aria-hidden="true" onClick={ this.props.checkFunc } />
    },

    _job: function(){

      var todo = this.state.todo;

      if( this.props.onModify ){

        return <input type="text" className="modify" value={todo.job} onChange={this.handleChange} onKeyDown={ this._modify } ></input>
      }else{

        return todo.job
      }
    },

    // :)
    handleChange: function (event) {

      var todo = this.state.todo;
      todo.job = event.target.value
      this.setState({ todo: todo });
    },

    _modify: function( e ){

        // 13 is key Enter
        if( e.keyCode === 13  ){
            this.props.update( event.target.value );
        }else if( e.keyCode === 27 ){

        }
    }
});

module.exports = ListItem;
