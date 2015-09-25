/**
 *
 */
var ReactPropTypes = React.PropTypes;
var actions = require('../actions/AppActionCreator');

var Footer = React.createClass({

  propTypes: {
  },

    render: function() {

        return (
            <footer className="footer">

                <p> Demo for Fandora </p>

            </footer>
        );
    },
});

module.exports = Footer;
