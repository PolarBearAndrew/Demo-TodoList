/**
 *
 */
var Footer = React.createFactory( require('./Footer.jsx') );

var MainApp = React.createClass({

    mixins: [],

    getDefaultProps: function() {
        return;
    },

    shouldComponentUpdate: function(nextProps, nextState) {
        return true;
    },

    render: function() {

        return (
            <div className="wrapper">
                <Footer />
            </div>
        )
    },
});


module.exports = MainApp;
