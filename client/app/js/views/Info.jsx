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
                <h1 className="header"> Todolist Demo</h1>
                <hr/>
                <h4 className="header"> Author : &nbsp;&nbsp;&nbsp;
                  <a className="btn btn-info" href="https://github.com/PolarBearAndrew" target="_blank">
                    <img className="icon" src="http://www.nimrodstech.com/wp-content/uploads/1403730753_github.png" />
                    &nbsp;&nbsp; Andrew Chen
                  </a>
                </h4>

                <h4 className="header"> Source : &nbsp;&nbsp;&nbsp;
                  <a className="btn btn-success" href="https://github.com/PolarBearAndrew/Demo-TodoList">
                    <img className="icon" src="http://www.nimrodstech.com/wp-content/uploads/1403730753_github.png" />
                    &nbsp;&nbsp; Github Repository
                  </a>
                </h4>

                <h4 className="header"> Use :
                  <h5 className="header"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;React.js/Flux + Node.js + MySQL + AWS</h5>
                </h4>
            </div>
        );
    },
});

module.exports = Info;
